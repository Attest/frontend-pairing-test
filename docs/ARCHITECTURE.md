# Architecture

## Overview

A vanilla TypeScript single-page application that displays survey results with demographic filtering. No framework -- rendering is done with a minimal custom tagged-template-literal + `innerHTML` approach.

## Tech Stack
| Layer | Tool |
|---|---|
| Language | TypeScript 5.9 (strict) |
| Bundler | Vite (via `rolldown-vite`) |
| CSS | PostCSS with `postcss-preset-env` stage 0 |
| Testing | Vitest 4 + happy-dom |
| Formatting | Prettier |
| Runtime | Node 22 (managed by `mise`) |
| Package Manager | pnpm 10.20 |

## Directory Structure

```
.
├── index.html                  # SPA entry point
├── public/
│   ├── api/
│   │   ├── survey.json         # Mock survey definition (questions + answers)
│   │   ├── demographics.json   # Mock demographic categories and options
│   │   └── respondents.json    # Mock respondent data (segmentation + responses)
│   └── assets/
│       └── logo.svg
├── src/
│   ├── main.ts                 # App bootstrap: subscribes to store, fetches data
│   ├── store.ts                # Global state + pub/sub (patchState / subscribe)
│   ├── dom/
│   │   ├── html.ts             # Tagged template literal for HTML string building
│   │   ├── render.ts           # Renders HTML string into a DOM element via innerHTML
│   │   └── index.ts            # Barrel export
│   ├── components/
│   │   ├── filters/
│   │   │   ├── filters.ts      # Demographic filter sidebar component
│   │   │   ├── filters.css
│   │   │   ├── filters.test.ts
│   │   │   └── index.ts
│   │   └── survey/
│   │       ├── survey.ts       # Survey results display component
│   │       ├── survey.css
│   │       ├── survey.test.ts
│   │       └── index.ts
│   ├── models/
│   │   ├── demographic.ts      # Demographic, DemographicOption types
│   │   ├── respondent.ts       # Respondent, RespondentSegmentation, RespondentResponses types
│   │   └── survey.ts           # Survey, SurveyQuestion, SurveyQuestionAnswer types
│   └── styles/
│       ├── vars.css             # CSS custom properties (design tokens)
│       └── main.css             # Global styles, page layout grid
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
├── prettier.config.js
├── .postcssrc.js
├── .editorconfig
└── .mise.toml
```

## Data Flow

```
index.html
  └─ src/main.ts (bootstrap)
       ├─ fetch /api/survey.json ──► patchState({ survey })
       ├─ fetch /api/demographics.json ──► patchState({ demographics })
       ├─ fetch /api/respondents.json ──► patchState({ respondents })
       └─ subscribe(callback)
            ├─ renderSurvey(state) ──► survey(state)(element)
            └─ renderFilters(state) ──► filters(state)(element)
```

### State Management (`src/store.ts`)

A minimal pub/sub store:
- **`State`** holds: `survey`, `demographics`, `respondents`, `selectedDemographics`, `selectedQuestionAnswers`.
- **`patchState(partial)`** merges partial state via `Object.assign` and notifies subscribers.
- **`subscribe(fn)`** registers a callback invoked on every state change.
- **`getState()`** returns current state reference.

### Rendering (`src/dom/`)

- `html` -- tagged template literal that concatenates strings (no escaping, no virtual DOM).
- `render(htmlString, effects?)` -- returns a function `(el) => void` that sets `el.innerHTML` and optionally runs side effects (e.g., attaching event listeners).

### Components

Components are **pure functions**: `(state: State) => (el: Element | null) => void`.

- **`filters`** -- renders demographic options in a sidebar. Clicking an option calls `toggleSelectedDemographicOption` which patches `selectedDemographics` in the store.
- **`survey`** -- renders survey questions and answer bars. Filters respondents by `selectedDemographics` to show filtered counts and percentages. A "marker" bar shows the unfiltered baseline; a "track" bar shows the filtered value.

### Domain Model

- **`Survey`** -- has a title and a map of `SurveyQuestion`s, each with a map of `SurveyQuestionAnswer`s.
- **`Demographic`** -- has an id, display name, and a map of `DemographicOption`s.
- **`Respondent`** -- has segmentation (which demographic options they belong to) and responses (which answers they selected per question).
