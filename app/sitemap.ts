import type { MetadataRoute } from "next";
import { landingRegistry } from "@/src/content/landings/registry";
import { siteConfig } from "@/src/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/landings`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...landingRegistry.map((landing) => ({
      url: `${siteConfig.url}/landings/${landing.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
