# AGENTS.md

## Project Summary
Attest Frontend Technical Test -- a vanilla TypeScript SPA that displays survey results with demographic filtering. Built with Vite, Vitest, PostCSS, and no framework.

## Quick Reference
| Command | Purpose |
|---|---|
| `pnpm start` | Dev server at http://localhost:5173 |
| `pnpm build` | Typecheck + production build |
| `pnpm test` | Run unit tests (Vitest, watch mode) |
| `pnpm typecheck` | TypeScript type checking (`tsc --noEmit`) |
| `pnpm prettier` | Format all files |

## Architecture
See `docs/ARCHITECTURE.md` for full details.

### Key Paths
| Path | Purpose |
|---|---|
| `src/main.ts` | App entry point; fetches data, subscribes to store |
| `src/store.ts` | Global state and pub/sub |
| `src/dom/` | Minimal HTML templating and rendering utilities |
| `src/components/filters/` | Demographic filter sidebar |
| `src/components/survey/` | Survey results display |
| `src/models/` | TypeScript type definitions (Demographic, Respondent, Survey) |
| `src/styles/` | Global CSS and design tokens |
| `public/api/` | Static mock JSON data |

## Coding Standards
See `.agents/rules/code-style.md` for formatting, TypeScript, and CSS conventions.

Key points:
- Strict TypeScript. No semicolons. Single quotes. Trailing commas.
- Prettier-formatted (run `pnpm prettier`).
- CSS custom properties from `src/styles/vars.css`. No CSS modules.
- Components are pure functions: `(state: State) => (el: Element | null) => void`.

## Testing
See `.agents/rules/testing.md` for full testing guidelines.

- Vitest with happy-dom.
- Tests co-located with components as `<name>.test.ts`.
- Mock data imported from `public/api/*.json`.

## Security
See `.agents/rules/security.md` for security considerations.

- The `html` template utility does **not** sanitise input. Never interpolate untrusted data.
- Zero production dependencies.

## Documentation Maintenance
When a code change invalidates any section of this file, `README.md`, or `docs/ARCHITECTURE.md`:
1. Flag the outdated section in your response.
2. Propose an update with the exact edit.
3. Apply the update only after confirmation.
