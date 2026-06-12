/**
 * SHARED CONTENT
 * All written copy lives here so the voice stays consistent and editable.
 * Imagery uses Unsplash placeholders — see the TODO note on `img` fields and
 * swap for licensed photography before launch.
 */

export interface Pillar {
  id: string;
  index: string;
  title: string;
  tagline: string;
  /** Short label shown on the home page cards (e.g. "Core · Growing"). */
  cardTag: string;
  body: string;
  longBody: string;
  chips: string[];
  img: string;
  alt: string;
}

// TODO: replace Unsplash URLs with licensed, colour-graded photography.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const pillars: Pillar[] = [
  {
    id: 'hma',
    index: '01',
    title: 'Hotel Management Agreements',
    tagline: 'The core anchor',
    cardTag: 'Core',
    body: 'Negotiating and structuring HMAs with the major international operators, where repeated, brand-specific experience converts directly into better terms.',
    longBody:
      'The HMA is where deep, repeated, brand-specific experience translates directly into commercial terms. An owner negotiating their first Marriott agreement sits across from a counterparty that signs them every week. The value is having someone on your side of the table who also does it every week — who knows which clauses move, which never do, and where the real exposure sits years after signing.',
    chips: ['Term & Renewal', 'Performance Tests', 'Termination Rights', 'Fee Structures', 'Operator Standards', 'Owner Controls'],
    img: u('1564501049412-61c2a3083791'),
    alt: 'Minimalist luxury hotel lobby with double-height windows and stone floor',
  },
  {
    id: 'residences',
    index: '02',
    title: 'Branded Residences',
    tagline: 'Core, and growing',
    cardTag: 'Core · Growing',
    body: 'The full legal architecture of a branded-residence project, offered as a defined, fixed-scope package that gives developers cost certainty on the legal layer.',
    longBody:
      'Branded residences sit at the intersection of hotel operation and residential sale, and the legal layer is where the two must be reconciled. Offered as a defined, fixed-scope package, the work gives developers cost certainty on the legal layer of a project — from the licence terms through to the documents an end purchaser signs.',
    chips: ['Brand Licensing', 'Rental Programmes', 'Operator Interface', 'Disclosure', 'Strata & Structuring', 'Purchaser Documents'],
    img: u('1618773928121-c32242e63f39'),
    alt: 'Refined residential interior with warm timber, marble and considered lighting',
  },
  {
    id: 'ma',
    index: '03',
    title: 'Hospitality M&A',
    tagline: 'A scope extension',
    cardTag: 'Scope Extension',
    body: 'Acquisitions, disposals and corporate transactions involving hotels, operators and hospitality real estate, structured by the person who understands the underlying agreements.',
    longBody:
      'This is not general corporate M&A. It is the same person who understands the underlying management and operational agreements structuring the deal around them. When the value of an asset turns on the terms of its HMA, the lawyer who reads that agreement fluently is the lawyer who should be shaping the transaction.',
    chips: ['Acquisitions', 'Disposals', 'Operator Transactions', 'Due Diligence', 'Joint Ventures', 'Portfolio Deals'],
    img: u('1497366754035-f200968a6e72'),
    alt: 'Dark, high-contrast architectural facade of a modern building',
  },
  {
    id: 'fnb',
    index: '04',
    title: 'F&B Integration',
    tagline: 'An emerging capability',
    cardTag: 'Emerging',
    body: 'The food-and-beverage layer of hospitality and residential projects: celebrity-chef licensing, operator agreements and the F&B components embedded in developments.',
    longBody:
      'Not a standalone restaurant practice — an integrated capability within the hospitality real-estate positioning. As signature dining becomes central to how a property is valued and marketed, the agreements behind it deserve the same rigour as the HMA itself.',
    chips: ['Chef Licensing', 'F&B Operator Agreements', 'Concession Terms', 'Brand Standards', 'Embedded F&B'],
    img: u('1517248135467-4c7edcad34c4'),
    alt: 'Quiet, elegant restaurant interior in low warm light',
  },
];

export interface Engagement {
  index: string;
  title: string;
  body: string;
  meta: string;
  points: string[];
}

