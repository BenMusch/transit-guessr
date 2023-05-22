import type { ReactNode } from "react";

export enum Operator {
  MTA = "mta",
}

// long/lat pair
export type Coordinate = [number, number];

export interface ILine<TrunkLine extends string, LineNameT extends string> {
  line: LineNameT;
  displayName: string;
  trunkLine: TrunkLine;
}

export interface IStation<TrunkLine extends string, LineNameT extends string> {
  name: string;
  lines: ILine<TrunkLine, LineNameT>[];
  coordinates: Coordinate[];
}

export interface OperatorConfiguration<
  TrunkLine extends string,
  LineNameT extends string
> {
  stations: IStation<TrunkLine, LineNameT>[];
  lines: ILine<TrunkLine, LineNameT>[];
  linesByTrunkLine: { [key in TrunkLine]: ILine<TrunkLine, LineNameT>[] };
  getColor: (t: TrunkLine) => string;
  renderStationHeading: (s: IStation<TrunkLine, LineNameT>) => ReactNode;
  renderLines: (
    l: ILine<TrunkLine, LineNameT>[],
    p: { small?: boolean }
  ) => ReactNode;
  renderLine: (
    l: ILine<TrunkLine, LineNameT>,
    p: { greyscale?: boolean; medium?: boolean; small?: boolean }
  ) => ReactNode;
}
