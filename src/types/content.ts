import type { ReactNode } from "react";

export type HeroAction = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export type PlatformNode = {
  title: string;
  label: string;
  description: string;
};

export type WorkLane = {
  title: string;
  description: string;
  detail: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  status: string;
  imageDir: string;
  coverImage?: string;
  href?: string;
  repoHref?: string;
};

export type ProfilePhoto = {
  src?: string;
  alt: string;
  fallbackLabel: string;
  note: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  domain: string;
  summary: string;
};

export type CompanyContext = {
  slug: string;
  company: string;
  latestRole: string;
  period: string;
  domain: string;
  summary: string;
  imageDir: string;
  coverImage?: string;
  href?: string;
};

export type ProfileMode = {
  id: string;
  label: string;
  shortLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  facts: string[];
  highlights: string[];
  cta: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type LandingDefinition = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: "draft" | "published";
  domain: string;
  category: string;
  tags: string[];
  accent: string;
  render: () => ReactNode;
};
