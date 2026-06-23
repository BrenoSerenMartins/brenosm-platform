# Frontend: brenosm-platform

## Stack
- Next.js App Router
- React 19
- Framer Motion
- CSS Modules
- Global CSS variables in `app/globals.css`
- Next Image for local and configured remote assets

## Active UI Surfaces
- `HomePage` is the active root experience and is a client component.
- `LandingDirectoryPage` is the registry-driven landing list.
- `LandingShowcasePage` is the generic shell for individual landings.
- `Loading` is the route-level premium loading shell.
- `NotFound` is the branded fallback shell.

## Client and Server Boundary
- `HomePage` uses local motion values, pointer tracking, and form state, so it must stay client-side.
- `PremiumCursor`, `HeroScene`, `TiltCard`, `StatCounter`, `AchievementMarquee`, and `ContactForm` are client helpers that live inside the root page.
- `LandingDirectoryPage` and `LandingShowcasePage` can stay server components because they only compose client wrappers and static content.
- The route shell files are server components because they are static and do not need browser state.

## Visual System
- `app/globals.css` defines the palette, fluid spacing and text tokens, body background, and font fallbacks.
- `portfolio-page.module.css` carries the active premium homepage shell styles.
- `route-surface.module.css` carries the loading and 404 route-shell styles.
- `landing-directory.module.css` and `landing-showcase.module.css` own the landing routes.
- The design language is dark, high-contrast, glassy, glow-based, and fluid rather than utility-class driven.

## State Management
- `HomePage` itself is mostly data mapping.
- `StatCounter` animates numeric counts when it enters view.
- `PremiumCursor` and `HeroScene` use motion values instead of React state for pointer-driven effects.
- `ContactForm` manages local validation, success state, and `mailto:` generation.

## Important Frontend Facts
- The homepage aligns with `src/features/home/portfolio-page.module.css`; the old section-based home archive was removed from the source tree.
- The landing directory and showcase now use their own CSS modules instead of borrowing home styles.
- `app/layout.tsx` no longer imports Google fonts, so builds are not tied to external font availability.
- The current installed dependency graph does not include `tailwindcss`, `three`, `@react-three/fiber`, `gsap`, `lenis`, or `lucide-react`.

## Interaction Design
- The home page uses a cinematic hero, animated stats, service cards, a masonry project grid, a playground grid, a floating tech stack, an experience timeline, a PDF resume viewer, awards/social proof, and a contact CTA.
- The landing showcase uses a stable shell plus landing-specific content injected by code.
- Motion timing is intentionally slow and eased to feel deliberate rather than app-like.

## Accessibility Notes
- Internal navigation is semantic and uses `Link` where appropriate.
- External links open with `rel="noreferrer"` when they use `target="_blank"`.
- The current CV-only data set does not provide project URLs, so the project cards usually render as fallback content rather than remote previews.
- The global cursor effect is suppressed for reduced-motion users.
