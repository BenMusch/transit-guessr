import type { MbtaLine } from "../../operators/mbta/types";
import { MbtaLineName, MbtaTrunkLine } from "../../operators/mbta/types";
import type { OperatorConfiguration } from "../../operators/types";

const condensedLineDisplayByLine = {
  [MbtaLineName.BLUE]: "BL",
  [MbtaLineName.GREEN_B]: "B",
  [MbtaLineName.GREEN_C]: "C",
  [MbtaLineName.GREEN_D]: "D",
  [MbtaLineName.GREEN_E]: "E",
  [MbtaLineName.RED]: "RL",
  [MbtaLineName.RED_M]: "M",
  [MbtaLineName.ORANGE]: "OL",
};

export function MbtaLineBadgeCondensed(props: {
  config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName>;
  line: MbtaLine;
  greyscale?: boolean;
}) {
  const { line, config, greyscale } = props;
  return (
    <div
      style={{
        backgroundColor: greyscale
          ? "#64748b"
          : config.getColor(line.trunkLine),
        color: greyscale ? "#cbd5e1" : "#e2e8f0",
      }}
      className="mbta station-line"
    >
      <span className="station-line-name">
        {condensedLineDisplayByLine[line.line]}
      </span>
    </div>
  );
}
