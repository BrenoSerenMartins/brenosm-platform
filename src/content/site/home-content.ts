import { siteConfig } from "@/src/config/site";
import type {
  CompanyContext,
  ExperienceEntry,
  HeroAction,
  LinkItem,
  PortfolioItem,
  PlatformNode,
  ProfilePhoto,
  ProfileMode,
  WorkLane,
} from "@/src/types/content";

export const heroContent = {
  eyebrow: "Products, sites, systems, and integrations built to survive real use",
  titleLines: [
    "Building robust",
    "products and systems",
    "for operations,",
    "commerce, and growth.",
  ],
  description:
    "I work across backend, frontend, integrations, and product delivery. This hub is meant to show what I can build for teams, companies, and freelance clients without feeling like a plain resume.",
} as const;

export const heroActions: ReadonlyArray<HeroAction> = [
  { href: "#work", label: "View work", variant: "primary" },
  { href: "#contact", label: "What I deliver", variant: "secondary" },
];

export const profilePhoto: ProfilePhoto = {
  src: "/profile/placeholder-profile.svg",
  alt: "Portrait of Breno Seren Martins",
  fallbackLabel: "Your photo",
  note: "Replace with public/profile/breno-main.jpg when ready",
};

export const platformNodes: ReadonlyArray<PlatformNode> = [
  {
    title: "Products and internal systems",
    label: "What I build",
    description:
      "Operational tools, business flows, dashboards, portals, and product surfaces that support real teams and customers.",
  },
  {
    title: "Landing pages and sites",
    label: "Commercial layer",
    description:
      "High-signal pages, conversion-focused websites, and polished interfaces with clearer messaging and stronger visual presentation.",
  },
  {
    title: "Integrations and backend flows",
    label: "Technical depth",
    description:
      "APIs, ERP communication, payments, queues, business rules, and backend structures that need reliability and maintainability.",
  },
];

export const selectedWork: ReadonlyArray<WorkLane> = [
  {
    title: "Robust systems for business operations",
    description:
      "I build internal systems, backend services, APIs, and workflows where stability, maintainability, and business rules matter.",
    detail: "Good for companies that need more than just a pretty interface.",
  },
  {
    title: "Commercial websites and product pages",
    description:
      "I also build landing pages, websites, and front-end experiences that present products better and convert more clearly.",
    detail: "Good for companies that need stronger presentation and cleaner execution.",
  },
  {
    title: "Integrations that keep platforms connected",
    description:
      "ERP, payments, REST/SOAP, custom platform behavior, and backend logic tied to real-world operations.",
    detail: "Good for teams that need systems talking to each other without chaos.",
  },
];

export const capabilities: ReadonlyArray<string> = [
  "Web products and internal systems",
  "Landing pages, websites, and product interfaces",
  "APIs, integrations, and backend workflows",
  "Performance, maintenance, and production reliability",
];

export const hiringSignals: ReadonlyArray<string> = [
  "5+ years of full-stack experience with stronger depth on backend and commerce platforms.",
  "Current role in fintech after years of Magento and custom commerce delivery.",
  "Bachelor in Computer Science and technical training in Internet Computing.",
  "Comfortable moving from infra and integrations into UI and product-facing execution.",
];

export const experienceEntries: ReadonlyArray<ExperienceEntry> = [
  {
    company: "Moving Pay",
    role: "Programador Junior II",
    period: "Mar 2026 - present",
    domain: "Fintech",
    summary:
      "Current work in a fintech environment, adding payment-domain context on top of previous commerce and integration experience.",
  },
  {
    company: "Bizcommerce",
    role: "Programador Pleno",
    period: "Oct 2022 - Nov 2025",
    domain: "Magento / E-commerce",
    summary:
      "Worked on bug fixing, new modules, module customization, and API creation inside Magento-based commerce systems.",
  },
  {
    company: "Bizcommerce",
    role: "Programador Junior",
    period: "Nov 2020 - Oct 2022",
    domain: "Magento / E-commerce",
    summary:
      "Built the base in Magento maintenance, custom behavior, and production support for real client operations.",
  },
];

export const companyContexts: ReadonlyArray<CompanyContext> = [
  {
    slug: "moving-pay",
    company: "Moving Pay",
    latestRole: "Programador Junior II",
    period: "Mar 2026 - present",
    domain: "Fintech",
    summary:
      "Fintech environment with product behavior, payment-domain context, operational flows, and backend logic tied to real business rules.",
    imageDir: "/companies/moving-pay",
    coverImage: "/projects/fintech-operations/cover.svg",
  },
  {
    slug: "bizcommerce",
    company: "Bizcommerce",
    latestRole: "Programador Pleno",
    period: "Nov 2020 - Nov 2025",
    domain: "Magento / E-commerce",
    summary:
      "Commerce-heavy delivery across Magento maintenance, custom modules, APIs, ERP integrations, and long-term production support.",
    imageDir: "/companies/bizcommerce",
    coverImage: "/projects/magento-commerce/cover.svg",
  },
];

export const deliveryBadges: ReadonlyArray<string> = [
  "Robust architecture",
  "Secure-by-default mindset",
  "API and ERP integrations",
  "Production maintenance",
  "Product UI delivery",
  "Modular systems",
];

