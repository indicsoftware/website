## Indic Software — build conventions

Wordmark-only identity for a Rails-focused software studio: near-black ink on warm paper, one marigold/amber accent pair, ten soft geometric motifs. No proprietary logomark — never draw one.

### Setup

No provider or theme wrapper — components read CSS custom properties directly from the page, so `<link rel="stylesheet" href="styles.css">` + `<script src="_ds_bundle.js">` is the whole setup. Mount into a dedicated child node, never the host page's own React root.

### Styling idiom

Components style themselves via **props**, not CSS classes — pass the enum values below, don't hand-write class names:

- `Button`/`Card`/`Tag`/`IconButton` take a **tone/variant/ground** prop (e.g. `variant="accent"|"outline"|"ghost"`, `tone="marigold"|"amber"|"neutral"|"ink"`, `ground="paper"|"sunken"|"sunrise"|"ink"`) — never restyle these with inline color overrides.
- For anything you build yourself (page sections, layout glue), style with the design tokens directly as CSS custom properties, e.g. `background: var(--surface-page)`, `color: var(--text-accent)`, `border: 1px solid var(--border-hairline)`. Full list in `tokens/colors.css`, `tokens/spacing.css`, `tokens/typography.css`, `tokens/shape.css`, `tokens/motifs.css`. Read the relevant file before styling a new surface — don't invent hex values or px sizes.
- Corner radii: **0px** on every surface you build (cards, panels, inputs, image frames) — `999px` only on buttons/pills/switches/avatars. A 4–8px corner anywhere is a bug.
- Shadows: never use `box-shadow` for elevation. Cards are held by a 1px hairline (`var(--border-hairline)`); the only real shadows in the system are the dialog scrim and tooltip (`--shadow-overlay`, `--shadow-tooltip`).
- Focus ring is always `2px solid var(--focus-ring)` at 2px offset — never leave the browser default.

### Brand rules that apply to every screen you build

- **Wordmark**: `<Wordmark script="latin"|"devanagari" />` — the two scripts are separate marks, **never combined into one lockup**. Latin is default; use `tone="sweep"` (the turmeric→marigold→terracotta fill) only at 44px+ on a paper ground, otherwise flat ink.
- **Sunrise wash** (`--wash-sunrise`): full-bleed only, for hero/section-break/cover surfaces. Never behind body copy, never rotated, never two washes on one page.
- **Motifs** (`<Motif name="jaali"|"kolam"|"lahar"|"torana"|"sooryodaya"|"aavartan"|"handloom"|"veni"|"chhapa"|"mandala" />`): one per surface, tone-on-tone only, never behind text, never inside the wordmark's clear space. Use where a photograph would go — this system ships no photography or icon set of its own.
- **Icons**: no shipped icon set. Use [Lucide](https://lucide.dev) at 1.5px stroke, 20–24px, `currentColor` — load via `<script src="https://unpkg.com/lucide@latest"></script>` and call `lucide.createIcons()`. No emoji, ever, anywhere.
- **Layout**: 1440px page width, 96px gutter (24px on small screens), 8px spacing unit, everything flush left. Headers are static (never sticky). 3-up grids for cards, 2-up for split sections.
- **Motion**: 120ms color changes, 200ms surface changes, 420ms section reveals, all `cubic-bezier(0.22, 0.61, 0.36, 1)`. Fades and color moves only — no bounce, spring, parallax, or scroll-jacking.
- **Voice**: sentence case everywhere (never ALL CAPS in a sentence — tracked caps only for kickers/captions). Buttons are verb-first, 2–4 words ("Start a project", not "Submit"). Claims carry a number: "Eleven weeks, two people" beats "world-class".

### Where the truth lives

Read `tokens/*.css` before styling anything the components don't already cover. Read `components/<group>/<Name>/<Name>.prompt.md` for real usage examples before composing a component. `guidelines/*.html` has 17 rendered foundation specimens (color, type, spacing) if a token value is ambiguous.

### A composed example (real, from this system)

```jsx
const { Header, Card, Tag, Button } = window.IndicSoftware;

<div style={{ background: 'var(--surface-page)' }}>
  <Header links={[{ label: 'Work', active: true }, 'Rails', 'Studio', 'Notes']} action="Start a project" />
  <div style={{ display: 'flex', gap: 16, padding: '48px var(--gutter-page)' }}>
    <Card kicker="Case study" title="Rebuilding a lending platform on Rails 8" footer="11 weeks · 2 people">
      Eleven weeks, two people, one deploy a day.
    </Card>
    <Tag tone="marigold">Live</Tag>
    <Button variant="accent">Get in touch</Button>
  </div>
</div>
```

# IndicSoftware (indic-software-design@0.1.0)

This design system is the published indic-software-design React library, bundled as a single
browser global. All 15 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.IndicSoftware`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.IndicSoftware.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Button } = window.IndicSoftware;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Button />);
```

## Tokens

125 CSS custom properties from indic-software-design. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (28): `--text-primary`, `--text-body`, `--text-secondary`, …
- **spacing** (12): `--space-unit`, `--space-1`, `--space-2`, …
- **typography** (15): `--font-latin`, `--font-devanagari`, `--font-mono`, …
- **radius** (5): `--radius-none`, `--radius-sm`, `--radius-md`, …
- **shadow** (3): `--shadow-none`, `--shadow-overlay`, `--shadow-tooltip`
- **other** (62): `--ink-900`, `--ink-700`, `--ink-500`, …

## Components

### core
- `Button`
- `Card`
- `IconButton`
- `Tag`

### forms
- `Checkbox`
- `Input`
- `Radio`
- `Select`
- `Switch`

### feedback
- `Dialog`
- `Tooltip`

### navigation
- `Header`
- `Tabs`

### brand
- `Motif`
- `Wordmark`
