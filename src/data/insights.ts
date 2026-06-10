export interface Article {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  readingTime: string;
  date: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  /** Body paragraphs for the stub article page. */
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'hma-termination-rights',
    category: 'Hotel Management Agreements',
    title: 'Termination Rights in the HMA: What Owners Actually Control',
    standfirst:
      'Performance tests look like protection until you read how they interlock with cure rights and budget approvals. A closer look at where an owner’s exit really lives.',
    readingTime: '7 min',
    date: 'May 2026',
    featured: true,
    // TODO: swap for a licensed image.
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1500&auto=format&fit=crop',
    imageAlt: 'A grand hotel lobby rendered in high contrast.',
    body: [
      'Almost every Hotel Management Agreement contains a performance test, and almost every owner reads it as their way out. Few of them are. The right to terminate for underperformance is usually hedged by a sequence of conditions — a two-part test, a market adjustment, a cure period, and frequently a buy-out option that lets the operator pay to stay — and each of those conditions is negotiable long before it is ever triggered.',
      'The more important point is that termination rights do not sit in isolation. They interlock with the operator’s control over the budget and the capital plan. An operator that controls spending can, in practice, influence the very results the performance test measures. An owner who negotiates the test without negotiating the budget approvals around it has secured a right that is harder to exercise than it appears.',
      'The work, then, is to read the exit and the controls together: the performance threshold, the cure mechanics, the operator’s buy-out economics, and the owner’s influence over the spending that drives the numbers. That is where the protection actually lives.',
    ],
  },
  {
    slug: 'operator-residential-interface',
    category: 'Branded Residences',
    title: 'The Operator–Residential Interface, Where Projects Quietly Fail',
    standfirst:
      'Most branded-residence disputes are not about the brand. They are about the seam between the hotel operation and the residential scheme — and the seam is contractual.',
    readingTime: '6 min',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'A luxury residential lobby with restrained materials.',
    body: [
      'A branded residence asks two organisations with different incentives to share one building for decades. The hotel operator is running a hospitality business; the residential owners are protecting an asset and a lifestyle. The licence binds them, but the friction lives in the interface between them: shared facilities, services, cost allocation, and the standards each side is entitled to expect.',
      'When these projects run into trouble, it is rarely the brand licence itself that has failed. It is the seam — the agreement that was supposed to govern how the operation and the residential scheme actually meet day to day, and which was drafted as an afterthought. Cost-sharing formulas that no one modelled, service standards that were never defined, and consent rights that overlap and contradict.',
      'Structuring the interface deliberately, at the outset, is far cheaper than litigating it later. The questions are concrete: who controls the shared amenities, how are costs allocated and capped, what can the owners require of the operator, and what happens if the brand departs.',
    ],
  },
  {
    slug: 'structuring-hospitality-m-and-a',
    category: 'Hospitality M&A',
    title: 'Structuring the Deal Around the Agreements, Not the Other Way Round',
    standfirst:
      'In a hotel transaction the value sits inside the contracts. Diligence that treats the HMA as a schedule rather than the centre of the deal mis-prices the asset.',
    readingTime: '8 min',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'A modern corporate tower seen from below.',
    body: [
      'When you acquire a hotel, you are not really buying a building. You are buying a bundle of agreements — the management or franchise agreement, the ground lease, the F&B arrangements, the financing — and a building that those agreements happen to govern. The economics of the deal are written into those contracts, not into the valuation model on top of them.',
      'This is why hospitality M&A led by a generalist corporate team so often mis-prices the asset. The HMA gets treated as a diligence schedule rather than the centre of the transaction. Change-of-control consents, transfer restrictions, termination on sale, key-money clawbacks — these are not footnotes. They determine what the buyer can actually do with the asset, and what it is therefore worth.',
      'Structuring the deal around the agreements means reading them first and building the transaction outward from what they permit: pricing the consents, planning the operator engagement, and designing the structure so the value that lives in the contracts survives the change of ownership.',
    ],
  },
  {
    slug: 'celebrity-chef-licence-terms',
    category: 'F&B Integration',
    title: 'Celebrity-Chef Licences: Reading the Terms Beneath the Name',
    standfirst:
      'A chef’s name on the door is a licence with quality controls, exclusivity, and departure rights. The glamour is real; so is the contractual fine print.',
    readingTime: '6 min',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'An elegant restaurant dining room in low light.',
    body: [
      'A signature restaurant can define a property, and a chef’s name carries genuine commercial weight. But behind the name is a licence, and the licence is where the relationship is actually defined: the scope of the rights, the quality and brand-standard controls, exclusivity and radius restrictions, the fee structure, and — most importantly — what happens when the chef wants to leave.',
      'The risk that owners underweight is departure. A concept built around an individual is exposed to that individual’s reputation and continued involvement. The licence has to address the unwinding as carefully as it addresses the launch: name removal, transition, and what the property is left with when the name comes down.',
      'Handled as part of the wider development, the F&B licence sits consistently inside the project — its terms aligned with the brand standards and the management agreement above it, rather than negotiated in a silo and reconciled after the fact.',
    ],
  },
  {
    slug: 'gulf-developer-legal-checklist',
    category: 'Markets',
    title: 'A Legal Checklist for Gulf Hospitality Developers',
    standfirst:
      'Branded hospitality development in the Gulf moves quickly. A short, practical list of the legal questions worth settling before the structure hardens.',
    readingTime: '5 min',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'A contemporary skyline at dusk in a Gulf city.',
    body: [
      'Hospitality development across the Gulf moves at a pace that rewards momentum and punishes legal questions left until later. The structure hardens early, and decisions taken in the first weeks are expensive to revisit once the operator, the financing and the brand are all committed around them.',
      'A short, practical list helps. Settle the ownership and holding structure before the brand is signed. Understand how the chosen jurisdiction treats branded-residence sales and rental programmes. Align the management agreement, the licence and the development agreement so they do not contradict each other. And plan the operator and brand engagement deliberately, rather than reacting to their standard forms.',
      'None of this slows the project down. Settled early, these questions take the legal layer off the critical path — which is the entire point of getting a specialist involved before, rather than after, the structure sets.',
    ],
  },
  {
    slug: 'fractional-gc-hospitality-platforms',
    category: 'Practice',
    title: 'The Case for a Fractional GC on a Hospitality Platform',
    standfirst:
      'Mid-size investment platforms and family offices rarely need a full in-house legal team. They almost always need senior judgment on call. The retainer model, explained.',
    readingTime: '5 min',
    date: 'December 2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'A quiet, well-appointed meeting room.',
    body: [
      'A mid-size hotel investment platform, a family office, a developer with a steady pipeline — none of these typically need a full in-house legal department, and most cannot justify one. What they need is senior judgment available when a decision arises: a counterparty’s draft to read, a structure to pressure-test, a negotiation to lead.',
      'The fractional or flexible General Counsel retainer is built for exactly that. It gives ongoing, senior access to someone who already knows the agreements and the operators — the judgment of a head of legal, without the fixed cost of one — and it scales with the pipeline rather than the headcount.',
      'In practice it becomes the relationship most clients settle into. The fixed-fee matters continue alongside it, but the retainer is the structural anchor: the standing arrangement that means the senior person is already there when the next agreement lands.',
    ],
  },
];

export const featured = articles.find((a) => a.featured)!;
export const standard = articles.filter((a) => !a.featured);
