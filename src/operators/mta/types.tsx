import { IStation, ILine } from "../types";

// https://en.wikipedia.org/wiki/New_York_City_Subway_nomenclature
export enum MtaTrunkLine {
  // A C E
  EIGHTH_AVENUE_IND = "eightInd",
  // B D F M
  SIXTH_AVENUE_IND = "sixthInd",
  // G
  CROSSTOWN_IND = "crossInd",
  // L
  CANARSIE_BMT = "canarsie",
  // J Z
  NASSAU_BMT = "nassau",
  // N Q R W
  BROADWAY_BMT = "bwayBmt",
  // 1 2 3
  BROADWAY_IRT = "bwayIrt",
  // 4 5 6
  LEXINGTON_IRT = "lex",
  // 7
  FLUSHING_IRT = "flushing",
  // S
  SHUTTLES = "s",
}

export enum MtaLineName {
  A = "A",
  C = "C",
  E = "E",
  B = "B",
  D = "D",
  F = "F",
  F_EXPRESS = "F Express",
  M = "M",
  G = "G",
  L = "L",
  J = "J",
  Z = "Z",
  N = "N",
  Q = "Q",
  R = "R",
  W = "W",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SIX_EXPRESS = "6 Express",
  SEVEN = "7",
  SEVEN_EXPRESS = "7 Express",
  S = "S",
}

export type MtaLine = ILine<MtaTrunkLine, MtaLineName>;
export type MtaStation = IStation<MtaTrunkLine, MtaLineName>;
