# San Joaquin Weather Time Machine

## What This Is

An immersive weather-history website for San Joaquin County that lets users move through time and watch a stylized 3D city react to changing weather conditions. The experience is a single polished demo page built for hackathon judges, with the visual composition intended to match `weather.jpeg` as closely as possible while using a generic city rather than a literal county model.

## Core Value

Make historical weather data feel tangible through a visually striking, reference-accurate time-scrubbing experience.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Users can scrub a timeline left and right to move through monthly weather history.
- [ ] Users can swipe the main scene to move forward and backward through time.
- [ ] The experience starts on the earliest date in the JSON dataset, January 1, 2016.
- [ ] A generic 3D city scene visually changes to represent conditions such as sunshine, rain, hail, snow, and flooding.
- [ ] The page composition and mood match `weather.jpeg` as closely as possible.
- [ ] The site is implemented in Next.js with TypeScript and React.

### Out of Scope

- Multi-page product flows — v1 is a single polished demo page for presentation clarity.
- A geographically accurate 3D reconstruction of San Joaquin County — the city should be generic to preserve scope and speed.
- Live weather feeds or forecasting — v1 is based on the provided historical JSON timeline only.

## Context

This project is for a hackathon-style presentation, so the first impression and demo impact matter more than breadth of product surface area. The provided repository includes `weather.jpeg` as the primary visual reference and `json.json` as the historical weather dataset. The expected interaction is a time-travel style weather playback where the city evolves as the user moves across the dataset.

## Constraints

- **Tech stack**: Next.js + TypeScript + React — explicitly required for implementation.
- **Visual fidelity**: Match `weather.jpeg` as closely as possible — this is the top product priority.
- **Interaction model**: Support both swipe gestures and a left/right slider — both are core to the experience.
- **Data source**: Start from the earliest record in `json.json` and use that dataset as the timeline source of truth — default state must be January 1, 2016.
- **Scope**: Single polished page — optimize for a demo-ready experience rather than feature breadth.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Prioritize visual fidelity to `weather.jpeg` over broader functionality | The project is aimed at hackathon judges and needs immediate visual impact | — Pending |
| Use Next.js, TypeScript, and React | Stack explicitly requested by the user | — Pending |
| Use a generic 3D city instead of a literal county model | Keeps scope realistic while preserving the intended visual effect | — Pending |

---
*Last updated: 2026-05-02 after initialization*
