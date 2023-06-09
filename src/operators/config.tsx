import { Operator, OperatorConfiguration } from "./types";
import mtaConfig from "./mta/config";
import mbtaConfig from "./mbta/config";

// Dynamic types which will adjust to only include valid generic params
export type PlayableConfig = typeof mtaConfig | typeof mbtaConfig;
export type TrunkLine = keyof PlayableConfig["linesByTrunkLine"];
export type Line = PlayableConfig["lines"][number];
export type Station = PlayableConfig["stations"][number];
export type AnalyzableConfig = typeof mtaConfig;

const configByOperator = {
  [Operator.MTA]: mtaConfig,
  [Operator.MBTA]: mbtaConfig,
};

export default configByOperator;
