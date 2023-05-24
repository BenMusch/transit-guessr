import { IStation, ILine } from "../types";

export enum MbtaTrunkLine {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
  ORANGE = "orange",
  SILVER = "silver",
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
  SILVER_1 = "silver1",
  SILVER_2 = "silver2",
  SILVER_3 = "silver3",
  SILVER_4 = "silver4",
  SILVER_5 = "silver5",
}

export type MbtaLine = ILine<MbtaTrunkLine, MbtaLineName>;
export type MbtaStation = IStation<MbtaTrunkLine, MbtaLineName>;
