import type { AnalyzableStation, AnalyzableLine } from "./operators/config";

// Super simple heuristic to stringify stations for firebase
export function firebaseNameForStation(station: AnalyzableStation): string {
  const lines = station.lines;
  const stationNameSuffix = lines
    .map(
      (line: AnalyzableLine) =>
        `${line.displayName}${line.line.includes("Express") ? "Exp" : ""}`
    )
    .join(",");

  return `${station.name} (${stationNameSuffix})`;
}
