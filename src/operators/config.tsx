import { Operator } from "./types";
import mtaConfig from "./mta/config";
import mbtaConfig from "./mbta/config";
import ctaConfig from "./cta/config";

export type PlayableConfig =
  | typeof mtaConfig
  | typeof mbtaConfig
  | typeof ctaConfig;
export type PlayableStation =
  | (typeof ctaConfig)["stations"][number]
  | (typeof mtaConfig)["stations"][number]
  | (typeof mbtaConfig)["stations"][number];

// TODO: types ????
export type AnalyzableConfig = typeof mtaConfig;
export type AnalyzableTrunkLine = keyof AnalyzableConfig["linesByTrunkLine"];
export type AnalyzableLine = AnalyzableConfig["lines"][number];
export type AnalyzableStation = AnalyzableConfig["stations"][number];

const configByOperator = {
  [Operator.MTA]: mtaConfig,
  [Operator.MBTA]: mbtaConfig,
  [Operator.CTA]: ctaConfig,
};

export default configByOperator;
