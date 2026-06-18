# Code Style Rules

## Language & Runtime
- TypeScript (strict mode) targeting `esnext`.
- Node 22 via `mise`. Package manager: `pnpm 10.20`.

## Formatting (Prettier)
| Setting | Value |
|---|---|
| `printWidth` | 100 |
| `tabWidth` | 2 |
| `useTabs` | false |
| `singleQuote` | true |
| `semi` | false |
| `trailingComma` | all |
| `arrowParens` | avoid |
| `bracketSpacing` | true |
| `endOfLine` | auto |

Run: `pnpm prettier`

## EditorConfig
- UTF-8, LF line endings, 2-space indent, trim trailing whitespace, insert final newline.

## TypeScript Conventions
- `strict: true` with all implicit checks enabled (`noImplicitAny`, `noImplicitReturns`, `noImplicitThis`, `noUnusedLocals`, `noImplicitOverride`, `noUncheckedIndexedAccess`, `strictNullChecks`).
- Use `Readonly<>` wrappers on model/data types (see `src/models/`).
- Prefer `type` aliases over `interface` for data shapes; use `interface` for stateful contracts (e.g., `State`).
- No semicolons at end of statements.
- Use single quotes for strings.
- Use trailing commas everywhere.
- Use arrow functions with omitted parens for single parameters (`x => x`).

## CSS Conventions
- Plain CSS with PostCSS (`postcss-preset-env` stage 0).
- CSS custom properties defined in `src/styles/vars.css`.
- Component styles co-located as `<component>.css`, imported via barrel `index.ts`.
- No CSS modules or CSS-in-JS; class names are plain global strings.
- Use `var(--token)` references for colors, spacing, typography, and borders.

## File Organisation
- Barrel exports via `index.ts` per component directory.
- Components follow `src/components/<name>/` pattern with `<name>.ts`, `<name>.css`, `<name>.test.ts`, `index.ts`.
- Models in `src/models/` as standalone type-only files.
- DOM utilities in `src/dom/`.
