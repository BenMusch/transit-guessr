import { OperatorConfiguration } from "../types";
import { MbtaTrunkLine, MbtaLineName } from "./types";
import type { MbtaStation, MbtaLine } from "./types";
import { stations, lines, linesByTrunkLine } from "./data";
import { MbtaStationHeader } from "../../operator_components/mbta/MbtaStationHeader";

const config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName> = {
  stations,
  lines: Object.values(lines),
  linesByTrunkLine: linesByTrunkLine as { [k in MbtaTrunkLine]: MbtaLine[] },
  initialMapState: {
    longitude: -71.0589,
    latitude: 42.3601,
    zoom: 10,
  },
  getColor: (t: MbtaTrunkLine) => {
    return "foo";
  },

  renderStationHeading: (station: MbtaStation) => {
    return <MbtaStationHeader station={station}/>;
  },

  renderLine: (l, props) => {
    return "Line!";
  },

  renderLines: (l, props) => {
    return "Line!";
  },
};

export default config;
