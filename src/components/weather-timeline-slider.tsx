"use client";

import { useState } from "react";

import { describeWeatherState } from "@/lib/weather-state";
import type { NormalizedWeatherRecord } from "@/lib/weather-types";

import { WeatherSceneShell } from "./weather-scene-shell";

type WeatherTimelineSliderProps = {
  records: NormalizedWeatherRecord[];
};

export function WeatherTimelineSlider({ records }: WeatherTimelineSliderProps) {
  const [index, setIndex] = useState(0);
  const record = records[index];
  const lastIndex = records.length - 1;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(lastIndex, i + 1));

  return (
    <>
      <div className="hero-stat-row" aria-label="Current weather snapshot">
        <article className="hero-stat hero-stat--primary">
          <span className="hero-stat__label">Date</span>
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

      <div className="timeline-controls" aria-label="Timeline slider">
        <button
          type="button"
          className="timeline-btn"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous date"
        >
          ←
        </button>

        <input
          type="range"
          min={0}
          max={lastIndex}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="timeline-slider"
          aria-label="Scrub through dates"
        />

        <button
          type="button"
          className="timeline-btn"
          onClick={goNext}
          disabled={index === lastIndex}
          aria-label="Next date"
        >
          →
        </button>
      </div>

      <div className="timeline-readout">
        <span>{records[0].label}</span>
        <span className="timeline-readout__current">{record.label}</span>
        <span>{records[lastIndex].label}</span>
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
    </>
  );
}