# Module: Site Config

## Purpose
`src/config/site.ts` stores global site metadata, contact details, and social links.

## Current Fields
- `name`: `Breno Seren Martins`
- `url`: `https://brenosm.cloud`
- `title`: `Breno Seren Martins | Desenvolvedor Full Stack`
- `description`: `Desenvolvedor Full Stack com foco em Backend, Magento, integrações ERP, fintech e performance.`
- `contactEmail`: `brenosm.dev@gmail.com`
- `socialLinks.github`: empty string
- `socialLinks.linkedin`: `brenoserenmartins`

## Consumers
- `app/layout.tsx` for metadata and Open Graph.
- `src/features/home/components/contact-form.tsx` for the `mailto:` handoff.

## Important Facts
- The social links are partial identity anchors, not guaranteed full profile URLs.
- `contactEmail` is the canonical contact target used by the home page CTA.
- `siteConfig.url` is used as the metadata base.

## Rules
- Keep this file authoritative for all top-level identity data.
- If the project title or contact path changes, update it here first so all derived content remains aligned.
- Do not scatter site identity values across components.

## Risk
- Because this config feeds SEO metadata, a bad edit affects the entire site immediately.
