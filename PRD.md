# Product Requirements Document (PRD)
## Hospitality & M&A Solo Legal Practice — Marketing Website

| | |
|---|---|
| **Document status** | Draft v1.0 — for approval before build |
| **Author** | Claude Code |
| **Date** | 2026-06-10 |
| **Codename** | `HL` |
| **Target branch** | `claude/gifted-volta-sjrc64` |
| **Deliverable** | Static, production-ready marketing website |

---

## 1. Summary

A five-page, static marketing website for a **single named senior lawyer** (a solo
practice, not a firm) specialising in **luxury hospitality law** — Hotel Management
Agreements, branded residences, hospitality M&A, and F&B integration.

The entire proposition is *seniority without leverage*: the client always works
directly with a ~30-year partner who has personally negotiated the agreements they
face, against the brands they are dealing with. The site must read like a private
members' club crossed with an elite architecture practice — quiet, dark, editorial,
and confident enough to publish **no prices and no street address**.

The deliverable is a fast, accessible, zero-/low-JS static site that builds to
`/dist` and can be dropped on Netlify, Vercel, or Cloudflare Pages.

---

## 2. Goals & non-goals

### 2.1 Primary goals
1. Communicate, within five seconds, that *you are buying the lawyer, not a firm.*
2. Establish credibility through **real, nameable** facts only (firm pedigree, brand
   experience, markets) — never invented metrics.
3. Present four service pillars and three engagement models with senior, understated copy.
4. Convert a GC / principal / development director into an enquiry (contact form + mailto).
5. Hit a **Lighthouse 95+** bar on Performance, Accessibility, and Best Practices.

### 2.2 Secondary goals
- Position the practice as a thought leader via an Insights section with real,
  specific article titles and standfirsts.
- Capture emails via a "quarterly briefing" block.

### 2.3 Non-goals (explicitly out of scope)
- No backend, database, CMS, or authentication.
- No e-commerce, client portal, or document automation.
- No published pricing of any kind.
- No invented HQ address, office locations, client logos, named testimonials,
  award badges, "Est. [year]", or dollar-figure metrics.
- No heavy SPA framework (no Next.js, CRA, or equivalent).

---

## 3. Audience & positioning

| Attribute | Detail |
|---|---|
| **The practitioner** | One named senior lawyer, ~30 years' experience, former partner at major international firms. |
| **The buyer** | A General Counsel, principal, or development director who already knows they need a specialist and values **judgment over headcount**. |
| **Core message** | "The partner is the practice — no associates, no leverage, no churn." |
| **Tone** | Senior, precise, understated, high-trust. Short declarative sentences. No exclamation marks, no jargon padding, no marketer enthusiasm. |

### 3.1 Two firm decisions (honor exactly)
- **No published prices anywhere.** Fixed-fee model is *stated* as the approach;
  actual numbers are "indicative on enquiry." No-price reads as confidence at this tier.
- **Geography-light.** Reference **"European & Gulf markets"** only. No HQ street
  address. Jurisdictions appear as a quiet footnote/caption, not a headline.

### 3.2 Truthfulness rules (hard constraints)
- Use placeholder tokens everywhere a real identity would appear:
  - Name → `[PRACTITIONER NAME]`
  - Email → `office@[domain].com`
- **Permitted, real credibility (use these):**
  - Partnership-level experience at **Mayer Brown, Gowlings, Squire Patton Boggs**.
  - Experience across deals with **Radisson, Accor, Marriott, Four Seasons** and
    equivalent luxury/upper-upscale brands.
  - Active work across **European and Gulf markets**.
- **Forbidden:** invented dollar figures, client logos, named testimonials, fake
  "Est. [year]", award badges, invented offices.
