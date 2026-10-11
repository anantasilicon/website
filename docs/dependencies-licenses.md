# Dependencies and licenses

Generated from `package-lock.json` (npm) and the font license data bundled with the UI UX Pro Max skill. Verified 2026-10-10. Re-check after any dependency change.

## Direct dependencies

| Package | Version | Role | License |
|---|---|---|---|
| next | 16.4.0 | Framework / static export | MIT |
| react, react-dom | 19.3.0 | UI runtime | MIT |
| tailwindcss | 4.3.3 | Styling (build time) | MIT |
| @tailwindcss/turbopack | 4.3.3 | Tailwind loader (build time) | MIT |
| typescript | 5.9.3 | Type-checking (dev) | Apache-2.0 |
| eslint, eslint-config-next | 9.39.5 / 16.4.0 | Linting (dev) | MIT |
| @types/node, @types/react, @types/react-dom | 20.19.43 / 19.3.0 / 19.3.0 | Types (dev) | MIT |

No dependency was added in the Stage 2 work. Motion for React, shadcn/ui, 21st.dev components and any icon library were evaluated and **not** adopted (icons are inline SVG written for this project).

## Fonts (self-hosted at build via `next/font/google`)

| Font | License | Source of claim |
|---|---|---|
| IBM Plex Sans | SIL Open Font License 1.1 | Google Fonts license data (`OFL`) |
| JetBrains Mono | SIL Open Font License 1.1 | Google Fonts license data (`OFL`) |

OFL permits embedding and redistribution with the font files. The browser never contacts Google: fonts are downloaded at build time and served from the site itself (verified: zero external resources at runtime).

## Transitive packages with non-MIT licenses (full tree: 400+ packages)

| License | Packages | Shipped to visitors? |
|---|---|---|
| LGPL-3.0-or-later | `@img/sharp-libvips-*` (optional, image optimization) | No. The site uses no `next/image`; nothing from these is in `out/`. |
| MPL-2.0 | `lightningcss*`, `axe-core` (via eslint a11y plugin) | No, build/dev tooling only |
| CC-BY-4.0 | `caniuse-lite` (browser data) | No, build-time data only. Attribution is carried by the package. |
| Python-2.0 | `argparse` (dev) | No |
| Apache-2.0, ISC, BSD-2/3, BlueOak, CC0, 0BSD | assorted build tooling | No |

What is actually shipped in `out/`: the Next.js/React runtime (MIT), the site's own code, and the two OFL fonts.

## Third-party design/content sources

- Palette: supplied by the founders.
- Logo mark: original, drawn for this project; no existing company mark was imitated. (No trademark search has been done; see `open-inputs.md`.)
- 21st.dev: browsed only. Its public listing states no license for community components, so none were used.
- UI UX Pro Max: used as a local design-intelligence tool; its output is guidance, not shipped code.

## Not verified

Licenses were read from package metadata, not from each package's license text, and this is not legal advice.
