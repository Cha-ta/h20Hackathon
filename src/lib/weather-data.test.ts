import { describe, expect, it } from "vitest";

import { deriveWeatherState } from "./weather-state";
import { getDefaultWeatherRecord, loadWeatherTimeline, normalizeWeatherRecord } from "./weather-data";

describe("weather data pipeline", () => {
  it("normalizes a raw record into typed metrics", () => {
    const record = normalizeWeatherRecord({
      Date: "12/1/25",
      Snowpack: "65",
      Precip: "105",
      Reservoir: "72",
    });

    expect(record.metrics).toEqual({
      snowpack: 65,
      precipitation: 105,
      reservoir: 72,
    });
    expect(record.label).toBe("December 2025");
  });

  it("sorts the dataset chronologically", async () => {
    const timeline = await loadWeatherTimeline();

    expect(timeline[0]?.rawDate).toBe("1/1/16");
    expect(timeline.at(-1)?.rawDate).toBe("12/1/25");
  });

  it("selects january 1, 2016 as the default record", async () => {
    const record = await getDefaultWeatherRecord();

    expect(record.rawDate).toBe("1/1/16");
    expect(record.label).toBe("January 2016");
  });

  it("derives expressive weather states from the fixed thresholds", () => {
    expect(
      deriveWeatherState({
        snowpack: 135,
        precipitation: 120,
        reservoir: 92,
      }),
    ).toBe("flood");

    expect(
      deriveWeatherState({
        snowpack: 125,
        precipitation: 95,
        reservoir: 68,
      }),
    ).toBe("snow");

    expect(
      deriveWeatherState({
        snowpack: 40,
        precipitation: 62,
        reservoir: 44,
      }),
    ).toBe("drought");
  });
});