- Confidential work is described in **anonymized** terms ("a leading European resort
  operator," "a Gulf-based developer") with "references available on request."

---

## 4. Technical architecture

| Decision | Choice | Rationale |
|---|---|---|
| **Framework** | **Astro** | Content-site optimised, zero-JS by default, excellent Lighthouse, native View Transitions for the "ink wipe" page transition. |
| **Styling** | **Tailwind CSS** | Configured with the design tokens below as custom theme values; no framework defaults bleeding through. |
| **Build output** | Static `/dist` | Deployable to Netlify / Vercel / Cloudflare Pages. |
| **JS** | Progressive enhancement only | Scroll reveals via IntersectionObserver; content visible by default if JS fails. |
| **Fonts** | Google Fonts, `display=swap` + preconnect | Serif display + grotesque body. |
| **Forms** | Formspree-style placeholder endpoint | Clearly-marked `TODO`; graceful success state. No backend. |

### 4.1 Hard rendering requirement
The site **must render correctly even if a single built page is opened directly from
the filesystem** during review. This is satisfied because Astro/Vite bundles output;
we will **verify** a built page renders fully styled when opened standalone. (If we
ever fell back to plain HTML, critical CSS would be inlined instead.)

### 4.2 Performance budget
- Lighthouse ≥ 95 on Performance / Accessibility / Best Practices.
- Images: dark/high-contrast treatment, compressed, width-appropriate, lazy-loaded
  below the fold, explicit dimensions to avoid CLS.
- No render-blocking third-party JS.

---

## 5. Design system

### 5.1 Concept
High-contrast minimalist, editorial, **dark-mode-first.** A private members' club
crossed with an elite architecture firm. **Restraint is the signal of seniority.**
Depth comes from **tonal layers and 1px lines, not shadows.**

### 5.2 Color tokens

| Role | Token | Hex |
|---|---|---|
| Ink base | `ink` | `#131313` |
| Ink deep | `ink-900` | `#0e0e0e` |
| Ink layer | `ink-800` | `#1b1c1c` |
| Ink layer | `ink-700` | `#1f2020` |
| Ink layer | `ink-600` | `#2a2a2a` |
| Bone primary | `bone` | `#e4e2e1` |
| Bone variant | `bone-2` | `#c4c7c7` |
| Bone muted | `bone-muted` | `#c8c6c5` |
| Brass accent | `brass` | `#e8c086` |
| Brass dim | `brass-dim` | `#9f7d49` |
| Line | `line` | `#444748` |
| Line bright | `line-2` | `#8e9192` |

**Brass is used sparingly** — interactive cues, overlines, small marks, dashes —
**never large fills.** Prohibited: decorative gradients, action-blue, purple, any
SaaS palette.

### 5.3 Typography

| Use | Family | Spec |
|---|---|---|
| Display / headlines | **Bodoni Moda** (fallback: Playfair Display) | Hero `clamp(48px, 7vw, 80px)`, `letter-spacing: -0.02em`, weight 400. |
| Body + labels | **Hanken Grotesk** | 16–18px body. |
| Overlines / metadata | Hanken Grotesk | 12px, weight 600, `letter-spacing: 0.15em`, UPPERCASE, paired with a short brass dash (e.g. `01 / CORE`, `HOSPITALITY & M&A COUNSEL`). |

### 5.4 Layout
- **Asymmetric 12-column editorial grid.** Content sits offset (headline spans cols
  1–6; body sits cols 8–11) with intentional empty "ink space." Reject centered-container default.
- Fluid page margins at `5vw`. Large vertical rhythm (~8rem desktop) between sections.
- Generous negative space — exclusivity through emptiness.

### 5.5 Components
- **Corners:** sharp `0px` everywhere (buttons, inputs, frames, cards). Circles only for functional icons.
- **Buttons:** bone outline + bone text; hover fills bone, text flips to ink; wide,
  significant letter-spacing; `0.4s ease`.
- **Inputs:** bottom-border only; small-caps label above the line; focus shifts border to brass.
- **Cards:** no shadows — 1px borders / subtle tonal shift; min 32px padding; hover lifts border/tonal bg.
- **Chips:** small sharp 1px-border boxes for categories (e.g. "Brand Licensing," "Rental Programmes").
- **Imagery:** architecture/interiors as "windows" in the grid; grayscale / high-contrast /
  low-brightness treatment; subtle scale-on-hover (~1.05, 0.7–0.9s); faint 1px inner
  border; ink gradient overlay on hero for legibility.
- **Texture (optional):** ~2–3% film-grain/noise overlay; faint 1px translucent section dividers.

### 5.6 Motion (restrained, progressive enhancement)
- Staggered fade-up reveals on scroll (IntersectionObserver), ~0.8s ease-out, small translateY.
- Sticky nav subtly shrinks / raises background opacity after scroll.
- Page transitions: elegant "ink wipe" via Astro **View Transitions** (~0.5s), or restrained crossfade.
- Link arrows nudge on hover; marquee scrolls slowly, loops seamlessly.
- **All motion gated behind `prefers-reduced-motion`.** Content never invisible if JS fails.

---

## 6. Content — service pillars & engagement models

### 6.1 Four service pillars
1. **Hotel Management Agreements** *(core anchor)* — negotiating/structuring HMAs with
   major operators (Radisson, Accor, Marriott, Four Seasons & equivalents). Deep,
   repeated, brand-specific experience → better commercial terms, fewer surprises,
   faster signing.
2. **Branded Residences** *(core, growing)* — legal architecture of branded-residence
   projects: brand licensing, hotel-operator ↔ residential interface, rental programmes,
   disclosure, structuring. Offered as a **defined, fixed-scope package** (describe the
   package; no price).
3. **Hospitality M&A** *(scope extension)* — acquisitions, disposals, corporate
   transactions involving hotels, operators, hospitality real estate. Positioned as an
   extension of the specialism, *not* general corporate M&A.
4. **F&B Integration** *(emerging)* — celebrity-chef licensing, hotel F&B operator
   agreements, F&B components embedded in developments. An integrated capability, not a
   standalone restaurant practice.

### 6.2 Three engagement models (no prices)
- **(a) Fixed-fee per matter** — the default; known scope for a known price.
- **(b) Branded Residences package** — fixed scope for the full legal layer of a project.
- **(c) Fractional / flexible GC retainer** — ongoing access for mid-size hotel
  investment platforms, family offices, developers. **The structural anchor.**
- Note: hourly available selectively where fixed-fee doesn't fit.
- Always end with: *"Indicative fees provided on enquiry."*

---

## 7. Pages & requirements

### 7.1 Shared shell
- **Sticky nav:** logo left; Home / Practice / About / Insights / Contact; an **Enquire** button.
  Subtly shrinks / gains background opacity on scroll. Working mobile hamburger → full-screen menu.
- **Footer:** practice blurb; practice-area links; page links; connect/LinkedIn placeholder;
  copyright with "References available on request"; Privacy / Legal Notice placeholder links.

### 7.2 Home
Full-bleed architectural hero (one-line confident headline + subhead + single CTA) →
"the difference / you're buying the lawyer, not a firm" value section → four pillars →
thin scrolling credibility marquee (**real facts only**: firm names, operators,
"fixed-fee by default," "European & Gulf markets" — *not* invented metrics) → asymmetric
story block with image → three engagement models as cards → insights teaser (3 cards) →
closing CTA.

### 7.3 Practice
Editorial deep-dive on the four pillars, alternating image-left / image-right, each with
a short capability list or chips. Ends with a plain-language **"how the work is priced"**
section (model, not numbers) + CTA.

### 7.4 About
Truthful credibility story: ~30 years; the three named firms; evolution from BigLaw
partner to independent specialist; manifesto pull-quote ("The partner is the practice…");
credentials block (Firms / Operators / Markets / Model); "selected work" with 3–4
anonymized matters; 6-point "why this person, not a firm" grid.

### 7.5 Insights
Editorial article grid (one featured + a 3-up + a second row). **Real, specific**
hospitality-lawyer titles + 1–2 sentence standfirsts (e.g. HMA termination rights, the
operator–residential interface, structuring hospitality M&A around the agreements,
celebrity-chef licence terms, Gulf developer legal checklist). "Quarterly briefing"
email-capture block. Articles link to `#` (or cheap stub pages).

### 7.6 Contact
Split layout: left = short invitation + direct `mailto:` email + "Markets: European &
Gulf hospitality"; right = enquiry form (Name, Email, Organisation [optional], Nature of
the Matter). **Disclaimer:** *"Communication via this form does not create a lawyer–client
relationship. All enquiries are treated in strict confidence."* Jurisdictions
("Europe · The Gulf") as a quiet caption on a full-bleed image, not a headline.

