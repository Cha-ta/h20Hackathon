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
            <span className="site-mark__droplet" aria-hidden="true">💧</span>
            <span>h2Show</span>
          </div>
          <div className="site-credits">
            <span>
              Created by:{" "}
              <a href="https://github.com/nickaustinn" target="_blank" rel="noopener noreferrer">
                Nick Austin
              </a>
            </span>
            <span>
              Created by:{" "}
              <a href="https://github.com/cha-ta" target="_blank" rel="noopener noreferrer">
                Daniel Villasenor
              </a>
            </span>
          </div>
        </header>

        <section className="hero-stage">
          <div className="hero-copy">
            <p className="hero-kicker">Historical Weather Replay</p>
            <h1 className="hero-title">San Joaquin County weather timeline</h1>
          </div>

          <WeatherTimelineSlider records={records} />
        </section>
      </section>
    </main>
  );
}
