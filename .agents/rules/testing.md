# Testing Rules

## Framework
- **Vitest 4.x** with `happy-dom` environment.
- Config: `vitest.config.ts`.

## Test File Conventions
- Co-locate tests with source: `src/components/<name>/<name>.test.ts`.
- Test files match pattern `**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`.
- Import from `vitest`: `describe`, `it`, `expect`.

## Running Tests
```sh
pnpm test        # watch mode (default vitest behaviour)
```

## Writing Tests
- Render components by calling the component function with a `State` object, then invoking the returned render function on a DOM element (e.g., `document.body`).
- Use mock JSON data from `public/api/` (`survey.json`, `demographics.json`, `respondents.json`) imported directly.
- Use `toMatchInlineSnapshot()` for full HTML output assertions.
- Use `toHaveLength()` for element count checks.
- Simulate user interaction via `dispatchEvent(new MouseEvent('click'))`.
- Assert state changes by importing `getState()` from `src/store.ts`.

## Coverage
<!-- TODO: human please fill in -->
No coverage thresholds are currently configured.
