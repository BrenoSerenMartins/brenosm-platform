# Integrations: brenosm-platform

## Current Integrations

| Integration | Where It Appears | Purpose | Status |
| --- | --- | --- | --- |
| Email | `src/features/home/components/contact-form.tsx` and `src/config/site.ts` | Primary contact path via `mailto:`. | Active. |
| Resume PDF | `public/resume/breno-seren-martins-curriculo.pdf` | Embedded viewer and download target. | Active. |
| Remote thumbnail service | `src/content/portfolio/index.ts` and `next.config.ts` | Optional project preview fallback if a future project supplies a live URL. | Supported, but dormant in the current CV-only content. |
| LinkedIn handle | `src/config/site.ts` | Social identity placeholder/handle. | Present, not a full external URL. |
| GitHub link | `src/config/site.ts` | Social identity anchor. | Empty today. |

## Integration Boundaries
- There is no ERP integration implemented in this repository.
- There is no payment gateway integration implemented in this repository.
- There are no webhooks or background sync jobs.
- The fintech and commerce references in copy are experience markers, not live system integrations.

## Asset and Static Content Integration
- `public/` owns all static assets that need to ship with the build.
- `public/resume/` is the only asset area that currently matters to the active homepage.
- The current CV-only project cards do not provide live URLs, so the remote thumbnail path is not part of the active rendering flow today.

## Integration Risks
- Generic social handles are not the same thing as real profile URLs.
- Remote previews become an external dependency as soon as a project record includes `url`.
- External links are trusted because they are author-controlled, but they still should be reviewed when changed.

## Future Integration Candidates
- CMS for editable content.
- Analytics provider.
- Contact form backend.
- Subdomain routing or edge middleware if `slug.brenosm.cloud` becomes a real hosting model.
