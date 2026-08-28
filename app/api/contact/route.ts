const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

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
      body: JSON.stringify({ name, email, company, role, message, secret }),
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
