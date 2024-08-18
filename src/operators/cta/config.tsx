import { CtaStationHeader } from "../../operator_components/cta/CtaStationHeader";
import { Operator, OperatorConfiguration } from "../types";
import { lines as linesData, stations as stationsData } from "./data";
import { CtaLine, CtaLineName, CtaStation, CtaTrunkLine } from "./types";

class CtaConfig implements OperatorConfiguration<CtaTrunkLine, CtaLineName> {
  operator = Operator.CTA;
  operatorName = "CTA";
  stations = stationsData;
  domain = "chicagoguessr.com";
  appName = "ChicagoGuessr";
  zeroPointDistanceInMeters = 20000;
  lines = Object.values(linesData);
  linesByTrunkLine = {
    [CtaTrunkLine.BLUE]: [linesData[CtaLineName.BLUE]],
    [CtaTrunkLine.BROWN]: [linesData[CtaLineName.BROWN]],
    [CtaTrunkLine.GREEN]: [linesData[CtaLineName.GREEN]],
    [CtaTrunkLine.ORANGE]: [linesData[CtaLineName.ORANGE]],
    [CtaTrunkLine.PINK]: [linesData[CtaLineName.PINK]],
    [CtaTrunkLine.PURPLE]: [linesData[CtaLineName.PURPLE]],
    [CtaTrunkLine.RED]: [linesData[CtaLineName.RED]],
    [CtaTrunkLine.YELLOW]: [linesData[CtaLineName.YELLOW]],
  } as { [k in CtaTrunkLine]: CtaLine[] };
  hasAnalysisPage = true;
  initialMapState = {
    longitude: -87.69,
    latitude: 41.8987,
    zoom: 9.2,
  };
  stationGuessData = [];
  zoomConfigurations = [
    {
      ...this.initialMapState,
      label: "🗺️ Zoom to Full Map️",
    },
    {
      latitude: 41.881729,
      longitude: -87.627991,
      zoom: 13,
      label: "🔁 Zoom to Loop",
    },
  ];

  getColor(t: CtaTrunkLine) {
    switch (t) {
      case CtaTrunkLine.BLUE:
        return "#00A1DE";
      case CtaTrunkLine.BROWN:
        return "#62361B";
      case CtaTrunkLine.GREEN:
        return "#009B3A";
      case CtaTrunkLine.ORANGE:
        return "#F9461C";
      case CtaTrunkLine.PINK:
        return "#E27EA6";
      case CtaTrunkLine.PURPLE:
        return "#522398";
      case CtaTrunkLine.RED:
        return "#C60C30";
      case CtaTrunkLine.YELLOW:
        return "#F9E300";
    }
  }

  shortNameForStation(s: CtaStation) {
    return s.name;
  }

  // T-29359 Implement this correctly
  uniqueNameForStation(s: CtaStation) {
    return s.name + '_' + (s.disambiguation ?? '') + '_' + s.lines.map(l => l.displayName).join(',');
  }

  renderStationHeading(station: CtaStation) {
    return <CtaStationHeader station={station} config={this} />;
  }

  renderLineForAnalysisMapView(l: CtaLine, props: { greyscale?: boolean }) {
    return l.displayName;
  }

  renderLinesForDataView(ls: CtaLine[]) {
    return ls.map((l) => l.displayName).join(", ");
  }
}

const config: OperatorConfiguration<CtaTrunkLine, CtaLineName> =
  new CtaConfig();
export default config;
