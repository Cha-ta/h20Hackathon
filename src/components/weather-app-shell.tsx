import { describeWeatherState } from "@/lib/weather-state";
import type { NormalizedWeatherRecord } from "@/lib/weather-types";

import { WeatherSceneShell } from "./weather-scene-shell";

type WeatherAppShellProps = {
  record: NormalizedWeatherRecord;
};

export function WeatherAppShell({ record }: WeatherAppShellProps) {
  return (
    <main className="page-shell">
      <section className="website-shell" aria-label="Website homepage shell">
        <header className="site-header">
          <div className="site-mark">
            <span className="site-mark__dot" aria-hidden="true" />
            <span>San Joaquin Weather Time Machine</span>
          </div>
          <nav className="site-nav" aria-label="Website navigation">
            <span>History</span>
            <span>Conditions</span>
            <span>Data View</span>
          </nav>
        </header>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Historical Weather Replay</p>
            <h1 className="hero-title">A website-format weather timeline for San Joaquin County.</h1>
            <p className="hero-summary">
              The experience opens at the earliest record in the archive and uses a scene-first layout that will
              support slider, swipe, and 3D weather transitions in later phases.
            </p>

            <div className="hero-stat-row" aria-label="Default weather snapshot">
              <article className="hero-stat hero-stat--primary">
                <span className="hero-stat__label">Default Date</span>
                <strong>{record.label}</strong>
              </article>
              <article className="hero-stat">
                <span className="hero-stat__label">Reservoir</span>
                <strong>{record.metrics.reservoir}%</strong>
              </article>
              <article className="hero-stat">
                <span className="hero-stat__label">Condition</span>
                <strong>{describeWeatherState(record.state)}</strong>
              </article>
            </div>
          </div>

          <div className="hero-scene-panel">
            <div className="scene-panel__meta">
              <span className="scene-panel__city">San Joaquin County</span>
              <span className="scene-panel__state">{describeWeatherState(record.state)}</span>
            </div>
            <WeatherSceneShell weatherState={record.state} />
          </div>
        </section>

        <section className="support-grid">
          <section className="metrics-panel" aria-label="Weather metrics">
            <div className="section-heading">
              <p className="section-kicker">Water Indicators</p>
              <h2>January 2016 baseline metrics</h2>
            </div>
            <div className="metrics-grid">
              <div>
                <span>Snowpack</span>
                <strong>{record.metrics.snowpack}%</strong>
              </div>
              <div>
                <span>Precip</span>
                <strong>{record.metrics.precipitation}%</strong>
              </div>
              <div>
                <span>Reservoir</span>
                <strong>{record.metrics.reservoir}%</strong>
              </div>
            </div>
          </section>

          <section className="timeline-placeholder" aria-label="Timeline placeholder">
            <div className="section-heading">
              <p className="section-kicker">Timeline System</p>
              <h2>Website controls arrive in Phase 2</h2>
            </div>
            <p>
              The timeline shell is now part of the website layout rather than trapped inside a phone-like card. The
              slider and swipe interactions will attach to this wider desktop-friendly structure next.
            </p>
            <div className="timeline-bar" />
          </section>
        </section>
      </section>
    </main>
  );
}
