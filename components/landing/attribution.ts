export const ATTRIBUTION_STORAGE_KEY = "wlanding:attribution:v1";

const QUERY_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "gclid",
  "gbraid",
] as const;

const FIELD_LIMITS = {
  utm_source: 256,
  utm_medium: 256,
  utm_campaign: 256,
  utm_content: 256,
  gclid: 512,
  gbraid: 512,
  landing_url: 2048,
  captured_at: 40,
} as const;

export type Attribution = Partial<Record<keyof typeof FIELD_LIMITS, string>>;

let memoryAttribution: Attribution | null = null;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
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

function readStoredAttribution(): Attribution | null {
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const parsed: unknown = JSON.parse(stored);
    if (!isRecord(parsed)) {
      return null;
    }

    const keys = Object.keys(parsed);
    if (keys.some((key) => !Object.prototype.hasOwnProperty.call(FIELD_LIMITS, key))) {
      return null;
    }

    const attribution: Attribution = {};
    for (const key of keys as (keyof typeof FIELD_LIMITS)[]) {
      const value = parsed[key];
      if (
        typeof value !== "string" ||
        value.trim().length === 0 ||
        value.length > FIELD_LIMITS[key]
      ) {
        return null;
      }

      if (key === "landing_url" && !isValidLandingUrl(value)) {
        return null;
      }

      if (key === "captured_at" && !isValidIsoDate(value)) {
        return null;
      }

      attribution[key] = value;
    }

    const hasQueryAttribution = QUERY_FIELDS.some((field) => field in attribution);
    if (!hasQueryAttribution || !attribution.landing_url || !attribution.captured_at) {
      return null;
    }

    return attribution;
  } catch {
    return null;
  }
}

export function captureAttribution(): Attribution | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (memoryAttribution) {
    return memoryAttribution;
  }

  const storedAttribution = readStoredAttribution();
  if (storedAttribution) {
    memoryAttribution = storedAttribution;
    return storedAttribution;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  for (const field of QUERY_FIELDS) {
    const value = searchParams.get(field);
    if (
      typeof value === "string" &&
      value.trim().length > 0 &&
      value.length <= FIELD_LIMITS[field]
    ) {
      attribution[field] = value;
    }
  }

  if (!QUERY_FIELDS.some((field) => field in attribution)) {
    return null;
  }

  const landingUrl = `${window.location.origin}${window.location.pathname}`;
  if (landingUrl.length <= FIELD_LIMITS.landing_url && isValidLandingUrl(landingUrl)) {
    attribution.landing_url = landingUrl;
  }
  attribution.captured_at = new Date().toISOString();

  memoryAttribution = attribution;
  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Keep this page's attribution in memory when browser storage is unavailable.
  }

  return attribution;
}
