const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ success: false }, { status: 403 });
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
  if (!endpoint || !secret) {
    console.error("Google Sheets contact integration is not configured.");
    return Response.json({ success: false }, { status: 503 });
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
