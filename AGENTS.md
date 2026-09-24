<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wlanding

## Architecture

- `/` is the Spanish landing page (`app/(es)`); `/en` is the English page (`app/(en)/en`). Both render `components/landing/LandingPage.tsx`. Keep user-facing copy in `components/landing/data.ts` synchronized for both `es` and `en`.
- Section markup belongs in `components/landing/`; shared tokens and responsive styles are in `app/globals.css`. Use the configured `@/*` import alias and root-relative paths for assets in `public/`.
- Each locale layout owns its metadata, document language, fonts, and the Google Ads tag. Update both layouts when changing shared metadata or analytics behavior.

## Contact Delivery

- `app/api/contact/route.ts` validates Turnstile server-side, rate-limits in memory (five requests per IP per 15 minutes), then forwards leads to the Google Apps Script in `script.js`. Keep the route and script field validation in sync.
- Deploy `script.js` separately as a Google Apps Script Web App. Its deployment URL and shared secret belong in `.env.local`; do not commit them.
- Copy `.env.example` to `.env.local` for local form testing. `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is exposed to the browser and incorporated at build time; `TURNSTILE_SECRET_KEY` and `GOOGLE_SHEETS_SHARED_SECRET` must remain server-only.

## Commands

- Use the pinned package manager: `pnpm@9.13.0`.
- Run `pnpm dev` locally. Before deployment, run `pnpm lint`, `pnpm exec tsc --noEmit`, then `pnpm build` in that order.
- There is no test suite or CI workflow. For form changes, manually verify Turnstile, a successful submission, and the resulting `leads-wilmar-landing` Google Sheet row on desktop and mobile.

## Formatting

- Do not use numbered lists by default. Use numbers only when explicitly required by the user or when the sequence itself is essential to understanding the content.
