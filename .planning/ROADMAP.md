# Roadmap: San Joaquin Weather Time Machine

**Created:** 2026-05-02
**Granularity:** Coarse
**Mode:** YOLO
**Requirements:** 19 v1 requirements

## Overview

This roadmap prioritizes visual fidelity to `weather.jpeg` while still building the timeline, data plumbing, and weather-state transitions needed for a convincing demo. The work is split into 4 broad phases so the app becomes demoable early and gains polish in each successive pass.

## Phase Summary

| Phase | Name | Goal | Requirements | Success Criteria |
|-------|------|------|--------------|------------------|
| 1 | Foundation Setup | Establish the Next.js/TypeScript app, load and sort the dataset, and prove the timeline starts at January 1, 2016 | TECH-01, TECH-02, TECH-03, DATA-01, DATA-02, TIME-03 | 4 |
| 2 | Timeline Experience | Build the core single-page experience with visible date state, slider scrubbing, and swipe navigation | EXP-01, TIME-01, TIME-02, TIME-04, DATA-03 | 4 |
| 3 | 3D Weather Scene | Create the generic 3D React city and connect weather-state changes for sun, rain, snow, hail, and flood conditions | EXP-03, VIS-01, VIS-02, VIS-03, VIS-04, VIS-05, VIS-06 | 4 |
| 4 | Reference Match Polish | Refine the layout, atmosphere, and visual composition so the final result closely matches `weather.jpeg` | EXP-02 | 4 |

## Phase Details

### Phase 1: Foundation Setup

**Goal:** Stand up the technical base and ensure the weather timeline is loaded correctly from `json.json` with the right default state.

**Requirements:** TECH-01, TECH-02, TECH-03, DATA-01, DATA-02, TIME-03

**Success criteria:**
1. A Next.js application exists and runs with TypeScript enabled.
2. The app reads `json.json` and sorts records chronologically in ascending order.
3. The initial selected record resolves to January 1, 2016.
4. The data layer exposes the selected record cleanly to the UI.

### Phase 2: Timeline Experience

**Goal:** Deliver the core interaction loop so users can move through time and read the current state from a polished single-page interface.

**Requirements:** EXP-01, TIME-01, TIME-02, TIME-04, DATA-03

**Success criteria:**
1. The app is presented as a single focused demo page.
2. Users can drag a left-right slider to scrub through available dates.
3. Users can swipe or drag horizontally on the main visualization to move backward and forward through time.
4. The selected date and associated dataset metrics update immediately with each timeline change.

### Phase 3: 3D Weather Scene

**Goal:** Build the generic 3D city scene in React and make it respond visually to the weather states represented in the historical data.

**Requirements:** EXP-03, VIS-01, VIS-02, VIS-03, VIS-04, VIS-05, VIS-06

**Success criteria:**
1. The main scene is a generic city rendered through React-based 3D or pseudo-3D presentation.
2. The scene responds to timeline changes by switching between weather states derived from the selected record.
3. Sunshine, rain, snow, hail, and flood conditions each have distinct visual treatments.
4. Weather transitions feel coherent enough for a live demo and clearly communicate the current condition.

### Phase 4: Reference Match Polish

**Goal:** Push the experience from functional to presentation-ready by aligning it closely to the composition, tone, and visual rhythm of `weather.jpeg`.

**Requirements:** EXP-02

**Success criteria:**
1. The layout hierarchy mirrors the reference with a strong hero scene, central temperature/date emphasis, and bottom timeline area.
2. Color palette, atmosphere, lighting, and depth cues feel consistent with `weather.jpeg`.
3. Spacing, shapes, and scene composition are refined for a judge-facing polished presentation.
4. The experience remains usable on both desktop and mobile without breaking the reference-inspired look.

## Coverage

| Requirement | Phase | Status |
|-------------|-------|--------|
| EXP-01 | Phase 2 | Pending |
| EXP-02 | Phase 4 | Pending |
| EXP-03 | Phase 3 | Pending |
| TIME-01 | Phase 2 | Pending |
| TIME-02 | Phase 2 | Pending |
| TIME-03 | Phase 1 | Pending |
| TIME-04 | Phase 2 | Pending |
| DATA-01 | Phase 1 | Pending |
| DATA-02 | Phase 1 | Pending |
| DATA-03 | Phase 2 | Pending |
| VIS-01 | Phase 3 | Pending |
| VIS-02 | Phase 3 | Pending |
| VIS-03 | Phase 3 | Pending |
| VIS-04 | Phase 3 | Pending |
| VIS-05 | Phase 3 | Pending |
| VIS-06 | Phase 3 | Pending |
| TECH-01 | Phase 1 | Pending |
| TECH-02 | Phase 1 | Pending |
| TECH-03 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 19 total
- Mapped to phases: 19
- Unmapped: 0 ✓

---
*Last updated: 2026-05-02 after initial roadmap creation*
