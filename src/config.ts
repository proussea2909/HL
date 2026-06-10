/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH — swap practice identity here.
 * ─────────────────────────────────────────────────────────────────────────────
 * Everything the site displays about the practitioner, the brand, the contact
 * email and the social links flows from this file. Change it here, rebuild, done.
 */

export const site = {
  /** The named senior practitioner. The practice is the partner. */
  practitioner: 'Alexandra Plain',

  /** Short brand / wordmark shown in the nav and footer. */
  brand: 'Odyssey',
  brandFull: 'Odyssey Consultancy',

  /** Primary domain. */
  domain: 'odysseyconsultancy.com',

  /**
   * Public-facing contact email shown on the site (mailto + footer + contact page).
   * NOTE: set to the on-brand address. The working inbox provided is
   * alex2802@hotmail.fr — either forward office@ to it, or replace the value below.
   * See README.md → "Swapping the name & email".
   */
  email: 'office@odysseyconsultancy.com',

  /** One-line positioning used in <title>, meta description and the footer. */
  overline: 'Hospitality & M&A Counsel',
  tagline: 'A senior specialist in luxury hospitality law. The partner is the practice.',

  /** Markets — geography-light by design. */
  markets: 'European & Gulf markets',

  /** Placeholder social. Swap href when a real profile exists. */
  linkedin: '#', // TODO: replace with the practitioner's LinkedIn URL.
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Practice', href: '/practice' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Contact / briefing form endpoint.
 * TODO: create a free form endpoint at https://formspree.io (or Basin / Web3Forms),
 * then paste the form ID below. Until then the forms run in DEMO mode and show the
 * success state without sending anything. See README.md → "Wiring the contact form".
 */
export const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/abcdwxyz'

/**
 * Base-path-aware link helper. The site may be served from a subpath (e.g. GitHub
 * Pages at /HL/) or from a domain root (/). Astro exposes the configured base as
 * import.meta.env.BASE_URL, so all internal links flow through this to stay correct
 * in every deployment. External links, mailto and #anchors pass through untouched.
 */
export function link(path: string): string {
  const base = import.meta.env.BASE_URL; // '/' or '/HL/'
  if (!path) return base;
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const b = base.endsWith('/') ? base.slice(0, -1) : base; // '' or '/HL'
  return b + (path.startsWith('/') ? path : '/' + path);
}
