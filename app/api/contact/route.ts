const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimits = new Map<string, { count: number; resetAt: number }>();
const ATTRIBUTION_LIMITS = {
  utm_source: 256,
  utm_medium: 256,
  utm_campaign: 256,
  utm_content: 256,
  gclid: 512,
  gbraid: 512,
  landing_url: 2048,
  captured_at: 40,
} as const;
type AttributionField = keyof typeof ATTRIBUTION_LIMITS;
type Attribution = Partial<Record<AttributionField, string>>;

export const runtime = "nodejs";
export const maxDuration = 30;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function text(value: unknown, required: boolean, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const result = value.trim();
  if (result.length > maxLength || (required && result.length === 0)) {
    return null;
  }

  return result;
}

function isValidLandingUrl(value: string) {
  if (value !== value.trim() || value.includes("?") || value.includes("#")) {
    return false;
  }

  try {
    const url = new URL(value);
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      Boolean(url.hostname) &&
      !url.search &&
      !url.hash
    );
  } catch {
    return false;
  }
}

function isValidIsoDate(value: string) {
  const match =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-](\d{2}):(\d{2}))$/.exec(
      value,
    );
  if (!match || Number.isNaN(Date.parse(value))) {
    return false;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const daysInMonth = [
    31,
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return (
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= daysInMonth[month - 1] &&
    Number(match[4]) <= 23 &&
    Number(match[5]) <= 59 &&
    Number(match[6]) <= 59 &&
    (match[7] === undefined ||
      (Number(match[7]) <= 23 && Number(match[8]) <= 59))
  );
}

function normalizeAttribution(value: unknown): Attribution | null {
  if (!isRecord(value)) {
    return null;
  }

  const attribution: Attribution = {};
  for (const [field, maxLength] of Object.entries(ATTRIBUTION_LIMITS) as [
    AttributionField,
    number,
  ][]) {
    const fieldValue = value[field];
    if (
      typeof fieldValue !== "string" ||
      fieldValue.trim().length === 0 ||
      fieldValue.length > maxLength
    ) {
      continue;
    }

    if (field === "landing_url" && !isValidLandingUrl(fieldValue)) {
      continue;
    }

    if (field === "captured_at" && !isValidIsoDate(fieldValue)) {
      continue;
    }

    attribution[field] = fieldValue;
  }

  return Object.keys(attribution).length > 0 ? attribution : null;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const limit = rateLimits.get(ip);

  if (!limit || limit.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  limit.count += 1;
  return limit.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ success: false }, { status: 403 });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return Response.json({ success: false }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    const body: unknown = await request.json();
    if (!isRecord(body)) {
      return Response.json({ success: false }, { status: 400 });
    }
    payload = body;
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  // Bots commonly fill fields that remain invisible to legitimate visitors.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ success: true });
  }

  const name = text(payload.name, true, 120);
  const email = text(payload.email, true, 254);
  const company = text(payload.company, false, 160);
  const role = text(payload.role, false, 160);
  const message = text(payload.message, true, 5000);
  const attribution = normalizeAttribution(payload.attribution);

  if (!name || !email || !message || !emailPattern.test(email) || company === null || role === null) {
    return Response.json({ success: false }, { status: 400 });
  }

  const endpoint = process.env.GOOGLE_SHEETS_ENDPOINT;
  const secret = process.env.GOOGLE_SHEETS_SHARED_SECRET;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!endpoint || !secret || !turnstileSecret) {
    console.error("Contact integration is not configured.");
    return Response.json({ success: false }, { status: 503 });
  }

  const turnstileToken = text(payload["cf-turnstile-response"], true, 2048);
  if (!turnstileToken) {
    return Response.json({ success: false }, { status: 403 });
  }

  try {
    const verificationData = new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken,
    });
    if (clientIp !== "unknown") {
      verificationData.set("remoteip", clientIp);
    }

    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verificationData,
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      },
    );
    const result: unknown = await verification.json();
    if (!verification.ok || !isRecord(result) || result.success !== true) {
      return Response.json({ success: false }, { status: 403 });
    }
  } catch {
    return Response.json({ success: false }, { status: 502 });
  }

  try {
    const redirect = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name,
        email,
        company,
        role,
        message,
        secret,
        ...(attribution ? { attribution } : {}),
      }),
      cache: "no-store",
      redirect: "manual",
      signal: AbortSignal.timeout(30_000),
    });
    const resultUrl = redirect.headers.get("location");
    if (redirect.status !== 302 || !resultUrl) {
      return Response.json({ success: false }, { status: 502 });
    }

    const response = await fetch(resultUrl, {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0",
        Referer: endpoint,
      },
      signal: AbortSignal.timeout(30_000),
    });
    const result: unknown = await response.json();

    if (!response.ok || !isRecord(result) || result.success !== true) {
      return Response.json({ success: false }, { status: 502 });
    }
  } catch {
    return Response.json({ success: false }, { status: 502 });
  }

  return Response.json({ success: true });
}
