import type { Station, Line } from "./operators/config";

// Super simple heuristic to stringify stations for firebase
export function firebaseNameForStation(station: Station): string {
  const lines = station.lines;
  const stationNameSuffix = lines
    .map(
      (line: Line) =>
        `${line.displayName}${line.line.includes("Express") ? "Exp" : ""}`
    )
    .join(",");

  return `${station.name} (${stationNameSuffix})`;
}
