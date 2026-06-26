import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#02040a",
    theme_color: "#02040a",
    lang: "pt-BR",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icons/bsm-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/bsm-maskable.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
