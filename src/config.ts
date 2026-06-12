/**
 * SITE CONFIGURATION
 * ------------------------------------------------------------------
 * Identity lives here. These tokens are used across every page, so
 * changing one value updates the whole site.
 *
 *  • practitionerName  →  the named senior lawyer (large mark)
 *  • firm              →  the practice name (small mark beneath)
 *  • email             →  enquiry / contact address
 *  • formEndpoint      →  paste your Formspree-style endpoint (see README)
 */
export const site = {
  practitionerName: 'Alexandra Plain',
  firm: 'Odyssey Consultancy',
  email: 'alexandra@odysseyconsultancy.com',
  linkedin: '#', // TODO: replace with the LinkedIn profile URL
  markets: 'European & Gulf markets',
  discipline: 'Hospitality & M&A Counsel',

  // TODO: replace with your live form endpoint, e.g.
  // 'https://formspree.io/f/xxxxxxxx'
  formEndpoint: 'https://formspree.io/f/your-form-id',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Practice', href: '/practice' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];
