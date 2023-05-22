import { Operator } from "./types";
import mtaConfig from "./mta/config";

// Dynamic types which will adjust to only include valid generic params
export type PlayableConfig = typeof mtaConfig;
export type TrunkLine = keyof PlayableConfig["linesByTrunkLine"];
export type Line = PlayableConfig["lines"][number];
export type Station = PlayableConfig["stations"][number];

const configByOperator = {
  [Operator.MTA]: mtaConfig,
};

export default configByOperator;
