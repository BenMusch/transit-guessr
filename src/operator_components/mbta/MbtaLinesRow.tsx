import React from "react";
import type {
  MbtaLine,
  MbtaLineName,
  MbtaTrunkLine,
} from "../../operators/mbta/types";
import { MbtaLineBadge } from "./MbtaLineBadge";
import "./MbtaLinesRow.css";
import type { OperatorConfiguration } from "../../operators/types";



export function MbtaLinesRow(props: {
  config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName>;
  lines: MbtaLine[];
  small?: boolean;
}) {
  return (
    <div
      className={`mbta station-lines${
        props.small ? " station-lines-small" : ""
      }`}
    >
      {props.lines.map((line, i) => {
        return <MbtaLineBadge key={i} line={line} config={props.config} />;
      })}
    </div>
  );
}

