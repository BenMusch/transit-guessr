import React from "react";
import {
  CtaStation,
  CtaLineName,
  CtaTrunkLine,
} from "../../operators/cta/types";
import type { OperatorConfiguration } from "../../operators/types";
import "./CtaStationHeader.css";

function sortOrder(line: CtaTrunkLine) {
  switch (line) {
    case CtaTrunkLine.BLUE:
      return 0;
    case CtaTrunkLine.RED:
      return 1;
    case CtaTrunkLine.YELLOW:
      return 2;
    case CtaTrunkLine.ORANGE:
      return 3;
    case CtaTrunkLine.GREEN:
      return 4;
    case CtaTrunkLine.PURPLE:
      return 5;
    case CtaTrunkLine.PINK:
      return 6;
    case CtaTrunkLine.BROWN:
      return 7;
  }
}

function borderPercentage(lineCount: number): number {
  if (lineCount === 1) {
    return 0;
  } else if (lineCount < 3) {
    return 10;
  } else if (lineCount < 5) {
    return 12.5;
  } else {
    return 15;
  }
}

export function CtaStationHeader(props: {
  station: CtaStation;
  config: OperatorConfiguration<CtaTrunkLine, CtaLineName>;
}) {
  const { station, config } = props;
  let whiteLine: JSX.Element | null = null;
  const lines = station.lines;
  const borderHeightPercentage = borderPercentage(lines.length);
  const colorHeightPercentage = 100 - borderHeightPercentage;
  const disambiguation = station.disambiguation ?? null;

  if (lines.length > 1) {
    const height = `${(1 / (lines.length - 1)) * borderHeightPercentage}%`;
    console.log();
    whiteLine = (
      <div
        className="station-heading-cta-line-border"
        style={{
          backgroundColor: "#e2e8f0",
          height,
        }}
      ></div>
    );
  }

  const linesBg = lines
    .map((line, i) => {
      const colorLine = (
        <div
          className={`station-heading-cta-line station-heading-cta-line-${lines.length}`}
          style={{
            backgroundColor: config.getColor(line.trunkLine),
            height: `${(1 / lines.length) * colorHeightPercentage}%`,
          }}
        ></div>
      );

      if (i !== lines.length - 1) {
        return [colorLine, whiteLine];
      } else {
        return [colorLine];
      }
    })
    .flat();
  let stationTextContent;
  if (disambiguation !== null) {
    stationTextContent = (
      <div className="station-name-ambiguous-container cta">
        <h1 className="station-name-ambiguous cta">{station.name}</h1>
        <h3 className="station-name-disambiguation cta">{disambiguation}</h3>
      </div>
    );
  } else {
    stationTextContent = <h1 className="station-name cta">{station.name}</h1>;
  }
  return (
    <div className="station-heading cta">
      <div className="station-heading-side">{linesBg}</div>
      <div className="cta station-heading-center">{stationTextContent}</div>
      <div className="station-heading-side">{linesBg}</div>
    </div>
  );
}
