import { OperatorConfiguration } from "../types";
import { MbtaTrunkLine, MbtaLineName } from "./types";
import type { MbtaStation } from "./types";
import { stations, lines, linesByTrunkLine } from "./data";

const config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName> = {
  stations,
  lines: Object.values(lines),
  linesByTrunkLine,
  getColor: (t: MbtaTrunkLine) => {
    return "foo";
  },

  renderStationHeading: (station: MbtaStation) => {
    return "Heading!";
  },

  renderLine: (l, props) => {
    return "Line!";
  },

  renderLines: (l, props) => {
    return "Line!";
  },
};

export default config;
