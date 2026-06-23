# Change Impact Matrix: brenosm-platform

| If you change... | Affected modules | What can break | What to retest |
| --- | --- | --- | --- |
| `src/types/portfolio.ts` | `src/content/portfolio/*`, `modules/portfolio-content.md`, `modules/home.md` | Homepage content shape, compile-time typing, JSON contract | `tsc`, root route, about/services/experience/resume sections |
| `src/content/portfolio/projects.json` | `HomePage`, `getProjectPreviewSrc()` | Experience cards, preview fallback behavior, external thumbnail support | Experience cards, fallback block, `tsc` |
| `src/content/portfolio/resume.json` | `HomePage`, resume viewer section | PDF viewer path, skills/education display | Resume section, download CTA, embedded PDF |
| `src/content/portfolio/career.json` | `HomePage` | Experience timeline copy and ordering | Experience section on desktop/mobile |
| `src/content/portfolio/achievements.json` | `HomePage`, `AchievementMarquee` | Awards/social-proof content and marquee width | Awards loop, reduced-motion handling |
| `src/features/home/home-page.tsx` | Root route, `modules/home.md` | Entire home experience, CTA anchors, motion timing | `/`, mobile layout, scroll reveal, contact CTA |
| `src/features/home/portfolio-page.module.css` | Root route and home components | Layout, spacing, depth, responsive behavior | `/`, mobile breakpoints, hover and tilt behavior |
| `src/features/home/components/contact-form.tsx` | Contact section | Validation, `mailto:` generation, success state | Contact form edge cases, empty/invalid values |
| `src/features/home/components/hero-scene.tsx` | Hero section | Cursor-following depth, pseudo-3D hero visual | Pointer move, reduced-motion mode, desktop and tablet |
| `src/features/home/components/premium-cursor.tsx` | Root route | Ambient cursor effect | Pointer fine devices, reduced-motion mode |
| `src/content/landings/registry.ts` | `/landings`, `/landings/[slug]`, `modules/landings.md` | Landing discovery, static params, metadata, 404 behavior | `/landings`, `/landings/landing-50`, unknown slug 404 |
| `src/features/landings/landing-directory-page.tsx` | `/landings` | Directory card presentation and navigation | Directory cards, internal link flow |
| `src/features/landings/landing-showcase-page.tsx` | `/landings/[slug]` | Landing shell, meta row, back link | Showcase page, route back to directory |
| `app/layout.tsx` | Entire app | Metadata, language attribute, global shell | Any page render, build success, metadata tags |
| `app/globals.css` | Entire app | Theme tokens, noise overlay, base typography | All routes on desktop and mobile |
| `app/loading.tsx` / `app/not-found.tsx` | Route shell | Loading and fallback branding | Route transitions, unknown routes, mobile layout |
| `public/resume/*` | Resume viewer | Embedded PDF path | Resume viewer, download CTA |

## Regression Checklist
- [ ] Check that the root route still renders the hero, about, services, experience cards, playground, stack, resume, awards, and contact sections.
- [ ] Check that the landing directory still lists every registered landing.
- [ ] Check that `/landings/[slug]` still resolves static paths and 404s unknown slugs.
- [ ] Check that project cards with and without local images still render correctly.
- [ ] Check that `lint`, `tsc`, and build remain green.
