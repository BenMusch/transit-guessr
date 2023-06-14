import { IStation, ILine } from "../types";

export enum MbtaTrunkLine {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
  ORANGE = "orange",
}

export enum MbtaLineName {
  RED = "red",
  // Mattapan trolley
  RED_M = "redM",
  BLUE = "blue",
  GREEN_B = "greenB",
  GREEN_C = "greenC",
  GREEN_D = "greenD",
  GREEN_E = "greenE",
  ORANGE = "orange",
}

export type MbtaLine = ILine<MbtaTrunkLine, MbtaLineName>;
export type MbtaStation = IStation<MbtaTrunkLine, MbtaLineName>;
