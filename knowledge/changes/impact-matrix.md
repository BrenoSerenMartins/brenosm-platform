# Change Impact

Existing matrix: [change impact matrix](../../.ai-reference/change-impact-matrix.md).

| Change | Main impact | Verification |
| --- | --- | --- |
| Home sections or shared CSS | Responsive layout, interactions | Home on mobile/desktop; keyboard flows |
| Layout, scroll, cursor or loading | Every route; hydration and motion | Routes, reduced motion, navigation |
| Content or site config | Facts, asset paths, contact links, metadata | Affected cards, links and metadata |
| Landing registry or definition | Directory, generated routes, sitemap | Directory, registered slug, unknown slug |
| Dependencies | Build and runtime compatibility | Lint, build and affected interactions |
| Documentation index | Documentation discovery only | Relative links and source references |

2026-11-05: added this index over `.ai-reference/`. No runtime, integration,
database or public API changes. Existing notes may contain historical references.