export const portfolioItems: ReadonlyArray<PortfolioItem> = [
  {
    slug: "howmuchlove",
    title: "howmuchlove.com.br",
    category: "Brand website",
    summary:
      "A real project space for a brand-facing website, used here as a seeded showcase entry for the landing and portfolio carousel.",
    outcomes: ["Brand presence", "Website delivery", "Public-facing interface"],
    stack: ["Next.js", "TypeScript", "UI"],
    status: "Real project",
    imageDir: "/projects/howmuchlove",
    coverImage: "/projects/howmuchlove/cover.svg",
    href: "https://howmuchlove.com.br",
  },
  {
    slug: "fintech-operations",
    title: "Fintech operations and conciliation flows",
    category: "Product system",
    summary:
      "Work focused on financial rules, CNAB processing, rates, anticipation, bug fixing, and product evolution in a fintech context.",
    outcomes: ["Business-critical backend behavior", "APIs and product maintenance", "Operational reliability"],
    stack: ["Node.js", "React", "REST APIs", "CNAB"],
    status: "Current work",
    imageDir: "/projects/fintech-operations",
    coverImage: "/projects/fintech-operations/cover.svg",
  },
  {
    slug: "magento-commerce",
    title: "Magento stores and custom commerce modules",
    category: "Commerce platform",
    summary:
      "Advanced module customization, API creation, ERP integration, performance improvements, and long-term maintenance for Magento systems.",
    outcomes: ["Custom business flows", "ERP communication", "Platform stability"],
    stack: ["Magento", "PHP", "MySQL", "Redis", "Docker"],
    status: "Client delivery",
    imageDir: "/projects/magento-commerce",
    coverImage: "/projects/magento-commerce/cover.svg",
  },
  {
    slug: "platform-portfolio",
    title: "Public-facing portfolio and landing ecosystem",
    category: "Presentation layer",
    summary:
      "A modular Next.js platform created to present work, landings, product spaces, and future project-specific subdomains with more personality.",
    outcomes: ["Stronger brand surface", "Reusable structure", "Growth-ready portfolio hub"],
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    status: "In progress",
    imageDir: "/projects/platform-portfolio",
    coverImage: "/projects/platform-portfolio/cover.svg",
  },
];

export const profileModes: ReadonlyArray<ProfileMode> = [
  {
    id: "recruiter",
    label: "Recruiter view",
    shortLabel: "01",
    eyebrow: "Read me fast",
    title: "A backend-heavy full-stack engineer with real production mileage.",
    summary:
      "If someone has less than a minute, this is the version they should see: 5+ years, commerce and fintech context, integrations, and stronger front-end presentation layered on top.",
    facts: ["5+ years in web systems", "Current fintech role", "Magento, PHP, Node, React"],
    highlights: [
      "Worked in e-commerce and financial systems where mistakes have business cost.",
      "Can discuss architecture, delivery, maintenance, APIs, and product-facing implementation.",
      "This site is meant to turn technical depth into a clearer hiring signal.",
    ],
    cta: "Best if you want the high-level picture.",
  },
  {
    id: "technical",
    label: "Technical view",
    shortLabel: "02",
    eyebrow: "Go deeper",
    title: "Magento, APIs, ERP flows, queues, infra, and code that has to survive production.",
    summary:
      "This is the strongest technical layer: PHP, Magento 1/2, MySQL, Redis, RabbitMQ, Docker, Nginx, Linux, REST, SOAP, and backend behavior tied to business rules.",
    facts: ["ERP and gateway integrations", "Redis, Docker, Nginx, Linux", "SOLID, MVC, service layers"],
    highlights: [
      "Experience with custom modules, platform maintenance, performance work, and real integration constraints.",
      "Comfortable with backend structures where readability and operational reliability matter more than demo polish.",
      "The portfolio should expose this depth instead of hiding it behind generic UI.",
    ],
    cta: "Best if you care about engineering substance.",
  },
  {
    id: "product",
    label: "Product view",
    shortLabel: "03",
    eyebrow: "See the direction",
    title: "A technical foundation now being shaped into stronger product presentation and modern UI.",
    summary:
      "The front-end layer is not cosmetic here. It is the next step in presenting strong engineering work with better narrative, better interaction, and cleaner modular project spaces.",
    facts: ["React and Next.js growth", "Motion and presentation systems", "Subdomain-ready portfolio architecture"],
    highlights: [
      "The goal is not just to look modern, but to make the work easier to understand and trust.",
      "Interactive pieces should reveal personality, technical confidence, and product awareness at the same time.",
      "This platform is where engineering history and design ambition start to meet.",
    ],
    cta: "Best if you want to understand where this platform is going.",
  },
];

export const footerLinks: ReadonlyArray<LinkItem> = [
  { label: "GitHub", href: siteConfig.socialLinks.github },
  { label: "LinkedIn", href: siteConfig.socialLinks.linkedin },
  { label: "Contact", href: `mailto:${siteConfig.contactEmail}` },
  { label: "Landings", href: "/landings" },
];
