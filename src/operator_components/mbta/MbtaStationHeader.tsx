import React from "react";
import type { MbtaStation } from "../../operators/mbta/types";
import { MbtaLinesRow } from "./MbtaLinesRow";
//import "./MbtaStationHeader.css";

export function MbtaStationHeader(props: { station: MbtaStation }) {
  const { station } = props;
  return (
    <div className="station-heading">
      <h1 className="station-name">{station.name}</h1>
      <MbtaLinesRow lines={station.lines} />
    </div>
  );
}
