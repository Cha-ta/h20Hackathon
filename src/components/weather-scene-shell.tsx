"use client";

type WeatherSceneShellProps = {
  weatherState: string;
};

export function WeatherSceneShell({ weatherState }: WeatherSceneShellProps) {
  return (
    <section
      aria-label="Weather scene shell"
      className="scene-shell"
      data-weather-state={weatherState}
    >
      <div className="scene-cloud" />
      <div className="scene-cloud scene-cloud--back" />
      <div className="scene-stage">
        <div className="scene-glow" />
        <div className="scene-platform" />
        <div className="scene-skyline">
          <div className="scene-building scene-building--a" />
          <div className="scene-building scene-building--b" />
          <div className="scene-building scene-building--c" />
          <div className="scene-building scene-building--d" />
          <div className="scene-building scene-building--e" />
        </div>
      </div>
    </section>
  );
}
