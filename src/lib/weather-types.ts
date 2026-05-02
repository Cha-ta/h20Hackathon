export type RawWeatherRecord = {
  Date: string;
  Snowpack: string;
  Precip: string;
  Reservoir: string;
};

export type WeatherState =
  | "flood"
  | "snow"
  | "hail"
  | "rain"
  | "overcast"
  | "clear"
  | "sun"
  | "drought";

export type WeatherMetrics = {
  snowpack: number;
  precipitation: number;
  reservoir: number;
};

export type NormalizedWeatherRecord = {
  id: string;
  rawDate: string;
  date: Date;
  label: string;
  metrics: WeatherMetrics;
  state: WeatherState;
};