---

## 8. Forms

- Posts to a **placeholder Formspree-style endpoint** with a clearly-marked `TODO`.
- **Graceful success state** (inline confirmation; no page reload required).
- Client-side validation; accessible labels and error messaging.
- Two forms total: Contact enquiry + Quarterly briefing email capture.

---

## 9. Accessibility & quality bar

- Semantic landmarks: real `<nav>` / `<main>` / `<footer>`.
- Alt text on all images; decorative images marked appropriately.
- Visible focus states; full keyboard navigability (including the mobile menu).
- WCAG **AA** contrast across the dark palette.
- `prefers-reduced-motion` respected for every animation.
- Fully responsive; **nothing overflows at 390px**.
- Lighthouse **95+** on Performance / Accessibility / Best Practices.

---

## 10. Deliverables

1. Astro + Tailwind project building to `/dist`.
2. All five pages, fully styled, with **real written copy** in the senior voice (no lorem ipsum).
3. Shared nav + footer + mobile menu.
4. Placeholder imagery (dark/high-contrast) with `TODO` swap comments.
5. **README.md** covering: run dev, build, where to swap `[PRACTITIONER NAME]` /
   `office@[domain].com`, and how to wire the contact form.
6. This PRD.

---

## 11. Acceptance checklist (self-verify before finishing)

