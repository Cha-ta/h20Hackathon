import { readFile } from "node:fs/promises";
import path from "node:path";

import { deriveWeatherState } from "./weather-state";
import type { NormalizedWeatherRecord, RawWeatherRecord, WeatherMetrics } from "./weather-types";

const MONTH_LABEL = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function parseDate(rawDate: string) {
  const [month, day, shortYear] = rawDate.split("/").map(Number);
  const year = 2000 + shortYear;

  return new Date(Date.UTC(year, month - 1, day));
}

function toMetrics(record: RawWeatherRecord): WeatherMetrics {
  return {
    snowpack: Number(record.Snowpack),
    precipitation: Number(record.Precip),
    reservoir: Number(record.Reservoir),
  };
}

export async function readRawWeatherRecords(): Promise<RawWeatherRecord[]> {
  const filePath = path.join(process.cwd(), "json.json");
  const fileContents = await readFile(filePath, "utf8");
  return JSON.parse(fileContents) as RawWeatherRecord[];
}

export function normalizeWeatherRecord(record: RawWeatherRecord): NormalizedWeatherRecord {
  const date = parseDate(record.Date);
  const metrics = toMetrics(record);

  return {
    id: `${date.toISOString()}-${record.Date}`,
    rawDate: record.Date,
    date,
    label: MONTH_LABEL.format(date),
    metrics,
    state: deriveWeatherState(metrics),
  };
}

export async function loadWeatherTimeline(): Promise<NormalizedWeatherRecord[]> {
  const records = await readRawWeatherRecords();

  return records
    .map(normalizeWeatherRecord)
    .sort((left, right) => left.date.getTime() - right.date.getTime());
}

export async function getDefaultWeatherRecord(): Promise<NormalizedWeatherRecord> {
  const timeline = await loadWeatherTimeline();
  const firstRecord = timeline[0];

  if (!firstRecord) {
    throw new Error("Weather timeline is empty.");
  }

  return firstRecord;
}
