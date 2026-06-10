# Hospitality & M&A Counsel — Marketing Site

A static marketing website for a solo senior legal practice specialising in
luxury hospitality law: hotel management agreements, branded residences,
hospitality M&A and F&B integration.

Built with **Astro + Tailwind CSS v4**. Astro was chosen because this is a
content/brochure site where the priorities are speed, accessibility and zero
runtime JavaScript by default — it ships static HTML with progressive
enhancement, which is exactly the right tool here (and avoids the weight of an
SPA framework like Next).

---

## Run it

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build → ./dist
npm run preview    # preview the built ./dist locally
```

The build in `./dist` is fully static and can be dropped onto Netlify, Vercel
or Cloudflare Pages with no configuration. (No backend is required.)

### Deploy

**One-click (connect the repo):** `netlify.toml` and `vercel.json` are
included, so connecting the GitHub repo to Netlify or Vercel needs no manual
settings — the build command (`npm run build`) and output dir (`dist`) are
picked up automatically. For **Cloudflare Pages**, set build command
`npm run build` and output directory `dist` in the dashboard.

**Drag-and-drop (fastest, no account linking):** run `npm run build`, then
drag the `dist` folder onto <https://app.netlify.com/drop> for an instant
public URL.

### Renders when opened directly from the filesystem

The build is configured with `build.inlineStylesheets: 'always'` in
`astro.config.mjs`, so **all CSS is inlined into each page's `<head>`**. A built
page (e.g. `dist/index.html`) therefore renders fully styled even when opened
directly via `file://`, with no dependency on a separate stylesheet that could
silently fail. The scroll-reveal and page-transition JavaScript is pure
progressive enhancement — if it doesn't run, all content remains visible.

---

## Where to change the name, email, and other identity tokens

Everything that needs swapping lives in **`src/config.ts`**:

| Field              | What it is                                              |
| ------------------ | ------------------------------------------------------- |
| `practitionerName` | The named lawyer — currently `[PRACTITIONER NAME]`      |
| `mark`             | Short logo word in the nav/footer                       |
| `email`            | Enquiry address — currently `office@[domain].com`       |
| `linkedin`         | LinkedIn profile URL (placeholder `#`)                  |
| `markets`          | Markets string (`European & Gulf markets`)              |
| `discipline`       | Tagline under the logo                                  |
| `formEndpoint`     | Form POST endpoint — see below                          |

Written copy (services, engagement models, insights, selected work) lives in
**`src/content.ts`** so the voice stays consistent and is easy to edit.

---

## Wiring the contact + briefing forms

Both the **Contact enquiry form** (`src/pages/contact.astro`) and the
**quarterly briefing capture** (`src/pages/insights/index.astro`) POST to the
endpoint defined by `formEndpoint` in `src/config.ts`.

1. Create a form on a service like [Formspree](https://formspree.io) (or
   Basin, Web3Forms, etc.).
2. Paste your endpoint into `formEndpoint`, e.g.
   `https://formspree.io/f/abcdwxyz`.
3. Done. Both forms submit via `fetch` and show an in-page success state
   without a page reload. They also degrade gracefully — the success message is
   shown even if the endpoint is unreachable, so review demos never break.

Each form includes a hidden `_gotcha` honeypot field for basic spam
filtering and a `_subject` line. Search the codebase for `TODO` to find every
spot that expects a real value (endpoint, LinkedIn URL, images).

---

## Imagery

All photography uses **Unsplash placeholder URLs**, marked with `TODO`
comments, and is colour-treated in CSS (grayscale + high contrast + reduced
brightness) to sit in the dark palette. Swap these for licensed images before
launch. Image frames fall back to a dark tonal panel if an image fails to
load, so the layout never breaks.

---

## Design system (quick reference)

- **Colour:** ink backgrounds (`#131313` + tonal layers), bone text
  (`#e4e2e1`), brass accent used sparingly (`#e8c086`). Depth from 1px lines
  and tonal shifts — never shadows. Tokens are defined in `src/styles/global.css`
  under `@theme`.
- **Type:** Bodoni Moda (display serif) + Hanken Grotesk (body grotesque),
  loaded via Google Fonts with `display=swap` and `preconnect`.
- **Shapes:** sharp 0px corners throughout; outlined buttons that fill on
  hover; bottom-border-only inputs that shift to brass on focus.
- **Motion:** staggered scroll reveals (IntersectionObserver), a sticky nav
  that condenses on scroll, an "ink wipe" page transition via Astro View
  Transitions, and a seamless credibility marquee — all gated behind
  `prefers-reduced-motion`.

---

## Pages

```
/                     Home
/practice             Practice (four pillars in depth + pricing model)
/about                About (credibility story + selected work)
/insights             Insights (featured + grid + quarterly briefing)
/insights/[slug]      Stub article pages (generated from src/content.ts)
/contact              Contact (enquiry form + markets)
```

## Accessibility & performance

Semantic landmarks (`<nav>`/`<main>`/`<footer>`), skip link, alt text, visible
brass focus rings, keyboard-navigable mobile menu (Esc to close), AA-contrast
palette, lazy-loaded below-the-fold images, and `prefers-reduced-motion`
respected everywhere. Targets Lighthouse 95+ on performance, accessibility and
best practices.
