import { OperatorConfiguration } from "../types";
import { MbtaTrunkLine, MbtaLineName } from "./types";
import type { MbtaStation, MbtaLine } from "./types";
import { stationGuessData, stations, lines, linesByTrunkLine } from "./data";
import { MbtaStationHeader } from "../../operator_components/mbta/MbtaStationHeader";

class MbtaConfig implements OperatorConfiguration<MbtaTrunkLine, MbtaLineName> {
  stations = stations;
  name = "MBTA";
  domain = "mbtaguessr.com";
  zeroPointDistanceInMeters = 15000;
  lines = Object.values(lines);
  linesByTrunkLine = linesByTrunkLine as { [k in MbtaTrunkLine]: MbtaLine[] };
  hasAnalysisPage = true;
  initialMapState = {
    longitude: -71.0593,
    latitude: 42.35,
    zoom: 10,
  };
  stationGuessData = stationGuessData;

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

  shortNameForStation(station: MbtaStation) {
    return station.name;
  }

  uniqueNameForStation(station: MbtaStation) {
    return station.name;
  }

  renderStationHeading(station: MbtaStation) {
    return <MbtaStationHeader station={station} config={this} />;
  }

  renderLine(
    l: MbtaLine,
    props: { greyscale?: boolean; medium?: boolean; small?: boolean }
  ) {
    // TODO: Implement for analysis pages
    return l.line;
  }

  renderLines(ls: MbtaLine[], props: { small?: boolean }) {
    // TODO: Implement for analysis pages
    return ls.map((l) => l.line).join(", ");
  }
}

const config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName> =
  new MbtaConfig();

export default config;
