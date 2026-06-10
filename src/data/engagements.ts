export interface Engagement {
  num: string;
  title: string;
  kicker: string;
  body: string;
  points: string[];
  anchor?: boolean;
}

export const engagements: Engagement[] = [
  {
    num: '01',
    title: 'Fixed-Fee per Matter',
    kicker: 'The default',
    body:
      'A known scope for a known price. Most matters fall here: the agreement, the negotiation, the deliverable — defined and priced before the work begins, so the cost is never a surprise.',
    points: ['Defined scope', 'Single agreed fee', 'No clock-watching'],
  },
  {
    num: '02',
    title: 'Branded Residences Package',
    kicker: 'Fixed scope',
    body:
      'The complete legal layer of a branded-residence project, delivered as one fixed-scope package. It gives developers cost certainty on the legal architecture from the outset of the scheme.',
    points: ['Full project legal layer', 'One package, one scope', 'Cost certainty for developers'],
  },
  {
    num: '03',
    title: 'Fractional / Flexible GC Retainer',
    kicker: 'The structural anchor',
    body:
      'Ongoing, senior access for mid-size hotel investment platforms, family offices and developers — the judgment of an in-house head of legal, without the fixed cost of one. The relationship most clients settle into.',
    points: ['Ongoing senior access', 'Platforms, family offices, developers', 'Scales with the pipeline'],
    anchor: true,
  },
];

export const pricingNote =
  'Hourly engagement is available, selectively, where a fixed fee does not fit the shape of the work. Indicative fees provided on enquiry.';
