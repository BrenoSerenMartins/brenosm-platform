# Performance: brenosm-platform

## Performance Strategy
- Static generation keeps route delivery cheap.
- The homepage is content-driven, so most expensive decisions live in a few reusable motion components rather than every section.
- Next Image is used for local assets and remote thumbnails where needed.
- Motion mostly uses `opacity`, `transform`, and motion values instead of layout thrashing.
- The page favors a visually premium but compact client bundle over a heavy app framework.

## Positive Performance Choices
- `generateStaticParams()` precomputes landing routes.
- Project images are handled through `next/image`.
- The project cards now degrade to text-only fallback blocks when no image and no URL exist.
- Motion variants are short and declarative.
- The homepage only holds the minimal interactive state required for validation, pointer following, and count-up animation.

## Cost Centers
- `PremiumCursor` keeps pointer listeners and uses two blur-heavy layers.
- `HeroScene` adds several animated layers and pointer-driven transforms.
- `backdrop-filter` appears across multiple cards and shells.
- `body::before` adds a fixed noise overlay.
- The active home page is a client component, so its content ships more JavaScript than a pure server-rendered page would.
- The embedded PDF viewer is heavier than a pure link-based résumé section.

## Current Risk Points
- Missing or malformed JSON can break the homepage content pipeline at build time.
- The dormant remote thumbnail fallback is only relevant if future project data adds real URLs.
- The removed section-based home components no longer affect runtime performance, but historical references to them still affect maintenance cost if they are not cleaned up.

## What To Measure If You Change The UI
- Client bundle size.
- First load animation smoothness.
- Image layout stability.
- Mobile responsiveness at small and medium widths.
- Build time, especially if any new remote asset dependency is added.
