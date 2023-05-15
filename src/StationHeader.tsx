import React from "react";
import type { Station } from "./data/stations";

export function StationHeader(props: { station: Station }) {
  const { station } = props;
  return (
    <div className="station-heading">
      <h1 className="station-name">{station.name}</h1>
      <div className="station-lines">
        {station.lines.map((line, i) => {
          return (
            <div
              key={i}
              className={`station-line ${line.lineGroup} ${
                line.express ? "express" : "local"
              }`}
            >
              <span className="station-line-name">{line.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
