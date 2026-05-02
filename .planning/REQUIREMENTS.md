# Requirements: San Joaquin Weather Time Machine

**Defined:** 2026-05-02
**Core Value:** Make historical weather data feel tangible through a visually striking, reference-accurate time-scrubbing experience.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Experience

- [ ] **EXP-01**: User lands on a single polished demo page focused on the weather visualization experience.
- [ ] **EXP-02**: Page composition, atmosphere, and hierarchy closely match the visual reference in `weather.jpeg`.
- [ ] **EXP-03**: The main viewport presents a generic 3D city scene rather than a geographically exact model.

### Timeline

- [ ] **TIME-01**: User can move through the weather history using a slider that scrubs left and right across the JSON dates.
- [ ] **TIME-02**: User can swipe the main visualization left and right to move backward and forward through time.
- [ ] **TIME-03**: The experience initializes to the earliest date in the dataset, January 1, 2016.
- [ ] **TIME-04**: The currently selected date is clearly shown in the interface as the user moves through time.

### Data

- [ ] **DATA-01**: The application reads timeline data from the provided `json.json` file.
- [ ] **DATA-02**: The dataset is sorted chronologically before being shown to the user.
- [ ] **DATA-03**: Weather-related metrics from the dataset are surfaced in the interface for the selected time step.

### Visualization

- [ ] **VIS-01**: The 3D city visually changes based on the selected record’s weather state.
- [ ] **VIS-02**: The visualization can represent sunny conditions.
- [ ] **VIS-03**: The visualization can represent rainy conditions.
- [ ] **VIS-04**: The visualization can represent snowy conditions.
- [ ] **VIS-05**: The visualization can represent hail conditions.
- [ ] **VIS-06**: The visualization can represent flood conditions.

### Technical Foundation

- [ ] **TECH-01**: The site is built with Next.js.
- [ ] **TECH-02**: The codebase uses TypeScript.
- [ ] **TECH-03**: The interactive 3D experience is implemented with React.

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhancements

- **ENH-01**: User can see the date above the city

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Multi-page navigation or product sections | v1 is a focused single-page presentation experience |
| Geographically exact 3D San Joaquin County model | Generic city keeps scope achievable while preserving the visual concept |
| Real-time forecast integration | Historical JSON playback is the v1 source of truth |
| User accounts or saved views | Not core to the demo value |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

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
*Requirements defined: 2026-05-02*
*Last updated: 2026-05-02 after initial definition*
