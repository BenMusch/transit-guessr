import React from "react";
import type { MtaLine } from "../../operators/mta/types";
import { MtaLineBadge } from "./MtaLineBadge";
import "./MtaLinesRow.css";

export function MtaLinesRow(props: { lines: MtaLine[]; small?: boolean }) {
  return (
    <div
      className={`station-lines${props.small ? " station-lines-small" : ""}`}
    >
      {props.lines.map((line, i) => {
        return <MtaLineBadge key={i} line={line} small={props.small} />;
      })}
    </div>
  );
}
