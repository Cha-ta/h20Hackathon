# Phase 1: Foundation Setup - Research

**Date:** 2026-05-02
**Status:** Complete

## Research Question

What do we need to know to plan Phase 1 well for a Next.js + TypeScript + React weather-history app that starts on January 1, 2016 and prepares for a React-based 3D scene?

## Key Findings

### Next.js application structure

- Use the Next.js App Router as the project foundation.
- Start with the standard `app/` directory layout and TypeScript-enabled scaffold.
- Keep the initial page server-rendered by default, and isolate timeline/3D interactivity inside explicit client components.
- Preserve the repository assets (`json.json`, `weather.jpeg`) as source inputs, but wrap them behind app-level utilities so later phases do not couple directly to raw file access.

### React client/server boundary

- Interactive timeline controls, gesture handling, and any 3D canvas work belong in client components.
- Non-interactive data preparation can stay on the server side for a cleaner initial render path.
- The phase should establish a clear boundary early: server utility for loading/normalizing records, client-facing state model for later timeline interaction.

### React-based 3D approach

- React Three Fiber is the most direct React-native path for the later 3D scene.
- The foundation phase does not need full weather rendering, but it should reserve a scene component boundary and page shell that can accept a future `<Canvas>` scene without restructuring the app.
- The scene shell should support a locked composition early, even if Phase 1 still uses simplified geometry or a placeholder scene container.

### Data pipeline

- The raw dataset should be normalized once into a typed record model.
- Sorting chronologically and deriving the default selected record should happen in a reusable utility, not inline in UI code.
- Weather-state mapping should be encapsulated in a dedicated domain helper so later visual logic reads stable state labels instead of reinterpreting raw metrics everywhere.

## Recommendations

1. Scaffold a Next.js App Router project with TypeScript, ESLint, and a `src/` layout from the start.
2. Create a small domain layer for weather records:
   - raw record type
   - normalized record type with parsed date
   - chronological sorting
   - default record selection for January 1, 2016
   - expressive weather-state derivation based on fixed thresholds
3. Build an initial page shell now, but keep the interactive scene itself behind a dedicated React component boundary for Phase 3 expansion.
4. Add minimal automated verification in Phase 1 around the data pipeline so later UI work has a trusted source of truth.

## Validation Architecture

### Recommended test stack

- Use Vitest for fast TypeScript-friendly unit tests.
- Use React Testing Library only where Phase 1 needs a minimal render assertion for the page shell or default-state display.
- Keep the first test focus narrow: parsing, sorting, default-date selection, and weather-state derivation.

### Why this fits Phase 1

- The repo has no existing test infrastructure, so the first validation layer should target pure functions and low-friction render checks.
- Phase 1 success depends more on data correctness and structural setup than on full UI interaction testing.
- This gives later phases a stable safety net without overbuilding the test harness.

## Planning Implications

- Phase 1 should likely split into:
  - project scaffold and test setup
  - data/domain utilities and verification
  - initial app shell wired to the normalized default record
- The phase should avoid full slider or swipe behavior, but it should produce the typed and validated state model those interactions will use.

## Sources

- Next.js App Router getting started: https://nextjs.org/docs/app/getting-started
- Next.js installation and defaults: https://nextjs.org/docs/app/getting-started/installation
- React `'use client'` directive: https://react.dev/reference/rsc/use-client
- React Server Components overview: https://react.dev/reference/rsc/server-components
- React Three Fiber introduction: https://r3f.docs.pmnd.rs/getting-started/introduction
- React Three Fiber Canvas API: https://r3f.docs.pmnd.rs/api/canvas
- Vitest getting started: https://vitest.dev/guide/
- React Testing Library intro: https://testing-library.com/docs/react-testing-library/intro/
