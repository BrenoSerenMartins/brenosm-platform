# Integration Map: brenosm-platform

## Current External Integrations

| Integration | Location | Purpose | Status |
| --- | --- | --- | --- |
| `image.thum.io` | `src/content/portfolio/index.ts` | Remote project thumbnail fallback | Supported, but dormant in current CV-only content |
| External project URLs | `src/content/portfolio/projects.json` | Link visitors to live work | Dormant today because the CV-only data does not provide URLs |
| `mailto:` | `src/features/home/components/contact-form.tsx` | Contact handoff without backend | Active |
| GitHub | `src/config/site.ts` | Social link | Empty today |
| LinkedIn | `src/config/site.ts` | Social link | Handle only, not a full verified URL |
| Local resume PDF | `public/resume/breno-seren-martins-curriculo.pdf` | Embedded viewer and download | Active |

## What Is Not Integrated
- No ERP system.
- No payment gateway.
- No CMS.
- No analytics provider.
- No webhook receiver.
- No background sync service.
- No queue worker.
- No authentication or authorization system.

## Integration Risk Notes
- Any future integration that requires secrets should live behind environment variables and not in the content layer.
- If social URLs become real, update `siteConfig` first so all derived links remain consistent.
- If a CMS or analytics layer appears, document whether it is read-only, write-capable, or both.
