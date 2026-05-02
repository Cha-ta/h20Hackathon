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
      <div className="scene-sun" />
      <div className="scene-cloud scene-cloud--front" />
      <div className="scene-cloud scene-cloud--back" />

      <div className="scene-stage">
        <div className="scene-base">
          <div className="scene-base__top" />
          <div className="scene-base__side scene-base__side--left" />
          <div className="scene-base__side scene-base__side--right" />
        </div>

        <div className="scene-city">
          {/* Tall clock tower (Big Ben style) */}
          <div className="building building--tower">
            <div className="building__roof building__roof--spire" />
            <div className="building__face building__face--front">
              <div className="building__clock" />
              <div className="building__windows building__windows--tower" />
            </div>
            <div className="building__face building__face--side" />
          </div>

          {/* Wide main building */}
          <div className="building building--main">
            <div className="building__roof" />
            <div className="building__face building__face--front">
              <div className="building__windows building__windows--grid" />
            </div>
            <div className="building__face building__face--side" />
          </div>

          {/* Short building front-left */}
          <div className="building building--short">
            <div className="building__roof" />
            <div className="building__face building__face--front">
              <div className="building__windows building__windows--small" />
            </div>
            <div className="building__face building__face--side" />
          </div>

          {/* Bridge tower right */}
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
      </div>
    </section>
  );
}
