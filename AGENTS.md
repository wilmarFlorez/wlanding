<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wlanding

## Purpose

- This Spanish (`es_CO`) personal site must work both as a paid-traffic landing page and as a LinkedIn portfolio: retain a clear value proposition, credible examples, and a prominent truthful CTA when changing copy or section order.
- Do not add a lead form or claim that contact is available until a functional destination and response flow exist. The current contact section intentionally says no data is collected.

## Structure

- `app/page.tsx` composes the landing sections; `app/layout.tsx` owns document metadata, locale, Google fonts, and the root layout.
- Keep reusable landing copy and repeated cards in `components/landing/data.ts`; section markup belongs in `components/landing/`.
- Shared design tokens and all responsive styles live in `app/globals.css`. Tailwind CSS 4 is loaded there through `@import "tailwindcss"`.
- Use the configured `@/*` alias for root imports. Put static assets in `public/` and reference them with root-relative paths.

## Commands

- Use the pinned package manager: `pnpm@9.13.0`.
- Run `pnpm dev` for local development, `pnpm lint` for ESLint, `pnpm exec tsc --noEmit` for type checking, and `pnpm build` for the production build.
- There is no test suite or CI workflow configured; validate UI changes at desktop and mobile breakpoints in addition to linting/type checking.

## Formatting

- Do not use numbered lists by default. Use numbers only when explicitly required by the user or when the sequence itself is essential to understanding the content.
