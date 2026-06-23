# Forbidden Patterns: brenosm-platform

## 1. Business Logic In Route Shells
- Do not move content rules, preview fallback policy, or registry logic into route files when a feature/content module already owns that responsibility.

## 2. Hardcoded Content In Reusable Components
- Do not place new copy directly in shared components if the value belongs in `src/content/`.

## 3. Unregistered Landings
- Do not create a landing folder without adding it to `landingRegistry`.

## 4. Invented CV Facts
- Do not add companies, roles, dates, technologies, projects, or testimonials that are not present in the attached résumé.

## 5. CSS/JSX Drift
- Do not change JSX class names without updating the corresponding CSS module contract.
- Do not change the stylesheet contract without checking the affected pages and any historical archive references.

## 6. Unsafe External Links
- Do not use `target="_blank"` without `rel="noreferrer"`.

## 7. Build-Time Remote Dependencies Without Fallback
- Do not introduce remote build-time asset fetches unless there is a documented offline or local fallback.

## 8. Untyped Content Objects
- Do not add new content arrays or records without using the shared types in the relevant type file.

## 9. Circular Feature Imports
- Do not create import cycles between feature folders, especially between home and landings.

## 10. Dead Code Accumulation
- Do not introduce dormant section files without either wiring them into the active route or documenting them as historical archive material.

## 11. Hidden Route Shell Branding Drift
- Do not ship a new `loading` or `not-found` surface without matching the main homepage's premium visual language.

## 12. Unjustified Dependency Expansion
- Do not add new rendering libraries just because they were listed in a design brief; the dependency should match an actual product need and a documented maintenance budget.

## 13. Layout Fixes Via Hidden Overflow
- Do not use `overflow: hidden` to mask content problems in active UI surfaces.
