# Technical Debt: brenosm-platform

## Structural Debt
- The repository now has a single active home-page composition style: the premium CV-driven portfolio page.
- The main structural risk is keeping the active content schema stable as the page evolves.

## Validation Debt
- There are no automated tests yet.
- The project currently relies on lint, type-check, and production build validation.
- Any new content shape needs at least one browser pass because the UI is highly visual.

## Content Debt
- Social identity data is partial: GitHub is empty and LinkedIn is currently a handle rather than a fully verified profile URL.
- The homepage uses awards instead of testimonials because the attached résumé does not supply testimonial evidence.
- Some legacy content fields exist for future use but are unused in the active UI.

## Design Debt
- The site uses many blur and backdrop-filter effects, which are visually strong but maintenance-heavy.
- The legacy archive is still in the repo, so a maintainer can confuse preserved patterns with live code.
- The active homepage relies on a significant number of fluid layout and animation tokens, which raises the cost of later visual change.

## Operational Debt
- Package versions are declared as `latest`, so dependency drift is easy if the lockfile is ignored.
- There is no documentation-enforced release process beyond updating the registry and content files.

## Priority Order
1. Keep the portfolio JSON schema stable.
2. Keep the CV-only source of truth intact.
3. Consider whether the omitted UI libraries should be added or whether the CSS/Framer approach is now the canonical stack.
