import { Operator } from "./types";
import mtaConfig from "./mta/config";
import mbtaConfig from "./mbta/config";

export type PlayableConfig = typeof mtaConfig | typeof mbtaConfig;
export type PlayableStation =
  | typeof mtaConfig["stations"][number]
  | typeof mbtaConfig["stations"][number];

export type AnalyzableConfig = typeof mtaConfig;
export type AnalyzableTrunkLine = keyof AnalyzableConfig["linesByTrunkLine"];
export type AnalyzableLine = AnalyzableConfig["lines"][number];
export type AnalyzableStation = AnalyzableConfig["stations"][number];

const configByOperator = {
  [Operator.MTA]: mtaConfig,
  [Operator.MBTA]: mbtaConfig,
};

export default configByOperator;
