import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";
import { LandingDirectoryPage } from "@/src/features/landings/landing-directory-page";

export const metadata: Metadata = {
  title: `Landings | ${siteConfig.title}`,
  description: "Directory of modular landing spaces available inside brenosm.cloud.",
};

export default function Page() {
  return <LandingDirectoryPage />;
}
