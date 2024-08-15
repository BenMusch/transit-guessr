import React from "react";
import type {
  CtaStation,
  CtaLineName,
  CtaTrunkLine,
} from "../../operators/cta/types";
import type { OperatorConfiguration } from "../../operators/types";
import "./CtaStationHeader.css";

export function CtaStationHeader(props: {
  station: CtaStation;
  config: OperatorConfiguration<CtaTrunkLine, CtaLineName>;
}) {
  const { station, config } = props;
  const linesBg = station.lines.map((line) => {
    return (
      <div
        className={`station-heading-cta-line station-heading-cta-line-${station.lines.length}`}
        style={{
          backgroundColor: config.getColor(line.trunkLine),
          height: `${(1 / station.lines.length) * 100}%`,
        }}
      ></div>
    );
  });
  return (
    <div className="station-heading cta">
      <div className="station-heading-side">{linesBg}</div>
      <div className="cta station-heading-center">
        <h1 className="station-name cta">{station.name}</h1>
      </div>
      <div className="station-heading-side">{linesBg}</div>
    </div>
  );
}
