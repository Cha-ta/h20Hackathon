"use client";

import { useEffect, useRef } from "react";

type WeatherSceneShellProps = {
  weatherState: string;
};

export function WeatherSceneShell({ weatherState }: WeatherSceneShellProps) {
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;

    container.innerHTML = "";

const needsParticles = ["rain", "snow", "hail", "flood"].includes(weatherState);
    if (!needsParticles) return;

const count = weatherState === "rain" ? 60 
  : weatherState === "flood" ? 80
  : weatherState === "hail" ? 40 
  : 80;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = `particle particle--${weatherState}`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 2}s`;
      p.style.animationDuration = `${0.4 + Math.random() * 0.8}s`;
      container.appendChild(p);
    }
  }, [weatherState]);

  const showSun = ["sun", "drought"].includes(weatherState);
  const showMoon = ["clear", "overcast", "rain", "hail", "snow"].includes(weatherState);
  const showFloodWater = weatherState === "flood";

  return (
    <section
      aria-label="Weather scene shell"
      className={`scene-shell scene-shell--${weatherState}`}
      data-weather-state={weatherState}
    >
      {/* Sky elements */}
      {showSun && <div className="scene-sun" />}
      {showMoon && <div className="scene-moon" />}

      {/* Clouds — hidden for sun/drought */}
      {!["sun", "drought"].includes(weatherState) && (
        <>
          <div className="scene-cloud scene-cloud--front" />
          <div className="scene-cloud scene-cloud--back" />
          {["rain", "hail", "flood", "overcast", "snow"].includes(weatherState) && (
            <div className="scene-cloud scene-cloud--extra" />
          )}
        </>
      )}

      {/* Particles (rain / snow / hail) */}
      <div className="scene-particles" ref={particleRef} aria-hidden="true" />

      {/* City stage */}
      <div className="scene-stage">
        <div className="scene-base">
          <div className="scene-base__top" />
          <div className="scene-base__side scene-base__side--left" />
          <div className="scene-base__side scene-base__side--right" />
        </div>

        <div className="scene-city">
          {/* Clock tower */}
          <div className="building building--tower">
            <div className="building__roof building__roof--spire" />
            <div className="building__face building__face--front">
              <div className="building__clock" />
              <div className="building__windows building__windows--tower" />
            </div>
            <div className="building__face building__face--side" />
          </div>

          {/* Main building */}
          <div className="building building--main">
            <div className="building__roof" />
            <div className="building__face building__face--front">
              <div className="building__windows building__windows--grid" />
            </div>
            <div className="building__face building__face--side" />
          </div>

          {/* Short building */}
          <div className="building building--short">
            <div className="building__roof" />
            <div className="building__face building__face--front">
              <div className="building__windows building__windows--small" />
            </div>
            <div className="building__face building__face--side" />
          </div>

          {/* Bridge tower */}
          <div className="building building--bridge">
            <div className="building__roof building__roof--peak" />
            <div className="building__face building__face--front">
              <div className="building__windows building__windows--arch" />
            </div>
            <div className="building__face building__face--side" />
          </div>
        </div>

        {/* Streetlamps */}
        <div className="scene-lamp scene-lamp--left" />
        <div className="scene-lamp scene-lamp--right" />

        {/* Flood water layer */}
        {showFloodWater && <div className="scene-flood" aria-hidden="true" />}
      </div>
    </section>
  );
}