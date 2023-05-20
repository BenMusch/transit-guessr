import React from "react";
import type { Line } from "./data/lines";
import { LineBadge } from "./LineBadge";
import "./LinesRow.css";

export function LinesRow(props: { lines: Line[]; small?: boolean }) {
  return (
    <div
      className={`station-lines${props.small ? " station-lines-small" : ""}`}
    >
      {props.lines.map((line, i) => {
        return <LineBadge key={i} line={line} small={props.small} />;
      })}
    </div>
  );
}
