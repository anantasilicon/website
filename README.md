# Ananta website

Static marketing site (Next.js App Router, TypeScript, Tailwind CSS v4). No backend, database, cookies, analytics or third-party requests.

## Run locally

Requires Node.js 20+ (developed on 24) and npm.

```bash
npm ci            # install exact locked dependencies
npm run dev       # http://localhost:3000  (hot reload)
npm run lint      # ESLint
npx tsc --noEmit  # type-check (run `npm run build` once first: it generates route types)
npm run build     # static export to ./out
npm run launch-check   # what still blocks publishing the legal pages
npx serve out     # optional: preview the exact production files (or: python3 -m http.server -d out 4173)
```

## Where things live

| What | Where |
|---|---|
| Contact email, scheduling URL, legal entity | `src/config/site.ts` |
| Legal-pages publish gate and effective date | `src/config/legal.json` |
| Design tokens (colors, motion, surfaces) | `src/app/globals.css` |
| Design system and rationale | `design-system/ananta-silicon/MASTER.md` (Brand Layer + B10 at the top) |
| Pages | `src/app/page.tsx`, `src/app/founders/page.tsx`. Legal drafts: `src/content/legal/*.md` (routes `src/app/{privacy,terms}/page.legal.tsx`, **not built until published**) |
| Compliance, licenses, open items, deployment | `docs/` |

## Before this goes public

Read `docs/open-inputs.md` and `docs/legal/` (private notes). The privacy notice and terms are **unpublished drafts**: a production build contains no `/privacy` or `/terms` until `src/config/legal.json` is set to `published: true`, and that build fails while any placeholder remains. Run `npm run launch-check` for what is still open. Review the drafts with `npm run dev` at `/privacy/` and `/terms/`.
