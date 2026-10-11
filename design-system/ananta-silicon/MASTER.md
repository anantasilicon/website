# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Ananta Silicon
**Generated:** 2026-10-10 18:10:53
**Category:** B2B Service
**Design Dials:** Variance 3/10 (Centered / Minimal) | Motion 2/10 (Subtle) | Density 4/10 (Standard)

---

# ▶ ANANTA BRAND LAYER (AUTHORITATIVE — supersedes the generated sections below on any conflict)

The sections after "Generated baseline" were produced by `search.py --design-system` (query: *developer tools semiconductor verification infrastructure B2B technical precision engineering*, dials variance 3 / motion 2 / density 4). The generator picked **Minimalism & Swiss Style** + **Trust & Authority** and a generic navy/blue palette. We kept the style direction, density/motion dials, anti-patterns and checklists, and **replaced** the palette, typography, radii, shadows, modal blur, hover-lift, GSAP motion and "logos / certs / case studies / pricing" proof sections, which conflict with the Ananta brief or would require fabricated content.

## B1. Brand palette (preserved exactly)

| Token | Hex | Role |
|---|---|---|
| `--color-black` | `#000000` | Page base (dark) |
| `--color-white` | `#FFFFFF` | Primary text on dark; light "paper" surface |
| `--color-ink` (soft black) | `#1f1f1f` | Raised surface, panels, light-surface text |
| `--color-cyan` (dark cyan) | `#112526` | Deep foundation band, diagram ground |
| `--color-green` | `#02795d` | **Selective** emphasis: primary-button fill, active/interactive state, signal-path highlight |
| `--color-tan` | `#c2a87a` | **Secondary** accent only: eyebrow labels, annotations, hairline rules. Never a CTA, never body text |

Foundation = black / white / soft black / dark cyan. Green is rare and meaningful. Tan is quiet.

### Derived tokens (flagged: not in the original palette, required for contrast)

Measured WCAG contrast (computed, not estimated):

| Pair | Ratio | Verdict |
|---|---|---|
| white on black / soft black / cyan | 21.0 / 16.5 / 15.9 | pass AAA |
| tan on black / soft black / cyan | 9.2 / 7.2 / 7.0 | pass AA text |
| tan on white | 2.29 | **FAIL — never use tan on light surfaces** |
| white on green `#02795d` | 5.39 | pass AA text (button label OK) |
| green on white | 5.39 | pass AA text on light surfaces |
| green on black / soft black / cyan | 3.90 / 3.06 / 2.96 | **FAIL as text** (non-text ≥3:1 only on black) |

Therefore:
- `--color-green-bright` `#3cc4a0` — a lighter tint of the brand green used **only for text, links, focus rings and thin strokes on dark surfaces** (9.6 on black, 7.5 on soft black, 7.3 on cyan).
- `--color-muted` `#9aa8a9` — secondary text on dark (8.6 black, 6.7 soft black, 6.5 cyan).
- `--color-muted-light` `#5b5b5b` — secondary text on white (6.8).
- `--color-line` `rgba(255,255,255,0.14)` hairlines on dark; `rgba(0,0,0,0.16)` on light. `--color-line-strong` `rgba(255,255,255,0.5)` (≥3:1 for control boundaries).

### Semantic tokens (components must use these, never raw hex)

| Semantic | Dark theme (default) | Light "paper" surface |
|---|---|---|
| `--bg` | `#000000` | `#FFFFFF` |
| `--bg-raised` | `#1f1f1f` | `#FFFFFF` w/ line border |
| `--bg-deep` | `#112526` | — |
| `--fg` | `#FFFFFF` | `#1f1f1f` |
| `--fg-muted` | `#9aa8a9` | `#5b5b5b` |
| `--accent` (links/active text) | `#3cc4a0` | `#02795d` |
| `--accent-fill` (button bg) | `#02795d` (fg `#FFFFFF`) | `#02795d` (fg `#FFFFFF`) |
| `--annotation` | `#c2a87a` | `#1f1f1f` (use ink, not tan) |
| `--ring` | `#3cc4a0` | `#02795d` |

Default is dark-first. One or two sections may flip to the light paper surface for rhythm (e.g. the problem statement); the flip is done by a scoped token override (`data-surface="paper"`), not by ad-hoc colors. No gradients. **No glow, no blobs, no purple/pink/blue AI gradients.**

## B2. Typography

