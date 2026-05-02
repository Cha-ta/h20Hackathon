import React from "react";

import { WeatherAppShell } from "@/components/weather-app-shell";
import { loadWeatherTimeline } from "@/lib/weather-data";

export default async function Home() {
  const records = await loadWeatherTimeline();

  return <WeatherAppShell records={records} />;
}
