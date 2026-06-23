# Database & Persistence: brenosm-platform

## Current State
There is no runtime database in this repository.

## Persistence Model
- Content lives in TypeScript source files.
- Images live in `public/`.
- Route output is generated at build time.
- Git history is the persistence layer for all textual and structural changes.

## Logical Data Model
The closest thing to entities is the content model in `src/types/content.ts` plus the portfolio contracts in `src/types/portfolio.ts`:
- `LandingDefinition`
- `PortfolioItem`
- `CompanyContext`
- `ProfileMode`
- `WorkLane`
- `PlatformNode`
- `ExperienceEntry`
- `ProfilePhoto`
- `HeroAction`
- `LinkItem`
- `PortfolioHero`
- `PortfolioStat`
- `ServiceCard`
- `ProjectCard`
- `PlaygroundCard`
- `TechCategory`
- `CareerEntry`
- `ResumeData`
- `AchievementEntry`

## Constraints
- `slug` values are application-level identifiers and should remain unique.
- There are no database indexes because there is no database.
- There are no migrations, constraints, or foreign keys.
- Referential integrity is handled manually through TypeScript imports and registry arrays.

## Implicit Rules
- `landingRegistry` acts like a tiny table of routable records.
- The active homepage is ordered by author intent, not by query.
- The current portfolio JSON is CV-derived, so the content model must stay faithful to the source document.

## If a Database Is Added Later
- Use an explicit schema rather than moving content ad hoc into random documents or API payloads.
- Index landing slugs and any future content slugs immediately.
- Keep static content separate from mutable operational data.
