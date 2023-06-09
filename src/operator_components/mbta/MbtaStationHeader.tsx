import React from "react";
import type {
  MbtaStation,
  MbtaLineName,
  MbtaTrunkLine,
} from "../../operators/mbta/types";
import type { OperatorConfiguration } from "../../operators/types";
import { MbtaLinesRow } from "./MbtaLinesRow";
import "./MbtaStationHeader.css";

export function MbtaStationHeader(props: {
  station: MbtaStation;
  config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName>;
}) {
  const { station, config } = props;
  return (
    <div className="station-heading mbta">
      <h1 className="station-name mbta">{station.name}</h1>
      <MbtaLinesRow config={config} lines={station.lines} />
    </div>
  );
}
