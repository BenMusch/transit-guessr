import { IStation, ILine } from "../types";

export enum CtaTrunkLine {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
  BROWN = "brown",
  PURPLE = "purple",
  YELLOW = "yellow",
  ORANGE = "orange",
  PINK = "pink",
}

export enum CtaLineName {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
  BROWN = "brown",
  PURPLE = "purple",
  YELLOW = "yellow",
  ORANGE = "orange",
  PINK = "pink",
}

export type CtaLine = ILine<CtaTrunkLine, CtaLineName>;
export type CtaStation = IStation<CtaTrunkLine, CtaLineName>;
