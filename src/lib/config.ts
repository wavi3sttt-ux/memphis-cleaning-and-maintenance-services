export const SITE_NAME = "Memphis Cleaning Company";
export const WORDMARK = "MEMPHIS.";
export const TAGLINE_LINES = ["We clean it.", "We watch it.", "We report it."];

export const HERO_TAGLINE = [
  { before: "We ", highlight: "clean", after: " it." },
  { before: "We ", highlight: "watch", after: " it." },
  { before: "We ", highlight: "report", after: " it." },
];
export const POSITIONING =
  "Commercial cleaning for Birmingham — with photographic proof after every visit.";
export const SITE_URL = "https://www.memphiscleaning.co.uk";

export const CONTACT = {
  email: "hello@memphiscleaning.co.uk",
  phone: "0121 000 0000",
  addressLine1: "Unit 4, Aston Cross Business Village",
  addressLine2: "Birmingham, B6 5RQ",
  companyRegPlaceholder: "Company No. 00000000",
};

export const TRUST_SIGNALS = [
  "COSHH COMPLIANT",
  "FULLY INSURED",
  "UNIFORMED STAFF",
  "DIGITAL REPORTS",
];

export type Service = {
  slug: string;
  index: string;
  name: string;
  description: string;
  longDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "communal-area-cleaning",
    index: "01",
    name: "Communal Area Cleaning",
    description:
      "Stairwells, lobbies, corridors kept spotless week in, week out.",
    longDescription:
      "Scheduled communal cleaning for blocks of flats and managed developments — stairwells, lobbies, corridors, lifts, and communal windows kept to a consistent standard, with every visit backed by a photo report for your managing agent or RMC.",
  },
  {
    slug: "end-of-tenancy-cleans",
    index: "02",
    name: "End-of-Tenancy Cleans",
    description: "Turnover-ready flats for landlords and letting agents.",
    longDescription:
      "Fast, thorough turnaround cleans between tenancies — kitchens, bathrooms, carpets, and fixtures brought back to a lettable standard, with photo evidence to support deposit returns and move-in checks.",
  },
  {
    slug: "student-accommodation",
    index: "03",
    name: "Student Accommodation",
    description: "Bulk turnovers between academic terms, on schedule.",
    longDescription:
      "High-volume turnaround cleaning across entire blocks between semesters, timed tightly around academic calendars, with unit-by-unit digital reporting so accommodation providers can sign off move-in ready rooms fast.",
  },
  {
    slug: "office-cleaning",
    index: "04",
    name: "Office Cleaning",
    description: "Daily or contract cleaning for Birmingham workplaces.",
    longDescription:
      "Daily, weekly, or bespoke contract cleaning for offices and workplaces — desks, kitchens, washrooms, and communal areas maintained by uniformed teams, with reporting that flags consumables and maintenance issues as they arise.",
  },
  {
    slug: "deep-cleans-sanitisation",
    index: "05",
    name: "Deep Cleans & Sanitisation",
    description: "COSHH-compliant deep cleans on demand.",
    longDescription:
      "One-off and periodic deep cleans using COSHH-compliant products and processes — ideal for post-construction handovers, incident response, or periodic resets between contract cleans.",
  },
  {
    slug: "grounds-bin-store-cleaning",
    index: "06",
    name: "Grounds & Bin Store Cleaning",
    description: "Exterior areas maintained to the same standard.",
    longDescription:
      "Bin store jet-washing, external walkways, car parks, and grounds maintenance kept to the same photo-reported standard as the inside of the building — no blind spots in your contract.",
  },
];

export const SECTORS = [
  "Block Management",
  "Student Accommodation",
  "Letting Agents",
  "Offices",
  "Short-Lets",
] as const;
