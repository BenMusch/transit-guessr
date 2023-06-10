import type { MtaLine } from "../../operators/mta/types";
import { MtaTrunkLine } from "../../operators/mta/types";
import "./MtaLineBadge.css";

// TODO use config.colorsByTrunkLine
const BACKGROUND_COLOR_BY_TRUNK_LINE: { [l in MtaTrunkLine]: string } = {
  [MtaTrunkLine.EIGHTH_AVENUE_IND]: "#0039a6",
  [MtaTrunkLine.SIXTH_AVENUE_IND]: "#ff6319",
  [MtaTrunkLine.CROSSTOWN_IND]: "#6cbe45",
  [MtaTrunkLine.CANARSIE_BMT]: "#a7a9ac",
  [MtaTrunkLine.NASSAU_BMT]: "#996633",
  [MtaTrunkLine.BROADWAY_BMT]: "#fccc0a",
  [MtaTrunkLine.BROADWAY_IRT]: "#ee352e",
  [MtaTrunkLine.LEXINGTON_IRT]: "#00933c",
  [MtaTrunkLine.FLUSHING_IRT]: "#b933ad",
  [MtaTrunkLine.SHUTTLES]: "#808183",
};

const TEXT_COLOR_BY_TRUNK_LINE: { [l in MtaTrunkLine]: string } = {
  [MtaTrunkLine.EIGHTH_AVENUE_IND]: "#ffffff",
  [MtaTrunkLine.SIXTH_AVENUE_IND]: "#ffffff",
  [MtaTrunkLine.CROSSTOWN_IND]: "#ffffff",
  [MtaTrunkLine.CANARSIE_BMT]: "#ffffff",
  [MtaTrunkLine.NASSAU_BMT]: "#ffffff",
  [MtaTrunkLine.BROADWAY_BMT]: "#000000",
  [MtaTrunkLine.BROADWAY_IRT]: "#ffffff",
  [MtaTrunkLine.LEXINGTON_IRT]: "#ffffff",
  [MtaTrunkLine.FLUSHING_IRT]: "#ffffff",
  [MtaTrunkLine.SHUTTLES]: "#ffffff",
};

export function MtaLineBadge(props: {
  line: MtaLine;
  small?: boolean;
  medium?: boolean;
  greyscale?: boolean;
}) {
  const { line, small, medium, greyscale } = props;
  const classes = ["station-line", "mta"];
  if (small) {
    classes.push("station-line-small");
  }
  if (medium) {
    classes.push("station-line-medium");
  }
  if (greyscale) {
    classes.push("station-line-greyscale");
  }
  if (line.line.includes("Express")) {
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
        color: greyscale ? "#cbd5e1" : TEXT_COLOR_BY_TRUNK_LINE[line.trunkLine],
      }}
      className={classes.join(" ")}
    >
      <span className="station-line-name">{line.displayName}</span>
    </div>
  );
}
