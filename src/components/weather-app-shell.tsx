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

        <section className="hero-stage">
          <div className="hero-copy">
            <p className="hero-kicker">Historical Weather Replay</p>
            <h1 className="hero-title">San Joaquin County weather timeline</h1>
          </div>

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

          <div className="hero-scene-panel">
            <WeatherSceneShell weatherState={record.state} />
          </div>

          <div className="timeline-bar-wrapper" aria-label="Timeline slider placeholder">
            <div className="timeline-bar" />
          </div>

          <section className="metrics-panel" aria-label="Weather metrics">
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
        </section>
      </section>
    </main>
  );
}