- **Sans (UI + body): IBM Plex Sans** — 400 / 500 / 600. **Mono (labels, technical annotations, code, signal names): JetBrains Mono** — 400 / 500. Source: skill typography domain, pairing *"Developer Mono"* (JetBrains Mono + IBM Plex Sans).
- **Deviation from generated output:** do not use the generated `@import url(fonts.googleapis.com…)`. Load both via `next/font/google` so fonts are self-hosted at build time (no runtime third-party request; consistent with the no-tracking requirement) with `display: swap`.
- Scale (px / rem, line-height): Display 56/3.5 (1.05, −0.02em) · H1 44/2.75 (1.1) · H2 32/2 (1.15) · H3 22/1.375 (1.3) · Body 17–18/1.0625–1.125 (1.6) · Small 14/0.875 (1.5) · Label (mono, uppercase, +0.08em) 12–13 (1.4). Body never below 16px. Fluid `clamp()` for Display/H1/H2 only.
- Weights: headings 500–600, body 400, labels 500. No bold-everything.
- Measure: prose max `65ch`. Headings use `text-wrap: balance`. Numbers/identifiers in mono with `tabular-nums`.
- Long tokens (signal paths, file names) use `overflow-wrap: anywhere`.

## B3. Layout, spacing, grid, breakpoints

