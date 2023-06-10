import type {
  MbtaLine,
  MbtaTrunkLine,
  MbtaLineName,
} from "../../operators/mbta/types";
import type { OperatorConfiguration } from "../../operators/types";
import "./MbtaLineBadge.css";

export function MbtaLineBadge(props: {
  line: MbtaLine;
  config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName>;
  small?: boolean;
  medium?: boolean;
  greyscale?: boolean;
}) {
  const { line, config, small, medium, greyscale } = props;
  const classes = ["mbta", "station-line"];
  if (small) {
    classes.push("station-line-small");
  }
  if (medium) {
    classes.push("station-line-medium");
  }
  if (greyscale) {
    classes.push("station-line-greyscale");
  }
  return (
    <div
      style={{
        backgroundColor: greyscale
          ? "#64748b"
          : config.getColor(line.trunkLine),
        color: greyscale ? "#cbd5e1" : "#e2e8f0",
      }}
      className={classes.join(" ")}
    >
      <span className="station-line-name">{line.displayName}</span>
    </div>
  );
}
