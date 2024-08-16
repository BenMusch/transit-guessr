import type { ReactNode } from "react";
import { NumberLiteralType } from "typescript";

export enum Operator {
  MTA = "mta",
  MBTA = "mbta",
  CTA = "cta",
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
  disambiguation?: string | null;
}

export interface OperatorConfiguration<
  TrunkLine extends string,
  LineNameT extends string,
> {
  /**
   * Location and zoom for the initial location of the operator's map
   */
  initialMapState: {
    longitude: number;
    latitude: number;
    zoom: number;
  };

  zoomConfigurations?: {
    longitude: number;
    latitude: number;
    zoom: number;
    label: string;
  }[];

  operator: Operator;

  /**
   * Human-facing name for the system (e.g. MBTA for Boston)
   */
  operatorName: string;

  /**
   * Domain hosting the app
   */
  domain: string;

  /**
   * Name for this app (e.g. NYCGuessr, MBTAGuessr, etc)
   */
  appName: string;

  /**
   * True if the /data and /map routes exist for this operator
   */
  hasAnalysisPage: boolean;
  /**
   * For scoring calculations, the distance from a station in order for you to
   * get 0 points on the guess. This is configured per-city because otherwise
   * smaller cities have easier scores
   */
  zeroPointDistanceInMeters: number;
  stations: IStation<TrunkLine, LineNameT>[];
  lines: ILine<TrunkLine, LineNameT>[];
  linesByTrunkLine: { [key in TrunkLine]: ILine<TrunkLine, LineNameT>[] };
  stationGuessData: { station: string; avgScore: number }[] | undefined;
  /**
   * Trunk lines usually have a specific color associated with them
   */
  getColor: (t: TrunkLine) => string;
  renderStationHeading: (s: IStation<TrunkLine, LineNameT>) => ReactNode;
  /**
   * Used to store the guesses for a station in firebase for analysis
   */
  uniqueNameForStation: (s: IStation<TrunkLine, LineNameT>) => string;
  /**
   * Used to render the station name in the 'Share' copy/paste feature
   */
  shortNameForStation: (s: IStation<TrunkLine, LineNameT>) => string;
  /**
   * Used when rendering multiple lines inline with a station name in the /data
   * view and /map view
   */
  renderLinesForDataView: (l: ILine<TrunkLine, LineNameT>[]) => ReactNode;
  /**
   * Used when rendering multiple lines inline with a station name in the /data
   * view
   *
   * TODO: can this be replaced with just renderLines ?
   */
  renderLineForAnalysisMapView: (
    l: ILine<TrunkLine, LineNameT>,
    p: { greyscale?: boolean },
  ) => ReactNode;
}
