# Security Rules

## General
- This is a frontend-only application with no backend server or authentication.
- API data is served as static JSON files from `public/api/` via Vite's dev server.

## XSS Considerations
- The custom `html` tagged template literal in `src/dom/html.ts` performs **no sanitisation** -- it concatenates strings directly. Any user-controlled or external data interpolated into templates is injected as raw HTML via `innerHTML`.
- **Do not** interpolate untrusted input into `html` templates without first escaping HTML entities.

## Dependencies
- Keep dependencies minimal. The project has zero production dependencies; all packages are `devDependencies`.
- Run `pnpm audit` periodically to check for known vulnerabilities.

## Secrets
- No secrets, API keys, or tokens are used in this project.
- Do not commit `.env` files or secrets to the repository.

## Data
- All data (`survey.json`, `demographics.json`, `respondents.json`) is mock/synthetic data with no PII.
<!-- TODO: human please fill in if production data handling rules apply -->
