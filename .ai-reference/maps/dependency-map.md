# Dependency Map: brenosm-platform

## Internal Graph
- `app/layout.tsx`
  - depends on `src/config/site.ts`
  - depends on `app/globals.css`
- `app/page.tsx`
  - depends on `src/features/home/home-page.tsx`
- `app/loading.tsx`
  - depends on `app/route-surface.module.css`
- `app/not-found.tsx`
  - depends on `app/route-surface.module.css`
- `app/landings/page.tsx`
  - depends on `src/features/landings/landing-directory-page.tsx`
  - depends on `src/config/site.ts` for metadata
- `app/landings/[slug]/page.tsx`
  - depends on `src/content/landings/registry.ts`
  - depends on `src/features/landings/landing-showcase-page.tsx`
- `src/content/portfolio/index.ts`
  - depends on `src/content/portfolio/*.json`
  - depends on `src/types/portfolio.ts`
- `src/content/landings/registry.ts`
  - depends on `src/types/content.ts`
- `src/content/landings/landing-50/index.tsx`
  - depends on `src/types/content.ts`
  - depends on `src/content/landings/landing-50/showcase.tsx`
- `src/features/home/home-page.tsx`
  - depends on `src/content/portfolio/index.ts`
  - depends on `src/features/home/components/contact-form.tsx`
  - depends on `src/features/home/components/hero-scene.tsx`
  - depends on `src/features/home/components/premium-cursor.tsx`
  - depends on `src/features/home/components/stat-counter.tsx`
  - depends on `src/features/home/components/testimonial-marquee.tsx`
  - depends on `src/features/home/components/tilt-card.tsx`
  - depends on `src/features/home/portfolio-page.module.css`
- `src/features/home/components/*`
  - depends on `src/features/home/portfolio-page.module.css`
  - depends on `framer-motion`
- `src/features/landings/*`
  - depends on `src/components/motion/*`
  - depends on their own CSS modules
- `src/components/motion/*`
  - depends on `src/lib/motion.ts` or direct Framer Motion primitives

## Coupling Hotspots
- `src/features/home/home-page.tsx` depends on the portfolio JSON module and local motion widgets, so changes to content shape or helper props can break multiple sections at once.
- `src/features/home/components/*` all read from the same premium portfolio stylesheet contract.
- `LandingDefinition.render()` makes each registry entry act like a small plugin boundary.
- `src/content/portfolio/index.ts` is the fallback policy boundary for project previews.

## External Dependencies
- Next.js for routing, metadata, static generation, and image support.
- React for the component model.
- Framer Motion for animation.
- `image.thum.io` for dormant fallback project previews when future data provides a real URL.

## Historical References
- The old `src/features/home/sections/*` tree and `src/features/home/home-page.module.css` stylesheet were removed from the source tree during the portfolio rewrite.
- The old `src/content/site/home-content.ts` content model was removed from the source tree during the portfolio rewrite.
