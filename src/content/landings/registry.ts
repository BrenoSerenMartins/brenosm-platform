import { landing50Definition } from "@/src/content/landings/landing-50";
import type { LandingDefinition } from "@/src/types/content";

export const landingRegistry: ReadonlyArray<LandingDefinition> = [landing50Definition];

export function getLandingBySlug(slug: string) {
  return landingRegistry.find((landing) => landing.slug === slug);
}
