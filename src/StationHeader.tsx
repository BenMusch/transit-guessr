import React from "react";
import type { Station } from "./data/stations";
import { LinesRow } from "./LinesRow";
import "./StationHeader.css";

export function StationHeader(props: { station: Station }) {
  const { station } = props;
  return (
    <div className="station-heading">
      <h1 className="station-name">{station.name}</h1>
      <LinesRow lines={station.lines} />
    </div>
  );
}
