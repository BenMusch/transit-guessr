import { OperatorConfiguration } from "../types";
import { MtaTrunkLine, MtaLine, MtaLineName, MtaStation } from "./types";
import { stations, lines, linesByTrunkLine, stationGuessData } from "./data";
import { MtaStationHeader } from "../../operator_components/mta/MtaStationHeader";
import { MtaLineBadge } from "../../operator_components/mta/MtaLineBadge";
import { MtaLinesRow } from "../../operator_components/mta/MtaLinesRow";

const config: OperatorConfiguration<MtaTrunkLine, MtaLineName> = {
  stations,
  name: "MTA",
  domain: "nycguessr.com",
  hasAnalysisPage: true,
  zeroPointDistanceInMeters: 20000,
  lines: Object.values(lines),
  linesByTrunkLine,
  initialMapState: {
    longitude: -73.875,
    latitude: 40.73065,
    zoom: 9.25,
  },
  stationGuessData,
  getColor: (t: MtaTrunkLine) => {
    return {
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
    }[t];
  },

  shortNameForStation: (station: MtaStation) => {
    return station.name.split("/")[0];
  },

  uniqueNameForStation: (station: MtaStation) => {
    const lines = station.lines;
    const stationNameSuffix = lines
      .map(
        (line: MtaLine) =>
          `${line.displayName}${line.line.includes("Express") ? "Exp" : ""}`
      )
      .join(",");

    return `${station.name} (${stationNameSuffix})`;
  },

  renderStationHeading: (station: MtaStation) => {
    return <MtaStationHeader station={station} />;
  },
  renderLine: (l, props) => {
    return <MtaLineBadge line={l} {...props} />;
  },
  renderLines: (l, props) => {
    return <MtaLinesRow lines={l} small={props.small} />;
  },
};

export default config;
