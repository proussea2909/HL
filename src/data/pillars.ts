export interface Pillar {
  num: string;
  tag: string;
  slug: string;
  title: string;
  /** One-line summary used on the home grid. */
  summary: string;
  /** Longer editorial body used on the Practice page. */
  body: string[];
  /** Capability chips. */
  chips: string[];
  image: string;
  imageAlt: string;
}

export const pillars: Pillar[] = [
  {
    num: '01',
    tag: 'Core',
    slug: 'hotel-management-agreements',
    title: 'Hotel Management Agreements',
    summary:
      'Negotiating and structuring HMAs with the major international operators — where repeated, brand-specific experience converts directly into better terms.',
    body: [
      'The Hotel Management Agreement is the document the rest of the project turns on, and the one where the gap in experience between owner and operator is widest. The operator negotiates these every week. The owner, often, is negotiating their first.',
      'I have sat on the operator side of that table and the owner side of it, across Radisson, Accor, Marriott, Four Seasons and equivalent luxury and upper-upscale brands. That repetition is the asset. It is the difference between accepting a standard form and knowing precisely which clauses move, how far, and what they are worth in exchange.',
      'The work covers the full agreement: term and renewal, performance tests and termination rights, the operator’s budget and spending authority, key-money and incentive structures, area of protection, brand standards, and the owner’s controls and information rights. The aim is a cleaner path to signing and fewer surprises once the doors open.',
    ],
    chips: [
      'Term & Renewal',
      'Performance Tests',
      'Termination Rights',
      'Key Money',
      'Budget & Spend Authority',
      'Area of Protection',
      'Brand Standards',
      'Owner Controls',
    ],
    // TODO: swap for a licensed image. Dark, high-contrast hotel exterior / architecture.
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'A restrained modern hotel facade at dusk, seen from the street.',
  },
  {
    num: '02',
    tag: 'Core · Growing',
    slug: 'branded-residences',
    title: 'Branded Residences',
    summary:
      'The full legal architecture of a branded-residence project, offered as a defined, fixed-scope package that gives developers cost certainty on the legal layer.',
    body: [
      'A branded residence is two businesses sharing one address: a hospitality brand and a residential development, bound together by a licence and an operating relationship that has to survive long after the units are sold.',
      'I structure that architecture end to end — the brand licence, the interface between the hotel operator and the residential scheme, the rental programme and its disclosure obligations, and the ownership and governance structures that hold it together. The questions that matter are rarely about the building. They are about what the brand controls, what the owners are promised, and who carries the risk when those two things meet.',
      'For developers, this is offered as a defined, fixed-scope package: the complete legal layer of the project for a known scope and a known fee. It exists to take the legal layer off the critical path and give the development cost certainty from the outset. Indicative fees provided on enquiry.',
    ],
    chips: [
      'Brand Licensing',
      'Operator–Residential Interface',
      'Rental Programmes',
      'Disclosure',
      'Structuring & Governance',
      'Owner Obligations',
    ],
    // TODO: swap for a licensed image. Minimalist luxury residential interior.
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'A minimalist residential interior with clean lines and soft daylight.',
  },
  {
    num: '03',
    tag: 'Scope Extension',
    slug: 'hospitality-m-and-a',
    title: 'Hospitality M&A',
    summary:
      'Acquisitions, disposals and corporate transactions involving hotels, operators and hospitality real estate — structured by the person who understands the underlying agreements.',
    body: [
      'This is not general corporate M&A that happens to involve a hotel. It is the deliberate extension of the specialism: the same person who understands the management agreement and the operational contracts structures the transaction around them.',
      'That distinction shows up in diligence and in price. The value of a hospitality asset lives in its agreements — the HMA, the franchise terms, the ground lease, the F&B arrangements. Reading them correctly, and pricing what they actually permit and prohibit, is the difference between a clean deal and an expensive one.',
      'The work spans acquisitions and disposals of single assets and portfolios, operator-level and platform transactions, and the corporate structuring around them. It is led, throughout, by the senior person — not handed down a chain.',
    ],
    chips: [
      'Acquisitions & Disposals',
      'Portfolio Transactions',
      'Operator-Level Deals',
      'Legal & Commercial Diligence',
      'Deal Structuring',
      'SPA Negotiation',
    ],
    // TODO: swap for a licensed image. Abstract architectural detail / structure.
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'A high-contrast architectural detail of a building facade.',
  },
  {
    num: '04',
    tag: 'Emerging',
    slug: 'f-and-b-integration',
    title: 'F&B Integration',
    summary:
      'The food-and-beverage layer of hospitality and residential projects — celebrity-chef licensing, operator agreements and the F&B components embedded in developments.',
    body: [
      'Food and beverage is no longer an amenity bolted onto a hotel; it is part of how the asset is positioned and valued. A signature restaurant or a chef’s name can define a property — and carries its own contractual weight.',
      'This is not a standalone restaurant practice. It is an integrated capability within the hospitality real-estate positioning: the F&B layer of the same projects I structure elsewhere. The work covers celebrity-chef and brand licences, hotel F&B operator agreements, and the F&B components embedded inside larger developments and branded-residence schemes.',
      'Handled well, the F&B arrangements sit consistently inside the wider deal — the licence, the operating terms and the brand standards aligned with the management agreement above them, rather than negotiated in isolation and reconciled later.',
    ],
    chips: [
      'Celebrity-Chef Licensing',
      'F&B Operator Agreements',
      'Brand & Concept Licences',
      'Embedded F&B Components',
      'Fit-Out & Handover',
    ],
    // TODO: swap for a licensed image. Moody, refined restaurant / bar interior.
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'A refined, low-lit restaurant interior with considered detailing.',
  },
];
