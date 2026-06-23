# Module: Motion System

## Purpose
The motion system provides the reusable animation grammar for the site: reveal containers, reveal items, card hovers, viewport fades, and the pointer aura.

## Main Files
- `src/lib/motion.ts`
- `src/components/motion/reveal-group.tsx`
- `src/components/motion/reveal-item.tsx`
- `src/components/motion/fade-in-section.tsx`
- `src/components/motion/interactive-card.tsx`
- `src/features/home/components/premium-cursor.tsx`
- `src/features/home/components/hero-scene.tsx`
- `src/features/home/components/tilt-card.tsx`
- `src/features/home/components/stat-counter.tsx`
- `src/components/site/section-heading.tsx`

## Responsibilities
- `staggerContainer` coordinates group timing.
- `revealUpItem` and `revealSoftItem` define shared entry transitions.
- `FadeInSection` handles section entry and re-arming when scrolled away.
- `InteractiveCard` provides a consistent hover lift.
- `SectionHeading` standardizes section headers.
- `PremiumCursor` and `HeroScene` render the ambient pointer-following and pseudo-3D effects for the active home page.

## Current Usage Pattern
- Active home page: uses `FadeInSection`, `RevealGroup`, `RevealItem`, `PremiumCursor`, `HeroScene`, `TiltCard`, and `StatCounter`.
- Active landing pages: `RevealGroup` and `RevealItem` are used around shell content.

## Important Observations
- `FadeInSection` is intentionally more complex than the active home page needs today.
- The current home page still mixes shared motion helpers with local motion logic, so motion rules are split between `src/lib/motion.ts` and the component itself.
- `InteractiveCard` is safe to reuse anywhere that needs a small hover lift.

## Risk Notes
- Motion-heavy blur effects can be expensive on low-end devices.
- Any future reduced-motion support should be applied consistently, not just to one component.
