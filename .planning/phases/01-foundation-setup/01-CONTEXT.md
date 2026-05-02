# Phase 1: Foundation Setup - Context

**Gathered:** 2026-05-02
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the Next.js, TypeScript, and React foundation for the project, load and sort `json.json`, and prepare the application to start from January 1, 2016. This phase sets up the technical and product-facing base for the timeline and 3D experience without expanding scope into the full weather visualization feature set.

</domain>

<decisions>
## Implementation Decisions

### Weather mapping model
- Weather states should be derived through explicit rule-based logic, not month-driven heuristics or purely cinematic choices.
- Weather-state decisions should use all three dataset fields together: `Snowpack`, `Precip`, and `Reservoir`.
- Thresholds should stay fixed across the full timeline so records remain comparable year to year.
- Baseline interpretation should follow the California water-reporting framing the user provided:
  - Snowpack: `120%+ excellent`, `90-110% average`, `70-90% below average`, `<70% concerning`
  - Precipitation: `110%+ wet`, `90-110% normal`, `70-90% dry`, `<70% drought signal`
  - Reservoir: `85-100% strong`, `70-85% healthy`, `50-70% watch level`, `<50% concern`
- The product should standardize an expressive weather-state set rather than only the five most obvious states, even though sunshine, rain, snow, hail, and flood remain core examples.

### 3D scene foundation
- Phase 1 should already establish a near-final scene shell rather than a minimal placeholder.
- The core camera framing and overall composition should be locked early so later phases polish the same shot.
- The default January 1, 2016 resting scene should feel theatrical, with showpiece-level ambient motion rather than a static setup.
- Phase 1 should prepare the scene with state-ready hooks for weather variants, while full per-condition rendering can still deepen in later phases.

### Claude's Discretion
- Exact naming of the expressive weather-state set beyond the explicitly mentioned conditions.
- The specific internal data shape used after parsing and sorting `json.json`.
- The exact visual techniques used to achieve ambient motion and early scene framing.

</decisions>

<specifics>
## Specific Ideas

- The top priority is matching `weather.jpeg` as accurately as possible.
- The application should feel like a polished single-page hackathon demo, not a broad product shell.
- The user explicitly corrected the default start date to the true earliest record: January 1, 2016.
- The user supplied domain guidance for interpreting the data:
  - April 1 is the benchmark for peak California snowpack.
  - Precipitation percentages are measured against average.
  - Reservoir readings should be interpreted with carryover context in mind, but still mapped using fixed thresholds.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `json.json`: The historical dataset that must be loaded, sorted, and used as the timeline source of truth.
- `weather.jpeg`: The primary visual reference that should guide scene framing, hierarchy, and layout decisions.

### Established Patterns
- No application code exists yet, so Phase 1 can establish the initial project conventions.
- The stack is already locked at the project level: Next.js, TypeScript, and React.

### Integration Points
- The initial app scaffold should be created in a way that supports later timeline interaction and scene-state changes without replacing the core page shell.

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---
*Phase: 01-foundation-setup*
*Context gathered: 2026-05-02*
