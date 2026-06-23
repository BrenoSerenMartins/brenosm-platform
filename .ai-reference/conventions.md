# Conventions: brenosm-platform

## Naming
- Route files are always `page.tsx`.
- Feature components use PascalCase file names.
- Shared content and config stay in `src/content/` and `src/config/`.
- CSS Modules use the `*.module.css` suffix.

## Structure
- Keep route-level files thin.
- Put real page composition in `src/features/`.
- Keep data in `src/content/`.
- Keep shared contracts in `src/types/`.
- Keep reusable animation values in `src/lib/motion.ts`.

## Content Rules
- Prefer `ReadonlyArray` for content collections.
- Prefer `type` aliases for content contracts.
- Keep author copy out of component bodies when it can live in `src/content/`.
- Update registry files when adding routable content.
- For the active homepage, keep professional facts faithful to the attached CV and do not invent new roles, dates, projects, or technologies.

## Link Rules
- Use `Link` for internal navigation.
- Use `<a>` for external destinations and mail links.
- Use `target="_blank"` only with `rel="noreferrer"`.

## Motion Rules
- Prefer the shared reveal and fade primitives where the layout fits them.
- Use local Framer Motion props only when a component needs specific dynamics, such as hover scaling or pointer-following effects.
- Keep reduced-motion behavior in mind for any new ambient effect.

## Styling Rules
- Use CSS variables for colors, radii, spacing, and theme values.
- Use CSS Modules for route- and feature-scoped styling.
- Prefer fluid sizing with `clamp()`, `min()`, `max()`, `cqw`, and `cqh` over fixed sizes in new UI.
- Avoid `overflow: hidden` as a layout fix; use structure changes or clipping only when the element is purely decorative.
- Keep stylesheet contracts synchronized with the JSX that consumes them.

## Workflow Rules
- Treat content and logic changes separately whenever possible.
- Update `.ai-reference/` whenever the architecture or business rules change.
- Do not add a new landing or page surface without documenting the impact on routes and registry entries.
