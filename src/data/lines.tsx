// https://en.wikipedia.org/wiki/New_York_City_Subway_nomenclature
export enum TrunkLine {
  // A C E
  EIGHTH_AVENUE_IND,
  // B D F M
  SIXTH_AVENUE_IND,
  // G
  CROSSTOWN_IND,
  // L
  CANARSIE_BMT,
  // J Z
  NASSAU_BMT,
  // N Q R W
  BROADWAY_BMT,
  // 1 2 3
  BROADWAY_IRT,
  // 4 5 6
  LEXINGTON_IRT,
  // 7
  FLUSHING_IRT,
  // S
  SHUTTLES,
}

export const BACKGROUND_COLOR_BY_TRUNK_LINE: { [l in TrunkLine]: string } = {
  [TrunkLine.EIGHTH_AVENUE_IND]: "#0039a6",
  [TrunkLine.SIXTH_AVENUE_IND]: "#ff6319",
  [TrunkLine.CROSSTOWN_IND]: "#6cbe45",
  [TrunkLine.CANARSIE_BMT]: "#a7a9ac",
  [TrunkLine.NASSAU_BMT]: "#996633",
  [TrunkLine.BROADWAY_BMT]: "#fccc0a",
  [TrunkLine.BROADWAY_IRT]: "#ee352e",
  [TrunkLine.LEXINGTON_IRT]: "#00933c",
  [TrunkLine.FLUSHING_IRT]: "#b933ad",
  [TrunkLine.SHUTTLES]: "#808183",
};

export const LINES = {
  A: {
    name: "A",
    express: false,
    trunkLine: TrunkLine.EIGHTH_AVENUE_IND,
  },
  C: {
    name: "C",
    express: false,
    trunkLine: TrunkLine.EIGHTH_AVENUE_IND,
  },
  E: {
    name: "E",
    express: false,
    trunkLine: TrunkLine.EIGHTH_AVENUE_IND,
  },
  B: {
    name: "B",
    express: false,
    trunkLine: TrunkLine.SIXTH_AVENUE_IND,
  },
  D: {
    name: "D",
    trunkLine: TrunkLine.SIXTH_AVENUE_IND,
    express: false,
  },
  F: {
    name: "F",
    express: false,
    trunkLine: TrunkLine.SIXTH_AVENUE_IND,
  },
  F_EXPRESS: {
    name: "F",
    express: true,
    trunkLine: TrunkLine.SIXTH_AVENUE_IND,
  },
  M: {
    name: "M",
    express: false,
    trunkLine: TrunkLine.SIXTH_AVENUE_IND,
  },
  G: {
    name: "G",
    express: false,
    trunkLine: TrunkLine.CROSSTOWN_IND,
  },
  L: {
    name: "L",
    express: false,
    trunkLine: TrunkLine.CANARSIE_BMT,
  },
  J: {
    name: "J",
    express: false,
    trunkLine: TrunkLine.NASSAU_BMT,
  },
  Z: {
    name: "Z",
    express: false,
    trunkLine: TrunkLine.NASSAU_BMT,
  },
  N: {
    name: "N",
    express: false,
    trunkLine: TrunkLine.BROADWAY_BMT,
  },
  Q: {
    name: "Q",
    express: false,
    trunkLine: TrunkLine.BROADWAY_BMT,
  },
  R: {
    name: "R",
    express: false,
    trunkLine: TrunkLine.BROADWAY_BMT,
  },
  W: {
    name: "W",
    express: false,
    trunkLine: TrunkLine.BROADWAY_BMT,
  },
  ONE: {
    name: "1",
    express: false,
    trunkLine: TrunkLine.BROADWAY_IRT,
  },
  TWO: {
    name: "2",
    express: false,
    trunkLine: TrunkLine.BROADWAY_IRT,
  },
  THREE: {
    name: "3",
    express: false,
    trunkLine: TrunkLine.BROADWAY_IRT,
  },
  FOUR: {
    name: "4",
    express: false,
    trunkLine: TrunkLine.LEXINGTON_IRT,
  },
  FIVE: {
    name: "5",
    express: false,
    trunkLine: TrunkLine.LEXINGTON_IRT,
  },
  SIX: {
    name: "6",
    express: false,
    trunkLine: TrunkLine.LEXINGTON_IRT,
  },
  SIX_EXPRESS: {
    name: "6",
    express: true,
    trunkLine: TrunkLine.LEXINGTON_IRT,
  },
  SEVEN: {
    name: "7",
    express: false,
    trunkLine: TrunkLine.FLUSHING_IRT,
  },
  SEVEN_EXPRESS: {
    name: "7",
    express: true,
    trunkLine: TrunkLine.FLUSHING_IRT,
  },
  S: {
    name: "S",
    express: false,
    trunkLine: TrunkLine.SHUTTLES,
  },
};

export type LineIdentifier = keyof typeof LINES;
export type Line = typeof LINES[LineIdentifier];
