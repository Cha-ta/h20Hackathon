---
phase: 1
slug: foundation-setup
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-05-02
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | vitest + react-testing-library |
| **Config file** | `vitest.config.ts` |
| **Quick run command** | `npm run test -- --run src/lib/weather-data.test.ts` |
| **Full suite command** | `npm run test -- --run` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run test -- --run src/lib/weather-data.test.ts`
- **After every plan wave:** Run `npm run test -- --run`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 20 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | TECH-01 | build | `npm run lint` | ❌ W0 | ⬜ pending |
| 1-01-02 | 01 | 1 | TECH-02 | build | `npm run typecheck` | ❌ W0 | ⬜ pending |
| 1-01-03 | 01 | 1 | TECH-03 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 1-02-01 | 02 | 2 | DATA-01 | unit | `npm run test -- --run src/lib/weather-data.test.ts` | ❌ W0 | ⬜ pending |
| 1-02-02 | 02 | 2 | DATA-02 | unit | `npm run test -- --run src/lib/weather-data.test.ts` | ❌ W0 | ⬜ pending |
| 1-02-03 | 02 | 2 | TIME-03 | unit | `npm run test -- --run src/lib/weather-data.test.ts` | ❌ W0 | ⬜ pending |
| 1-03-01 | 03 | 3 | TECH-03 | render | `npm run test -- --run src/app/page.test.tsx` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `vitest.config.ts` — test runner configuration
- [ ] `src/test/setup.ts` — shared test setup and jest-dom registration
- [ ] `src/lib/weather-data.test.ts` — unit tests for parsing, sorting, and default record selection
- [ ] `src/app/page.test.tsx` — initial render coverage for default data presentation
- [ ] `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom` — install and script wiring

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Initial visual shell feels aligned to the intended scene framing | TECH-03 | Composition quality is subjective and visual | Run the app, open the home page, and confirm the main scene area is positioned and framed to support the locked reference composition |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 20s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
