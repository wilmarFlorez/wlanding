<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wlanding

- Use pnpm (`pnpm@9.13.0` is pinned in `package.json`): `pnpm dev`, `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.
- This is a single personal landing site for Wilmar. The rendered home page is `app/page.tsx`; shared document metadata, fonts, and the root flex layout are in `app/layout.tsx`.
- Styling is Tailwind CSS 4, loaded through `app/globals.css`. Keep shared color/font tokens there; use the configured `@/*` alias for root imports.
- Place static assets in `public/` and reference them from the site with root-relative paths such as `/next.svg`.
