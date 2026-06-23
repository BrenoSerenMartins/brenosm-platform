# Anti-Patterns: brenosm-platform

## 1. JSX And CSS Drift
- Keep class names and stylesheet selectors aligned.
- The current repository already shows what happens when they drift: pages still render, but the intended design disappears.

## 2. Duplicate Motion Grammar
- Avoid maintaining two unrelated sets of animation conventions when one shared system would do.
- The current code already has shared motion tokens plus local ad hoc animation definitions.

## 3. Dormant Code Without Labeling
- If a feature file is not mounted, remove it or document it as historical archive material.
- Unlabeled dormant or archived code is a maintenance trap.

## 4. Invented Professional Data
- Do not leave generic GitHub/LinkedIn links or fabricated project claims in a production identity surface if the intent is to represent a real person.

## 5. Remote Build Dependencies Without Fallback
- Do not make a build depend on network access unless there is a robust offline fallback.

## 6. Hardcoded Featured Order Without Commentary
- If the first item in an array has business meaning, document that fact so the ordering does not get "cleaned up" by accident.

## 7. Feature Logic In Route Shells
- Keep route files thin and move real behavior into feature and content modules.

## 8. Ignoring Unused Content Fields
- Fields like `accent` or legacy content properties are part of the model and should either be consumed or deliberately documented as future hooks.

## 9. Using External Library Aspirations As Architecture
- Do not treat libraries listed in a design brief as installed architecture unless they are actually in `package.json`.
