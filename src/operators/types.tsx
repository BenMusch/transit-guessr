import type { ReactNode } from "react";

export enum Operator {
  MTA = "mta",
  MBTA = "mbta",
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
  initialMapState: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  hasAnalysisPage: boolean;
  stations: IStation<TrunkLine, LineNameT>[];
  lines: ILine<TrunkLine, LineNameT>[];
  linesByTrunkLine: { [key in TrunkLine]: ILine<TrunkLine, LineNameT>[] };
  getColor: (t: TrunkLine) => string;
  renderStationHeading: (s: IStation<TrunkLine, LineNameT>) => ReactNode;
  uniqueNameForStation: (s: IStation<TrunkLine, LineNameT>) => string;
  renderLines: (
    l: ILine<TrunkLine, LineNameT>[],
    p: { small?: boolean }
  ) => ReactNode;
  renderLine: (
    l: ILine<TrunkLine, LineNameT>,
    p: { greyscale?: boolean; medium?: boolean; small?: boolean }
  ) => ReactNode;
}
