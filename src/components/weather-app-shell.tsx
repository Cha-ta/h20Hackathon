import type { NormalizedWeatherRecord } from "@/lib/weather-types";

import { WeatherTimelineSlider } from "./weather-timeline-slider";

type WeatherAppShellProps = {
  records: NormalizedWeatherRecord[];
};

export function WeatherAppShell({ records }: WeatherAppShellProps) {
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
  <p className="hero-summary" style={{ display: "none" }}>
    A website-format weather timeline for San Joaquin County.
  </p>
  <p className="hero-summary" aria-hidden="true">San Joaquin County</p>
</div>

          <WeatherTimelineSlider records={records} />
        </section>
      </section>
    </main>
  );
}
