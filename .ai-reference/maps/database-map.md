# Database Map: brenosm-platform

## Current State
There is no database schema in the repository.

## Conceptual Entities
| Entity | Source File | Persistence | Notes |
| --- | --- | --- | --- |
| LandingDefinition | `src/types/content.ts` | Git / build-time content | Drives routing and landing metadata. |
| PortfolioItem | `src/types/content.ts` | Git / build-time content | Legacy portfolio/project data for the removed section archive. |
| CompanyContext | `src/types/content.ts` | Git / build-time content | Legacy company rail data for the removed section archive. |
| ProfileMode | `src/types/content.ts` | Git / build-time content | Historical type used by the removed home sections. |
| ExperienceEntry | `src/types/content.ts` | Git / build-time content | Historical type used by the removed home sections. |
| ProfilePhoto | `src/types/content.ts` | Git / build-time content | Controls profile image metadata and fallback behavior. |
| PortfolioHero | `src/types/portfolio.ts` | Git / build-time content | Drives the active hero narrative. |
| ProjectCard | `src/types/portfolio.ts` | Git / build-time content | Represents the current experience cards. |
| AchievementEntry | `src/types/portfolio.ts` | Git / build-time content | Represents the awards marquee items. |

## Rules
- `slug` fields should be unique in practice even though there is no database constraint.
- Ordering is semantic and controlled by array order.
- There are no joins, indexes, foreign keys, or migrations.

## Static Asset Layer
- `public/resume/*`
- `public/profile/*`
- `public/companies/*`

## Future If A DB Appears
- Model slugs explicitly and index them.
- Keep static portfolio content separate from mutable operational data.
- Add a migration strategy before introducing any persistent writes.
