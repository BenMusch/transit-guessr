import React from "react";
import type { MtaStation } from "../../operators/mta/types";
import { MtaLinesRow } from "./MtaLinesRow";
import "./MtaStationHeader.css";

export function MtaStationHeader(props: { station: MtaStation }) {
  const { station } = props;
  return (
    <div className="station-heading">
      <h1 className="station-name">{station.name}</h1>
      <MtaLinesRow lines={station.lines} />
    </div>
  );
}
