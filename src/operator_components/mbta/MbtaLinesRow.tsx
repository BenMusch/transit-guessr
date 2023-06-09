import React from "react";
import type { MbtaLine } from "../../operators/mbta/types";
//import "./MbtaLinesRow.css";

export function MbtaLinesRow(props: { lines: MbtaLine[]; small?: boolean }) {
    console.log(props)
    return (
    <div
      className={`station-lines${props.small ? " station-lines-small" : ""}`}
    >
      {props.lines.map((line, i) => {
        return <div>{line.displayName}</div>;
      })}
    </div>
  );
}