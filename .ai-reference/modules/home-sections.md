# Module: Dormant Home Sections

> Historical archive only. The source files described below were removed from the active codebase during the portfolio rewrite. Keep this document as traceability for old references, not as live implementation guidance.

## Purpose
`src/features/home/sections/` used to contain the old section-based composition of the home experience. It has been removed from the source tree and replaced by the CV-driven portfolio page.

## Files And Responsibilities
| File | Responsibility | Key Inputs | Status |
| --- | --- | --- | --- |
| `hero-section.tsx` | Older hero composition with status pills, action links, and profile visual | `heroContent`, `heroActions`, `deliveryBadges` | Dormant |
| `profile-command-section.tsx` | Interactive profile-mode switcher | `profileModes`, `FadeInSection`, `AnimatePresence` | Dormant |
| `work-section.tsx` | Service-lane grid with section heading | `selectedWork`, `SectionHeading` | Dormant |
| `ecosystem-section.tsx` | Product/problem-space grid | `platformNodes`, `SectionHeading` | Dormant |
| `highlights-section.tsx` | Capabilities list plus experience timeline | `capabilities`, `experienceEntries` | Dormant |
| `portfolio-carousel-section.tsx` | Horizontal portfolio carousel with manual scroll controls | `portfolioItems` | Dormant |
| `closing-banner.tsx` | Final CTA and footer links | `footerLinks` | Dormant |

## Shared Characteristics
- These files were client components when they existed.
- Most of them used `RevealGroup`, `RevealItem`, and/or `FadeInSection`.
- They depended on the legacy content model in `src/content/site/home-content.ts`.
- They were paired with the legacy stylesheet contract in `src/features/home/home-page.module.css`, which has also been removed.

## Important Implications
- This document behaves like a preserved design-system snapshot.
- If any old branch or artifact reintroduces these files, the stylesheet contract must be recreated before wiring them back into a route.
- The active home route should not depend on this archive.

## Dependencies
- `src/components/motion/fade-in-section.tsx`
- `src/components/motion/reveal-group.tsx`
- `src/components/motion/reveal-item.tsx`
- `src/components/motion/interactive-card.tsx`
- `src/components/site/section-heading.tsx`
- `src/content/site/home-content.ts`
- `src/lib/motion.ts`
- `src/features/home/home-page.module.css` (historical, removed)

## Validation Risk
- Because these modules are not mounted and no longer exist in the source tree, any future maintainer should treat this document as historical only. Do not infer current behavior from it.
