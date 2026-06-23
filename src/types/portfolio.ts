export type PortfolioHero = {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: string[];
};

export type PortfolioStat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  highlights: string[];
  accent: string;
};

export type ProjectCard = {
  slug: string;
  name: string;
  url?: string;
  image?: string;
  description: string;
  technologies: string[];
  featured: boolean;
  heroPriority: number;
  problem?: string;
  solution?: string;
  result?: string;
  accent: string;
  category?: string;
  ctaLabel?: string;
};

export type PlaygroundCard = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  accent: string;
};

export type TechCategory = {
  category: string;
  technologies: string[];
  accent: string;
};

export type CareerEntry = {
  company: string;
  location: string;
  role: string;
  period: string;
  technologies: string[];
  deliveries: string[];
  summary: string;
  accent: string;
};

export type ResumeEducation = {
  institution: string;
  course: string;
  period: string;
  note: string;
};

export type ResumeData = {
  summary: string;
  pdf: string;
  education: ResumeEducation[];
  languages: string[];
  skills: string[];
  awards: string[];
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
};

export type AchievementEntry = {
  rank: string;
  event: string;
  context: string;
  accent: string;
};
