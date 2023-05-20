import type { Line } from "./data/lines";
import type { Station } from "./data/stations";

// Super simple heuristic to stringify stations for firebase
export function firebaseNameForStation(station: Station): string {
  const stationNameSuffix = station.lines
    .map((line: Line) => `${line.name}${line.express ? "Exp" : ""}`)
    .join(",");

  return `${station.name} (${stationNameSuffix})`;
}
