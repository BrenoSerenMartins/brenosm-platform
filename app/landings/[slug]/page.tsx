import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingRegistry, getLandingBySlug } from "@/src/content/landings/registry";
import { LandingShowcasePage } from "@/src/features/landings/landing-showcase-page";

type LandingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return landingRegistry.map((landing) => ({ slug: landing.slug }));
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLandingBySlug(slug);

  if (!landing) {
    return {
      title: "Landing not found",
    };
  }

  return {
    title: `${landing.title} | Landings`,
    description: landing.description,
  };
}

export default async function Page({ params }: LandingPageProps) {
  const { slug } = await params;
  const landing = getLandingBySlug(slug);

  if (!landing) {
    notFound();
  }

  return <LandingShowcasePage landing={landing} />;
}
