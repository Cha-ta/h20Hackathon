import React from "react";

import { WeatherAppShell } from "@/components/weather-app-shell";
import { getDefaultWeatherRecord } from "@/lib/weather-data";

export default async function Home() {
  const record = await getDefaultWeatherRecord();

  return <WeatherAppShell record={record} />;
}
