import { OperatorConfiguration, Operator } from "../types";
import { MbtaTrunkLine, MbtaLineName } from "./types";
import type { MbtaStation, MbtaLine } from "./types";
import { stationGuessData, stations, lines, linesByTrunkLine } from "./data";
import { MbtaStationHeader } from "../../operator_components/mbta/MbtaStationHeader";
import { MbtaLineBadgeCondensed } from "../../operator_components/mbta/MbtaLineBadgeCondensed";

class MbtaConfig implements OperatorConfiguration<MbtaTrunkLine, MbtaLineName> {
  operator = Operator.MBTA;
  stations = stations;
  operatorName = "MBTA";
  domain = "mbtaguessr.com";
  appName = "MBTAGuessr";
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

  renderLineForAnalysisMapView(l: MbtaLine, props: { greyscale?: boolean }) {
    return (
      <MbtaLineBadgeCondensed
        line={l}
        greyscale={props.greyscale}
        config={this}
      />
    );
  }

  renderLinesForDataView(ls: MbtaLine[]) {
    return (
      <div className="mbta station-lines-small">
        {ls.map((l) => {
          return <MbtaLineBadgeCondensed line={l} config={this} />;
        })}
      </div>
    );
  }
}

const config: OperatorConfiguration<MbtaTrunkLine, MbtaLineName> =
  new MbtaConfig();

export default config;
