export const SITE_NAME = "Memphis Cleaning & Maintenance";
export const WORDMARK = "MEMPHIS.";
export const SITE_URL = "https://www.memphiscleaning.co.uk";

export const CONTACT = {
  email: "contact@memphispropertyservices.co.uk",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact Us" },
  { href: "#career", label: "Careers" },
  { href: "#sustainability", label: "Sustainability" },
];

export const HERO_HEADLINE = [
  { before: "", highlight: "Cleaning", after: "." },
  { before: "", highlight: "Maintenance", after: "." },
  { before: "Handled ", highlight: "properly", after: "." },
];

export const HERO_SUBHEAD_LINE1 =
  "A clean and maintained property is a prosperous property";
export const HERO_SUBHEAD_LINE2 =
  "delivered by a trusted, reliable team trained to protect the value of every site we look after";

export const CALL_OUT = {
  label: "24 Hour Call Out",
  phone: "00000000",
};

export const TAGLINE_LINES = ["We clean it.", "We watch it.", "We report it."];

export const ABOUT_PARAGRAPHS = [
  "Memphis Property Services was founded on a simple principle: a well-maintained property is a safe property.",
  "Operating nationwide across the UK, we provide flexible cleaning and maintenance for residential blocks, student accommodation, and offices — built around each property's actual needs, not a fixed package. Every site is risk assessed before we begin work.",
  "Having worked directly in property management, we know the pressures our clients face and the small issues that get missed between inspections. That's why every visit includes a trained eye for health and safety hazards, flagged and reported straight to the property manager before they escalate.",
  "We work sustainably, operate fully insured and COSHH-compliant, and keep our practices transparent — so clients always know who's on-site and what standard we hold ourselves to.",
  "We don't just clean properties. We look after them.",
];

export const CAREER_TEXT =
  "Want to work with us? For career opportunities, please get in touch at";

export const SUSTAINABILITY_VISION =
  "Sustainability sits at the heart of how Memphis Property Services operates. We aim to recycle all cardboard, plastic, and metal across every job, reuse packaging wherever possible, and run paperless invoicing as standard — while working to reduce our carbon footprint through smarter routing, greener product choices, and cleaner on-site practice. We're pushing towards a zero-to-landfill operation, and working closely with clients, contractors, and supply partners to hold the same standard across every property we touch. Sustainable practice isn't a bolt-on — it's built into how we look after the properties, people, and places we work with.";

export const MOTTO_TEXT = "Cleaned. Maintained. Sustained.";

export type ServiceItem = {
  icon: string;
  name: string;
  description: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  items: ServiceItem[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "cleaning",
    title: "Cleaning",
    items: [
      {
        icon: "Building2",
        name: "Residential Blocks",
        description:
          "Communal areas, stairwells, entryways, and shared spaces kept spotless for residents and visitors.",
      },
      {
        icon: "Briefcase",
        name: "Offices",
        description:
          "Daily and periodic cleaning fitted around your business hours to keep workspaces hygienic and presentable.",
      },
      {
        icon: "GraduationCap",
        name: "Student Accommodation",
        description:
          "Turnaround cleans, communal areas, and rolling maintenance for private halls and PBSAs.",
      },
      {
        icon: "ClipboardList",
        name: "Block Management",
        description:
          "Reliable, scheduled cleaning across managed portfolios with consistent standards site to site.",
      },
      {
        icon: "HeartHandshake",
        name: "Hostels, Homeless Shelters & Temporary Accommodation",
        description:
          "Sensitive, high-frequency cleaning built for high-footfall, high-turnover environments.",
      },
      {
        icon: "KeyRound",
        name: "Short Lets & Airbnbs",
        description:
          "Rapid turnaround cleans between guests, linen changes, and presentation-ready finishes.",
      },
      {
        icon: "HardHat",
        name: "Construction Sites",
        description:
          "Post-build and ongoing site cleans, including sparkle cleans handed over ready for occupation.",
      },
    ],
  },
  {
    id: "specialist-cleaning",
    title: "Specialist Cleaning",
    items: [
      {
        icon: "Sparkles",
        name: "Deep Cleaning",
        description:
          "Intensive sanitisation of neglected or high-use areas beyond regular maintenance cleaning.",
      },
      {
        icon: "Layers",
        name: "Carpet Cleaning",
        description:
          "Hot water extraction, stain treatment, and deodorising for carpets and soft flooring.",
      },
      {
        icon: "SprayCan",
        name: "Graffiti Removal",
        description:
          "Chemical and pressure-based removal from exterior surfaces without damaging the substrate.",
      },
      {
        icon: "ShieldAlert",
        name: "Mould Removal",
        description:
          "Safe treatment and remediation of mould in bathrooms, communal areas, and problem walls.",
      },
      {
        icon: "Droplets",
        name: "Jet Wash",
        description:
          "External hard surface cleaning for pathways, forecourts, patios, and facades.",
      },
      {
        icon: "Trash2",
        name: "Bin Store Deep Clean",
        description:
          "Full sanitisation and deodorising of communal waste stores, tackling odour and pest risk.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    items: [
      {
        icon: "Wrench",
        name: "General Handyman",
        description:
          "Small repairs, fixings, and general upkeep to catch issues before they escalate.",
      },
      {
        icon: "Flower2",
        name: "Gardening",
        description:
          "Regular garden care, hedging, weeding, and seasonal upkeep for communal outdoor spaces.",
      },
      {
        icon: "Trees",
        name: "Grounds Maintenance",
        description:
          "Ongoing maintenance of larger external areas including car parks, paths, and green spaces.",
      },
      {
        icon: "PaintRoller",
        name: "Painting & Decorating",
        description:
          "Interior and exterior painting for communal areas, void properties, and refurb projects.",
      },
      {
        icon: "Zap",
        name: "Gas & Electric",
        description:
          "Certified engineers for servicing, safety checks, repairs, and installations.",
      },
      {
        icon: "LayoutGrid",
        name: "Flooring",
        description:
          "Supply and installation of vinyl, laminate, carpet, and safety flooring for communal and private areas.",
      },
    ],
  },
];

export const PROPERTY_TYPES = [
  "Residential Block",
  "Office",
  "Student Accommodation",
  "HMO",
  "Short Let",
  "Construction Site",
  "Other",
] as const;

export const FORM_SERVICE_OPTIONS = [
  "Cleaning",
  "Specialist Cleaning",
  "Maintenance",
] as const;
