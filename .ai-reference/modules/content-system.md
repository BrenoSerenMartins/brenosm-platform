# Module: Content System

## Purpose
The content system is the repository's source of truth for copy, registries, structured experience data, and landing definitions.

## Main Files
- `src/types/content.ts`
- `src/content/portfolio/index.ts`
- `src/content/landings/registry.ts`
- `src/content/landings/landing-50/index.tsx`
- `src/content/landings/landing-50/showcase.tsx`
- `src/config/site.ts`

## Historical Files
- `src/content/site/home-content.ts` was the legacy home content model and has been removed from the active source tree.

## Model Semantics
| Type / Source | Meaning | Active Consumers | Notes |
| --- | --- | --- | --- |
| `HeroAction` | Legacy hero CTA link | Dormant hero section | Not used by the active homepage |
| `PlatformNode` | Legacy product/system node | Dormant ecosystem section | Describes what the author builds |
| `WorkLane` | Legacy service lane card | Dormant work section | No longer part of the active route |
| `PortfolioItem` | Legacy portfolio/project record | Dormant carousel | Different from the active portfolio JSON model |
| `ProfilePhoto` | Legacy portrait metadata | Dormant home path | Placeholder-driven |
| `ExperienceEntry` | Legacy career history item | Dormant highlights section | Used for the archived composition |
| `CompanyContext` | Legacy company/role context card | Dormant home path | Archived wording, not active UI |
| `ProfileMode` | Persona-specific profile view | Dormant profile command section | Encodes recruiter/technical/product perspectives |
| `LinkItem` | Footer/social link | Dormant closing banner | Derived partly from `siteConfig` |
| `PortfolioHero` | Active hero copy model | `src/content/portfolio/index.ts` and `HomePage` | Drives the premium homepage opening section |
| `PortfolioStat` | Active count-up stat model | `HomePage` | Powers animated stats |
| `ServiceCard` | Active service card model | `HomePage` | Service lines sold to prospects |
| `ProjectCard` | Active project/experience card model | `HomePage` | Includes fallback preview policy |
| `PlaygroundCard` | Active experiment card model | `HomePage` | Used to showcase technical range |
| `TechCategory` | Active stack cluster model | `HomePage` | Used in floating technology visual |
| `CareerEntry` | Active career timeline entry | `HomePage` | Used in the experience section |
| `ResumeData` | Active résumé payload | `HomePage` | Includes PDF path and supporting metadata |
| `AchievementEntry` | Active awards/social-proof item | `HomePage` | Replaces the old testimonial model |
| `LandingDefinition` | Landing registry contract | Landings route layer | `accent` is still unused by the active UI |

## Important Invariants
- `landingRegistry` is the only thing that makes a landing routable.
- `getLandingBySlug()` must stay pure and deterministic.
- The active homepage is entirely driven by `src/content/portfolio/*`.
- `resume.pdf` must point to a public asset.
- The legacy home-content model has been removed, so do not reconstruct business logic around it without a fresh archived surface.

## Content Risks
- Several fields are future-facing and may be forgotten if they are not documented here.
- Because the data is code-owned, a content typo can ship as a real build artifact.
- The registry system is small enough that a missing export will silently remove a landing from the site.

## Editing Rule
- Do not add new content shapes casually. Extend the relevant type file first, then update the consumers and the docs together.
