import type { WeatherMetrics, WeatherState } from "./weather-types";

export function deriveWeatherState(metrics: WeatherMetrics): WeatherState {
  const { snowpack, precipitation, reservoir } = metrics;

  if (reservoir >= 85 && precipitation >= 110) {
    return "flood";
  }

  if (snowpack >= 120 && precipitation >= 90) {
    return "snow";
  }

  if (snowpack >= 90 && precipitation >= 110 && reservoir >= 50 && reservoir < 85) {
    return "hail";
  }

  if (precipitation >= 110) {
    return "rain";
  }

  if (precipitation < 70 && reservoir < 50) {
    return "drought";
  }

  if (precipitation < 90 && reservoir >= 70 && snowpack < 70) {
    return "sun";
  }

  if (precipitation >= 90 && precipitation <= 110 && snowpack < 90) {
    return "clear";
  }

  return "overcast";
}

export function describeWeatherState(state: WeatherState): string {
  switch (state) {
    case "flood":
      return "Flood conditions";
    case "snow":
      return "Snow-heavy season";
    case "hail":
      return "Cold storm front";
    case "rain":
      return "Wet weather cycle";
    case "drought":
      return "Drought pressure";
    case "sun":
      return "Bright, dry weather";
    case "clear":
      return "Clear skies";
    case "overcast":
    default:
      return "Layered cloud cover";
  }
}
