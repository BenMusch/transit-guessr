import { OperatorConfiguration, ILine, IStation } from "../types";
import { MbtaTrunkLine, MbtaLineName } from "./types";
import type { MbtaStation, MbtaLine } from "./types";
import { stations, lines, linesByTrunkLine } from "./data";
import { MbtaStationHeader } from "../../operator_components/mbta/MbtaStationHeader";

class MbtaConfig implements OperatorConfiguration<MbtaTrunkLine, MbtaLineName> {
  stations = stations;
  lines = Object.values(lines);
  linesByTrunkLine = linesByTrunkLine as { [k in MbtaTrunkLine]: MbtaLine[] };
  initialMapState = {
    longitude: -71.0589,
    latitude: 42.3601,
    zoom: 10,
  };

  getColor(t: MbtaTrunkLine) {
    switch (t) {
      case MbtaTrunkLine.BLUE:
        return "#3366cc";
      case MbtaTrunkLine.GREEN:
        return "#00843D";
      case MbtaTrunkLine.ORANGE:
        return "#ED8B00";
      case MbtaTrunkLine.RED:
        return "#DA291C";
      case MbtaTrunkLine.SILVER:
        return "#7C878E";
    }
  }

  renderStationHeading(station: MbtaStation) {
    return <MbtaStationHeader station={station} config={this} />;
  }

  renderLine(
    l: MbtaLine,
    props: { greyscale?: boolean; medium?: boolean; small?: boolean }
  ) {
    return "Line!";
  }

  renderLines(l: MbtaLine[], props: { small?: boolean }) {
    return "Line!";
  }
}

const config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName> =
  new MbtaConfig();

export default config;
