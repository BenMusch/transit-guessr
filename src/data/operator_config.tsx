import mtaOperatorConfig from "./mta";

export enum Operator {
  MTA = "mta",
}

// long/lat pair
export type Coordinate = [number, number];

export interface ILine<TrunkILine extends string, LineNameT extends string> {
  line: LineNameT;
  displayName: string;
  trunkLine: TrunkILine;
}

export interface IStation<TrunkILine extends string, LineNameT extends string> {
  name: string;
  lines: ILine<TrunkILine, LineNameT>[];
  coordinates: Coordinate[];
}

export interface OperatorConfiguration<
  TrunkILine extends string,
  LineNameT extends string
> {
  stations: IStation<TrunkILine, LineNameT>[];
  lines: ILine<TrunkILine, LineNameT>[];
  linesbyTrunkLine: { [key in TrunkILine]: ILine<TrunkILine, LineNameT>[] };
}

export const CONFIG_BY_OPERATOR = {
  [Operator.MTA]: mtaOperatorConfig,
};

export type PlayableOperator = keyof typeof CONFIG_BY_OPERATOR;
export type PlayableConfig = typeof CONFIG_BY_OPERATOR[PlayableOperator];

export type Line = PlayableConfig["stations"][number];
export type Station = PlayableConfig["stations"][number];
