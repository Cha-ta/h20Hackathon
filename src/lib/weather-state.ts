import type { WeatherMetrics, WeatherState } from "./weather-types";

export function deriveWeatherState(metrics: WeatherMetrics): WeatherState {
  const { snowpack, precipitation, reservoir } = metrics;

  // Flood: very high reservoir + high precip
  if (reservoir >= 90 && precipitation >= 110) {
    return "flood";
  }

  // Snow: high snowpack + decent precip
  if (snowpack >= 120 && precipitation >= 90) {
    return "snow";
  }

  // Hail: high snowpack + high precip, mid reservoir
  if (snowpack >= 90 && precipitation >= 110 && reservoir >= 70 && reservoir < 90) {
    return "hail";
  }

  // Rain: high precip
  if (precipitation >= 110) {
    return "rain";
  }

  // Drought: low precip + low-ish reservoir (relaxed threshold)
  if (precipitation < 70 && reservoir < 70) {
    return "drought";
  }

  // Sun: low precip, decent reservoir, low snowpack
  if (precipitation < 90 && reservoir >= 70 && snowpack < 70) {
    return "sun";
  }

  // Clear: moderate everything
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
