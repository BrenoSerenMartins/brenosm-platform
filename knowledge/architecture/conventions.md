# Conventions

Existing guidance: [conventions](../../.ai-reference/conventions.md).

- Keep route files thin, feature UI local, and genuinely shared components in `src/components/`.
- Use English identifiers and small functions with explicit responsibilities.
- Keep business rules outside UI and handlers; add services or repositories only for real boundaries.
- Before edits, identify modules, rules, integrations, database/API impact and regression risks.
- Update relevant existing notes when behavior changes; avoid duplicate documentation.
- Run checks appropriate to the change. Available commands: `npm run lint`, `npm run build`.
