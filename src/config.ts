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
