# Dependencies: brenosm-platform

## Declared and Resolved Versions
`package.json` declares `latest` for most packages, but the lockfile resolves a current Next.js/React/Framer Motion toolchain at build time. The exact versions will drift if the lockfile is not respected.

## Internal Dependency Graph
- `app/layout.tsx` -> `src/config/site.ts`
- `app/page.tsx` -> `src/features/home/home-page.tsx`
- `app/loading.tsx` -> `app/route-surface.module.css`
- `app/not-found.tsx` -> `app/route-surface.module.css`
- `app/landings/page.tsx` -> `src/features/landings/landing-directory-page.tsx`
- `app/landings/[slug]/page.tsx` -> `src/content/landings/registry.ts` and `src/features/landings/landing-showcase-page.tsx`
- `src/content/portfolio/index.ts` -> `src/content/portfolio/*.json` and `src/types/portfolio.ts`
- `src/content/landings/registry.ts` -> `src/types/content.ts`
- `src/content/landings/landing-50/index.tsx` -> `src/types/content.ts` and its showcase component
- `src/features/home/home-page.tsx` -> `src/content/portfolio/index.ts`, `src/features/home/components/*`, and `src/features/home/portfolio-page.module.css`
- `src/features/home/components/*` -> `src/features/home/portfolio-page.module.css` and `framer-motion`
- `src/features/landings/*` -> `src/components/motion/*` and their own CSS modules
- `src/components/motion/*` -> `src/lib/motion.ts` or direct Framer Motion primitives

## High-Value Dependencies
- `next` provides the App Router, static generation, metadata hooks, and image support.
- `framer-motion` provides the reveal and hover effects that define the visual identity.
- `react` and `react-dom` are the runtime foundation for every component.
- `typescript` provides the content contract that keeps the code-as-content pattern safe.

## Dependency Risks
- Using `latest` in `package.json` means a fresh install can drift unless the lockfile is respected.
- Every added dependency should be justified against bundle size and maintenance cost.
- The current implementation intentionally avoids the larger visual-stack dependencies requested in the design brief because they are not installed and not required for the shipped experience.

## Dependency Observations
- The reusable motion primitives are intentionally lightweight.
- `HomePage` uses a mix of shared motion helpers and local motion logic, so animation changes can affect multiple sections.
- Shared stylesheet imports across `features/home` and `features/landings` create a coupling hotspot, which is why the active route tree now has dedicated style modules.
- The old `src/content/site/home-content.ts` source file was removed during the portfolio rewrite and no longer participates in the graph.
