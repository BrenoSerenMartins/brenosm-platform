import type { LandingDefinition } from "@/src/types/content";
import { Landing50Showcase } from "@/src/content/landings/landing-50/showcase";

export const landing50Definition: LandingDefinition = {
  slug: "landing-50",
  title: "Landing 50",
  summary: "A modular showcase entry used as the default example for future landing spaces.",
  description:
    "Standalone landing workspace prepared to evolve into a full narrative page with dedicated sections and branding.",
  status: "draft",
  domain: "landing-50.brenosm.cloud",
  category: "Landing concept",
  tags: ["modular architecture", "landing page", "subdomain-ready"],
  accent: "#c45b31",
  render: () => <Landing50Showcase />,
};
