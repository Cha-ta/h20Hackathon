"use client";

import { City3D } from "./city-3d";

type WeatherSceneShellProps = {
  weatherState: string;
  reservoir: number;
};

export function WeatherSceneShell({ weatherState, reservoir }: WeatherSceneShellProps) {
  return (
    <section
      aria-label="Weather scene shell"
      className={`scene-shell scene-shell--${weatherState}`}
      data-weather-state={weatherState}
    >
      <div className="scene-stage">
        <City3D weatherState={weatherState} />
      </div>

      <div className="reservoir-gauge" aria-label={`Reservoir level ${reservoir} percent`}>
        <span className="reservoir-gauge__label">Reservoir</span>
        <div className="reservoir-gauge__tank">
          <div
            className="reservoir-gauge__fill"
            style={{ height: `${Math.max(0, Math.min(100, reservoir))}%` }}
          />
        </div>
        <span className="reservoir-gauge__value">{reservoir}%</span>
      </div>
    </section>
  );
}