- Spacing: 4px base, scale 4·8·12·16·24·32·48·64·96·128. Section vertical rhythm: 64 (mobile) → 96 → 128 (desktop). Density dial 4 = spacious-standard.
- Container: `max-width 72rem` (1152px) content, 16px gutter (<640), 24px (≥640), 32px (≥1024). Prose column `65ch`. No full-bleed text.
- Grid: 4 columns mobile, 8 tablet, 12 desktop; 24px gap. Asymmetry allowed only via column offsets within the grid (variance 3 = restrained).
- Breakpoints (Tailwind defaults, aligned to the skill's 375/768/1024/1440 test widths): `sm 640`, `md 768`, `lg 1024`, `xl 1280`. Mobile-first. Must verify at 375, 768, 1024, 1440.
- `min-h-dvh` not `100vh`. No horizontal scroll at 375px. Sticky nav must reserve scroll-padding so focused elements are not obscured (`scroll-padding-top`).
- z-index scale: 0 content · 10 sticky nav · 40 skip-link/overlays · 100 reserved.

## B4. Shape, borders, depth

- **Radius: 0–2px.** Default `0`; interactive controls `2px`. No giant rounded cards, no pills (status tags are rectangular).
- **Depth via 1px hairlines, not shadows.** No box-shadows on cards; no blur / backdrop-filter / glassmorphism. Raised surface = `--bg-raised` + hairline.
- Technical details (use sparingly, one or two per view): corner tick marks on diagram frames, 1px registration crosshairs, mono coordinate/index labels (`01`, `02`…), dotted connector rules, a thin tan eyebrow rule. Never a full-bleed circuit-board pattern.
- Motifs that must *explain*, not decorate: dependency-graph / signal-path SVG showing RTL ⇄ verification artifacts ⇄ gate-level netlist. Inline SVG, `currentColor` + tokens, `role="img"` with a text alternative (and a visible text/list equivalent for the same information).

## B5. Components

- **Wordmark:** text "ANANTA" in JetBrains Mono 500 (or Plex 600), +0.14em tracking, with "SILICON" in `--fg-muted`; optional minimal square-bracket/node glyph as inline SVG. No invented logo art beyond type.
- **Nav:** sticky top, `--bg` @ solid (no blur), 1px bottom hairline, height 64px. Wordmark left; links (Technical, About) + one CTA ("Talk to the founders") right. Current page marked with `aria-current="page"` + underline/weight (not color alone). On <768 the same 3 items remain visible inline or collapse to a simple disclosure; no hamburger animation. Nav placement identical on all pages.
- **Primary button:** bg `--accent-fill` `#02795d`, text white 500, padding 12×20, radius 2px, min-height 44px, hover → `#026a52` (white text ratio ≥ 6), no translate/scale. **Secondary:** transparent, 1px `--line-strong`, white text; hover border `--accent`. **One primary CTA per view.** Arrow glyph via inline SVG.
- **Links:** inline text links `--accent`, underline offset 3px, always underlined in prose (not color alone); hover thickens underline. Focus: 2px `--ring` outline, 3px offset, never removed. Min target 44px for standalone links on touch; inline prose links exempt per WCAG 2.2 inline exception.
- **Eyebrow/label:** mono, uppercase, 12–13px, tan on dark (ink on light), preceded by a short 24px hairline.
- **Status tag** (critical content pattern): rectangular mono tag with text **"CURRENT"**, **"IN PROGRESS"** or **"INTENDED"**. Distinguished by text + outline style (solid hairline vs dashed), never color alone. Used on the Technical page so planned capabilities are never presented as shipped.
- **Section header:** index number (mono, `01`), eyebrow, H2, optional ≤65ch lede.
- **Step/workflow list:** numbered, connected by a 1px vertical (mobile) / horizontal (desktop) rule with node squares; must remain a real ordered list (`<ol>`) in the DOM.
- **Footer:** minimal; wordmark, links to About and Technical (and Home), contact email link, one-line scope statement. No social-icon rows, no newsletter, no tracking.
- **Contact:** `mailto:` link only; address comes from a single config module. No form, no backend.

## B6. Content & credibility rules (design-level)

The generated "Proof (logos, certs, stats)", "Security badges. Case studies. Transparent pricing", and logo-carousel guidance are **not applicable and must not be implemented** — there are no customers, certifications, metrics or logos to show. Replace the Proof section with *Approach/Principles* and honest status labelling. No testimonials, no numbers, no benchmarks, no "trusted by". Do not claim to replace formal equivalence tools; position Ananta as investigation/resynchronization tooling that requires verification before accepting any change.

## B7. Motion (restrained)

- **Do not use GSAP / ScrollTrigger / Motion libraries.** CSS transitions only. Motion dial = 2/10.
- Tokens: `--dur-fast 120ms`, `--dur-base 200ms`, `--dur-slow 320ms`; easing `cubic-bezier(0.2, 0, 0, 1)` (decelerate). Exit ≈ 60–70% of enter.
- Animate `opacity`, `transform`, `color`, `border-color`, `stroke-dashoffset` only. Never width/height/top/left. No layout shift.
- Allowed: link/button color+border transitions; focus ring; one optional signal-trace stroke draw in the hero/workflow diagram (≤ 1.2s, once, on load — not scroll-hidden). **No scroll-reveal that hides content by default** (content must be fully visible without JS or motion). No parallax, no looping/ambient animation, no autoplay carousels.
- `@media (prefers-reduced-motion: reduce)`: all transitions/animations → `none`/0.01ms; diagrams render in final static state.

## B8. Accessibility & contrast requirements

- WCAG 2.2 AA minimum: text ≥ 4.5:1 (large ≥ 3:1), UI boundaries/focus/graphics ≥ 3:1. Use only the verified pairs in B1. Never place green text on dark; never tan on white.
- Visible `:focus-visible` ring on every interactive element (2px, `--ring`, offset 3px, ≥3:1). Sticky nav must not obscure focus (`scroll-padding-top` ≥ nav height + 16).
- Skip link ("Skip to main content") first in tab order. One `<h1>` per page; sequential headings. Landmarks: `header`, `nav`, `main`, `footer`. `aria-current` on active nav link.
- Diagrams: `role="img"` + `aria-labelledby`/`<title>`+`<desc>`, and an equivalent visible ordered list; decorative SVG `aria-hidden="true"`. Icons: inline SVG, one stroke width (1.5px), decorative icons `aria-hidden`; icon-only controls get an accessible name. **No emoji as icons. No icon library is added** (deviates from the skill's default Phosphor recommendation to keep dependencies minimal; inline SVG instead).
- Information never conveyed by color alone (status tags carry text). Text resizable to 200% without loss; `lang="en"`; viewport zoom never disabled.
- No cookies, analytics, or third-party requests. Fonts self-hosted.

## B9. Page overrides

This design system is intentionally single-source. No `pages/*.md` overrides are generated: the three pages (Home, About, Technical) share this Master. Any future deviation goes in `design-system/ananta-silicon/pages/<page>.md`.

---

## B10. Stage 2 additions (single-page site + privacy notice)

**Concept: "one design, several representations."** The page argues that one design exists as RTL, formal/verification results and a post-ECO netlist, and that these drift apart after an ECO. Graphics draw only that drift and its investigation.

- **Logo mark (original):** two parallel strokes on a 24px grid. The upper is straight; the lower dips and returns (`M3 16H8L11 19H13L16 16H21` under `M3 8H21`). It reads as a trace that diverges from a reference and resynchronizes. Stroke-only, `currentColor`, square caps, miter joins. Wordmark: `ANANTA`, JetBrains Mono 500, +0.14em.
- **Surfaces:** page rhythm alternates `deep` (#112526), `ink` (#1f1f1f), one `paper` (white) band for the engineering-problem section, and black for header/footer. `ink` surface: `--bg #1f1f1f`, `--bg-raised #000`. Verified: muted `#9aa8a9` on `#1f1f1f` 6.7:1, bright green `#3cc4a0` 7.5:1, tan 7.2:1.
- **Hero fragment:** two stacked mono panels (RTL / post-ECO netlist) with one highlighted diverging line, joined by a 1px green trace that draws once on load (transform only; static under reduced motion). Marked illustrative; not real design data.
- **Lane diagram:** four bands (post-ECO netlist → equivalence result → design context → RTL) joined by a vertical green trace with square nodes. Built from real text in HTML/CSS (not an SVG raster) so it reflows to 375px and is fully readable by assistive tech. Always captioned "Illustrative — not a product screenshot."
- **Approach sequence:** Trace · Contextualize · Propose · Validate as an `<ol>` with hairline rules and a status tag per stage (`In progress` / `Intended`). No three-card feature grid.
- **Nav:** sticky, solid black, hairline; wordmark + three in-page anchors (≥ md) + one CTA. `scroll-padding-top` ≥ nav height so focused anchors are never obscured.
- **Placeholders:** any founder/legal input renders as a dashed tan `[FOUNDER INPUT: …]` marker, visible until replaced. Never styled as real content.
- **Privacy page:** same tokens, prose measure 65ch, "DRAFT — pending legal review" banner. Never claims compliance.
- **Motion budget:** exactly one animation (hero trace draw, ≤1.2s, once). No Motion library; CSS only.

---

## B11. Revision: abstraction (supersedes the product-specific parts of B10)

Direction from the founders: the site must not disclose how the product works. Removed: the RTL/netlist code fragment, the four-band reasoning diagram, the four-stage approach section, status tags and the practitioner-questions list. B10 items for the logo mark, surfaces, nav behavior, placeholders, privacy page and the one-animation budget still apply.

- **Page = what, who, contact.** Hero · one-sentence problem + audience line (paper surface) · "Who we are" (ink) · contact (deep). Separate `/founders/` page and `/privacy/` notice. No approach/technical page.
- **Hero art:** the logo mark drawn at page width: a reference line, and a second line that splits away and rejoins. Reference/rail strokes in `--line-strong`; the diverged segment in `--accent` and drawn once on load (stroke-dashoffset, 1.6s, static under reduced motion). Abstract and `aria-hidden`; it carries no product detail. Fits above the fold at 1440×900 and 1280×720; on phones it follows the text instead of pinning to the viewport bottom.
- **Credibility facts allowed on the site:** Austin, Texas; two engineering students at The University of Texas at Austin; early stage. No names, bios, photos, milestones or affiliations beyond that unless supplied by the founders.
- **Copy rule:** describe the problem and who it is for; never the mechanism, tooling, or workflow.

---

## B12. Revision: confidential approach (supersedes B11 page order)

Public positioning: "Ananta is building tools to help semiconductor teams investigate design discrepancies and reduce verification friction." Intended value only; no mechanism, workflow, inputs/outputs, integrations, results or time-saving claims; no "AI" framing.

- **Home order:** nav · hero ("Less time investigating. / More time engineering." — second line in `--fg-muted`; one CTA "Talk to the founders") · problem (paper) · audience (ink; RTL design / design verification / formal verification as a hairline list, not cards) · early development + contact (deep) · footer. The founders credibility (Austin; two UT Austin engineering students) is one line in the early-development section; `/founders/` and `/privacy/` remain.
- **Graphics:** only the hero line art (the logo mark drawn large). It suggests precision and alignment and depicts no workflow or architecture.
- **Copy budget:** ~150–250 words on the home page.

---

## B13. Revision: correct positioning (supersedes the wording in B12; layout unchanged)

The product is **post-ECO RTL resynchronization**: netlist changes that never made it back into RTL are found and the RTL repaired. It is **not** a verification product and the audience is **not** verification teams.

- **Public positioning:** "Ananta is building tools to help design teams resynchronize RTL with the netlist after engineering change orders."
- **Audience ("Who it's for"):** RTL design · Physical design · Design engineering. Never list verification teams.
- **Problem copy:** "After an ECO, the RTL falls behind." Late changes land in the netlist; not all return to RTL; finding and repairing them is manual work close to tapeout. Intended-value framing only; no mechanism, no results, no guarantees.
- **Home link:** the logo scrolls to the top (smooth; instant under reduced motion) and clears any `#hash` when already on `/`; otherwise it navigates home.

---

## B14. Legal pages (`/privacy`, `/terms`)

Plain prose pages on the black base: Eyebrow "Legal", `h1`, a 65ch reading column, `h2` at 2xl, bulleted lists, accent-colored email links. Content is Markdown in `src/content/legal/`. Open items render as dashed tan `[FOUNDER INPUT: …]` / `[LEGAL REVIEW: …]` markers plus a DRAFT banner and `noindex`; these appear only in development builds. Legal links in the footer and contact section are shown only when published; the public site never displays a placeholder marker. No cookie banner or consent UI (the site sets no cookies); do not add one for appearance.

---

## B15. Header navigation (supersedes nav notes in B5/B10)

Tabs: **Problem** (`/#problem`), **Who it’s for** (`/#audience`), **Founders** (`/founders/`), then the **Contact** button (`/#contact`, unchanged). `/#id` hrefs work from every page. Only real pages get `aria-current="page"` (underline + brighter text); anchor tabs have no persistent current state (no scroll-spy).

- **md and up:** single 64px row; logo left; tabs then Contact right.
- **Phones:** two rows inside the sticky header: logo + Contact (64px), tabs (44px). `--nav-h` is 6.75rem below md and 4rem from md, and drives `scroll-padding-top`, so anchored sections land below the header. Tabs are ≥44px tall; the tab row scrolls horizontally rather than wrapping if a future tab does not fit.
- Keyboard order: skip link → logo → tabs → Contact. Header stays solid (no blur).

---

# Generated baseline (from `search.py`; superseded by the Brand Layer above where they conflict)

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#0F172A` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#334155` | `--color-secondary` |
| On Secondary | `#FFFFFF` | `--color-on-secondary` |
| Accent/CTA | `#0369A1` | `--color-accent` |
| On Accent/CTA | `#FFFFFF` | `--color-on-accent` |
| Background | `#F8FAFC` | `--color-background` |
| Foreground | `#020617` | `--color-foreground` |
| Card | `#FFFFFF` | `--color-card` |
| Card Foreground | `#020617` | `--color-card-foreground` |
| Muted | `#E8ECF1` | `--color-muted` |
| Muted Foreground | `#475569` | `--color-muted-foreground` |
| Border | `#E2E8F0` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `--color-on-destructive` |
| Ring | `#0F172A` | `--color-ring` |

**Color Notes:** Professional navy + blue CTA

### Typography

- **Heading Font:** Inter
- **Body Font:** Inter
- **Mood:** dark, cinematic, technical, precision, clean, premium, developer, professional, high-end utility
- **Google Fonts:** [Inter + Inter](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

*Density: 4/10 — Standard*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #0369A1;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0F172A;
  border: 2px solid #0F172A;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F8FAFC;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #0F172A;
  outline: none;
  box-shadow: 0 0 0 3px #0F172A20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Minimalism & Swiss Style

**Keywords:** Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential

**Best For:** Enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools

**Key Effects:** Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading

### Page Pattern

**Pattern Name:** Trust & Authority + Conversion

- **Conversion Strategy:** Security badges. Case studies. Transparent pricing. Low-friction form. Provide pause/stop and stop the logo carousel on focus, hover, and reduced motion. Previous/next controls provide the keyboard equivalent; pause offscreen/hidden and render a static logo set under reduced motion.
- **CTA Placement:** Contact Sales / Get Quote (primary) + Nav
- **Section Order:** Hero (mission/credibility) > Proof (logos, certs, stats) > Solution overview > Clear CTA path

---

## Motion

**Scroll Reveal** (Subtle) — Trigger: scroll (viewport enter) | Duration: 300-400ms | Easing: `power1.out`

```js
gsap.from(el, { opacity: 0, y: 12, duration: 0.35, ease: 'power1.out', scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
```

**Framework notes:** Requires the ScrollTrigger plugin registered once via gsap.registerPlugin(ScrollTrigger); Use matchMedia('(prefers-reduced-motion: reduce)') to skip non-essential motion and render the final state immediately

- ✅ Keep the y offset small (8-16px) so it reads as a fade, not a slide
- ❌ Don't reveal below-the-fold content needed for SEO/crawlers as invisible-by-default without a no-JS fallback
- ⚡ toggleActions 'play none none reverse' avoids re-triggering on every scroll direction change

---

## Anti-Patterns (Do NOT Use)

- ❌ Playful design
- ❌ Hidden credentials
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
