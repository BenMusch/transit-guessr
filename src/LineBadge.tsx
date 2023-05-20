import type { Line } from "./data/lines";
import { BACKGROUND_COLOR_BY_TRUNK_LINE } from "./data/lines";
import "./LineBadge.css";

export function LineBadge(props: {
  line: Line;
  small?: boolean;
  medium?: boolean;
  greyscale?: boolean;
}) {
  const { line, small, medium, greyscale } = props;
  const classes = ["station-line"];
  if (small) {
    classes.push("station-line-small");
  }
  if (medium) {
    classes.push("station-line-medium");
  }
  if (greyscale) {
    classes.push("station-line-greyscale");
  }
  if (line.express) {
    classes.push("express");
  } else {
    classes.push("local");
  }
  return (
    <div
      style={{
        backgroundColor: greyscale
          ? "#64748b"
          : BACKGROUND_COLOR_BY_TRUNK_LINE[line.trunkLine],
      }}
      className={classes.join(" ")}
    >
      <span className="station-line-name">{line.name}</span>
    </div>
  );
}
