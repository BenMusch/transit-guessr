import { Operator, OperatorConfiguration, ILine, IStation } from "./types";
import mtaConfig from "./mta/config";
import mbtaConfig from "./mbta/config";
import { MbtaLineName, MbtaTrunkLine } from "./mbta/types";
import { MtaLineName, MtaTrunkLine } from "./mta/types";

export type AnalyzableConfig = typeof mtaConfig;
export type AnalyzableTrunkLine = keyof AnalyzableConfig["linesByTrunkLine"];
export type AnalyzableLine = AnalyzableConfig["lines"][number];
export type AnalyzableStation = AnalyzableConfig["stations"][number];

const configByOperator = {
  [Operator.MTA]: mtaConfig,
  [Operator.MBTA]: mbtaConfig,
};

export default configByOperator;