- [ ] All 5 pages built, fully styled, real senior-voice copy.
- [ ] A built page renders correctly when opened directly (no silent CSS failure).
- [ ] No invented prices, logos, named testimonials, addresses, or fake metrics; placeholder tokens used.
- [ ] Dark editorial aesthetic: serif display + grotesque body; brass sparing; sharp corners; asymmetric grid; tonal-layer depth; generous space.
- [ ] Smooth scroll reveals + page transitions; all motion respects reduced-motion; reveals are progressive enhancement.
- [ ] Fully responsive; working mobile menu; no overflow at 390px.
- [ ] Accessible: landmarks, alt text, focus states, AA contrast, keyboard nav.
- [ ] Contact + briefing forms with disclaimer + marked TODO endpoint + success state.
- [ ] README explains run/build, where to change name + email, and how to wire the form.
- [ ] Lighthouse 95+ across Performance / Accessibility / Best Practices.

---

## 12. Proposed build plan (milestones)

| # | Milestone | Output |
|---|---|---|
| M0 | **PRD approval** | This document. |
| M1 | **Scaffold + design tokens** | Astro + Tailwind project; tokens in theme; fonts; base layout; nav + footer; mobile menu; View Transitions. |
| M2 | **Home** | Full home page with all sections + marquee + reveals. |
| M3 | **Practice + About** | Two editorial pages with alternating layouts. |
| M4 | **Insights + Contact** | Article grid, briefing capture, contact form + success state. |
| M5 | **Polish & QA** | Responsive pass (390px), accessibility/contrast, motion gating, Lighthouse, standalone-render verification. |
| M6 | **README + handoff** | Docs, swap instructions, form-wiring guide; final commit + push. |

---

## 13. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Lighthouse < 95 from web fonts | `display=swap`, preconnect, subset, system fallbacks; keep JS minimal. |
| CSS fails when a page is opened standalone | Astro/Vite bundles output; verify a built page opens fully styled. |
| Motion feels gimmicky | Restraint; short durations; reduced-motion gating; progressive enhancement. |
| Dark-palette contrast fails AA | Use bone-on-ink combinations validated against AA; reserve brass for non-text accents. |
| Truthfulness drift (invented facts) | Enforce placeholder tokens and the permitted-credibility allowlist in §3. |

---

## 14. Open questions (for the user)

1. **Build now?** Should I proceed straight into M1 once you approve this PRD?
2. **Domain/name:** Keep `[PRACTITIONER NAME]` / `office@[domain].com` tokens, or do you
   have a real name + domain to drop in?
3. **Deploy target:** Netlify, Vercel, or Cloudflare Pages — or leave deploy-agnostic?
4. **Stub article pages:** Generate real stub pages for Insights, or link to `#` for now?
