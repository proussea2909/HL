# Odyssey — Hospitality & M&A Counsel

A production-ready marketing website for a solo senior legal practice specialising in
luxury hospitality law — Hotel Management Agreements, branded residences, hospitality M&A
and F&B integration. Dark, editorial, fast, and accessible.

Built with **Astro** + **Tailwind CSS v4**. Static output, zero runtime framework, no
backend.

> **Why Astro (one line):** it ships zero JS by default and produces a fully static
> bundle — ideal Lighthouse scores for a brochure site — while giving us native View
> Transitions for the page "ink-wipe" and component ergonomics for a multi-page build.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the built ./dist locally
```

Deploy the contents of `./dist` to **Netlify**, **Vercel**, or **Cloudflare Pages**
(framework preset: *Astro*; build command `npm run build`; output directory `dist`).

---

## Renders correctly when opened standalone

A hard requirement for this project was that a built page must render **fully styled even
when opened directly from the filesystem** (e.g. double-clicking `dist/index.html` during
review). This is handled two ways:

1. `astro.config.mjs` sets `build.inlineStylesheets: 'always'`, so **all CSS is inlined**
   into each page's HTML — there is no external stylesheet that can silently fail.
2. All interactivity is written as **inline `<script>`** (progressive enhancement), so a
   page works from `file://` with no external JS dependency.

Web fonts (Google Fonts) and placeholder photography load from CDNs; if offline they
degrade gracefully to system fallbacks and empty image frames — layout and styling stay
intact.

---

## Swapping the name & email  ← start here

Everything identity-related lives in **one file**: [`src/config.ts`](src/config.ts).

```ts
export const site = {
  practitioner: 'Alexandra Plain',          // the named senior lawyer
  brand: 'Odyssey',                          // wordmark in nav + footer
  brandFull: 'Odyssey Consultancy',
  domain: 'odysseyconsultancy.com',
  email: 'office@odysseyconsultancy.com',    // public-facing contact email (see note)
  linkedin: '#',                             // TODO: real LinkedIn URL
  // ...
};
```

Change a value, rebuild, done — it propagates to every page, the nav, the footer, all
CTAs, the contact details and the page `<title>`s.

> **Note on the email.** It is set to the on-brand `office@odysseyconsultancy.com` rather
> than a personal inbox, because a public-facing address at this tier should match the
> domain. The working inbox provided is **alex2802@hotmail.fr** — either:
> - set up forwarding from `office@odysseyconsultancy.com` → `alex2802@hotmail.fr`, **or**
> - change the `email` value in `src/config.ts` to `alex2802@hotmail.fr` directly.

Other content lives in plain data files under [`src/data/`](src/data/) (pillars,
engagement models, insights articles, credentials, selected work) — edit the copy there.

---

## Wiring the contact form

Both forms (the Contact enquiry and the quarterly-briefing capture) post to a single
**Formspree-style** endpoint, configured in [`src/config.ts`](src/config.ts):

```ts
export const FORM_ENDPOINT = ''; // ← paste your endpoint here
```

**While empty, the forms run in DEMO mode**: validation works and the success state shows,
but nothing is sent. To make them live:

1. Create a free form at **[formspree.io](https://formspree.io)** (or Basin / Web3Forms).
   Point it at your destination inbox.
2. Copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it as `FORM_ENDPOINT` in `src/config.ts` and rebuild.

The forms submit via `fetch` and show an inline confirmation without a page reload; if JS
is unavailable they fall back to a native POST to the same endpoint. The legal disclaimer
("Communication via this form does not create a lawyer–client relationship…") is rendered
beneath the enquiry form.

---

## Swapping the placeholder images

All imagery uses dark, high-contrast **Unsplash placeholders**, each marked with a
`TODO` comment in the source. Search `TODO` (e.g. in `src/pages/*.astro` and
`src/data/*.ts`) to find every image to replace with licensed photography. Keep
replacements dark/high-contrast to preserve the aesthetic; the `.frame` treatment applies
grayscale/contrast automatically.

---

## Project structure

```
src/
  config.ts            ← single source of truth: name, email, brand, nav, form endpoint
  styles/global.css    ← design tokens (Tailwind v4 @theme) + components + motion
  layouts/
    BaseLayout.astro   ← <head>, fonts, inlined CSS, view transitions, PE scripts
  components/
    Nav.astro          ← sticky nav + full-screen mobile menu
    Footer.astro
    Marquee.astro      ← credibility marquee (real facts only)
    ContactForm.astro  ← enquiry form + success state + disclaimer
    BriefingForm.astro ← quarterly-briefing email capture
  data/
    pillars.ts  engagements.ts  insights.ts  about.ts  marquee.ts
  pages/
    index.astro  practice.astro  about.astro  insights.astro  contact.astro
    insights/[slug].astro   ← generated article pages
public/
  favicon.svg
```

---

## Design system (at a glance)

- **Palette:** ink `#131313` (+ tonal layers), bone `#e4e2e1` text, brass `#e8c086`
  accent used sparingly. Depth from tonal layers and 1px lines — **no shadows**.
- **Type:** Bodoni Moda (display) + Hanken Grotesk (body), via Google Fonts `display=swap`.
- **Layout:** asymmetric 12-column editorial grid, fluid `5vw` gutters, generous space.
- **Components:** sharp `0px` corners; outlined buttons that fill on hover; bottom-border
  inputs with brass focus; bordered cards with tonal hover.
- **Motion:** IntersectionObserver scroll reveals (progressive enhancement — content is
  visible without JS), a sticky nav that condenses on scroll, a slow looping marquee, and
  an "ink-wipe" View Transition between routes. **All motion respects
  `prefers-reduced-motion`.**

---

## Accessibility & performance

- Semantic `<nav>` / `<main>` / `<footer>`, skip link, alt text, visible focus states,
  full keyboard navigation (incl. the mobile menu), WCAG AA contrast on the dark palette.
- Reveals never leave content invisible if JS fails; reduced-motion forces everything
  visible and still.
- Zero render-blocking app JS; CSS inlined; images lazy-loaded below the fold with
  explicit dimensions to avoid layout shift.

---

## Content & truthfulness notes

The copy uses **only real, verifiable credibility** — firm pedigree (Mayer Brown,
Gowlings, Squire Patton Boggs), brand experience (Radisson, Accor, Marriott, Four
Seasons) and European & Gulf markets. By design there are **no published prices, no
invented metrics, no client logos, no named testimonials, and no street address**.
Confidential matters are described in anonymized terms with "references available on
request."