export const engagements: Engagement[] = [
  {
    index: '01',
    title: 'Fixed-Fee per Matter',
    meta: 'The default',
    body: 'A known scope for a known price. Most matters fall here: the agreement, the negotiation, the deliverable — defined and priced before the work begins, so the cost is never a surprise.',
    points: ['Defined scope', 'Single agreed fee', 'No clock-watching'],
  },
  {
    index: '02',
    title: 'Branded Residences Package',
    meta: 'Fixed scope',
    body: 'The complete legal layer of a branded-residence project, delivered as one fixed-scope package. It gives developers cost certainty on the legal architecture from the outset of the scheme.',
    points: ['Full project legal layer', 'One package, one scope', 'Cost certainty for developers'],
  },
  {
    index: '03',
    title: 'Fractional / Flexible GC Retainer',
    meta: 'The structural anchor',
    body: 'Ongoing, senior access for mid-size hotel investment platforms, family offices and developers — the judgment of an in-house head of legal, without the fixed cost of one. The relationship most clients settle into.',
    points: ['Ongoing senior access', 'Platforms, family offices, developers', 'Scales with the pipeline'],
  },
];

export interface Insight {
  category: string;
  title: string;
  standfirst: string;
  read: string;
  img?: string;
  href: string;
}

export const insights: Insight[] = [
  {
    category: 'Hotel Management Agreements',
    title: 'Termination for cause: what owners actually hold',
    standfirst:
      'Most HMAs concede the right to terminate for operator default. Few owners ever exercise it. The gap between the clause and the leverage is where the negotiation really happens.',
    read: '7 min',
    img: u('1551882547-ff40c63fe5fa', 1400),
    href: '/insights/hma-termination-rights',
  },
  {
    category: 'Branded Residences',
    title: 'The operator–residential interface',
    standfirst:
      'Where the hotel ends and the residences begin is a legal seam, not a wall. Getting the shared services, branding and rental programme to align is the difference between a premium and a dispute.',
    read: '6 min',
    href: '/insights/operator-residential-interface',
  },
  {
    category: 'Hospitality M&A',
    title: 'Structuring the deal around the agreements',
    standfirst:
      'When an asset’s value lives in its management agreement, the diligence and the structure have to start there — not with the balance sheet.',
    read: '8 min',
    href: '/insights/structuring-hospitality-ma',
  },
  {
    category: 'F&B Integration',
    title: 'Reading a celebrity-chef licence',
    standfirst:
      'Name, control and exit. The three terms that decide whether a signature restaurant is an asset or a liability the day the chef walks.',
    read: '5 min',
    href: '/insights/celebrity-chef-licence-terms',
  },
  {
    category: 'Gulf Markets',
    title: 'A legal checklist for Gulf developers',
    standfirst:
      'Branded hospitality in the Gulf moves fast. The agreements that survive a cycle are the ones drafted with the regulatory and ownership realities of the region in view from day one.',
    read: '9 min',
    href: '/insights/gulf-developer-checklist',
  },
  {
    category: 'Practice',
    title: 'The case for the senior negotiator',
    standfirst:
      'Leverage models put junior lawyers on repeat negotiations. The counterparty does not. A short argument for matching experience with experience.',
    read: '4 min',
    href: '/insights/the-senior-negotiator',
  },
];

export interface Matter {
  label: string;
  description: string;
}

export const matters: Matter[] = [
  {
    label: 'European resort operator',
    description:
      'Lead negotiator for a leading European resort operator on a portfolio of management agreements with an upper-upscale international brand, securing owner protections on performance and termination.',
  },
  {
    label: 'Gulf-based developer',
    description:
      'Structured the legal layer of a branded-residence development for a Gulf-based developer — brand licence, rental programme and purchaser documentation — on a fixed-scope basis.',
  },
  {
    label: 'Hospitality investment platform',
    description:
      'Acted as fractional general counsel to a mid-size hotel investment platform across acquisitions, operator negotiations and ongoing asset-level matters.',
  },
  {
    label: 'Signature dining integration',
    description:
      'Advised on the F&B layer of a flagship hospitality project, including a celebrity-chef licence and the operator agreements embedding signature dining into the asset.',
  },
];
