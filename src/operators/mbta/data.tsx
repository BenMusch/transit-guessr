import { MbtaLineName, MbtaTrunkLine } from "./types";
import type { MbtaLine, MbtaStation } from "./types";

export const lines = {
  [MbtaLineName.BLUE]: {
    line: MbtaLineName.BLUE,
    displayName: "BL",
    trunkLine: MbtaTrunkLine.BLUE,
  },
  [MbtaLineName.RED]: {
    line: MbtaLineName.RED,
    displayName: "RL",
    trunkLine: MbtaTrunkLine.RED,
  },
  [MbtaLineName.RED_M]: {
    line: MbtaLineName.RED_M,
    displayName: "RLM",
    trunkLine: MbtaTrunkLine.RED,
  },
  [MbtaLineName.ORANGE]: {
    line: MbtaLineName.ORANGE,
    displayName: "OL",
    trunkLine: MbtaTrunkLine.ORANGE,
  },
  [MbtaLineName.GREEN_B]: {
    line: MbtaLineName.GREEN_B,
    displayName: "GLB",
    trunkLine: MbtaTrunkLine.GREEN,
  },
  [MbtaLineName.GREEN_C]: {
    line: MbtaLineName.GREEN_C,
    displayName: "GLC",
    trunkLine: MbtaTrunkLine.GREEN,
  },
  [MbtaLineName.GREEN_D]: {
    line: MbtaLineName.GREEN_D,
    displayName: "GLD",
    trunkLine: MbtaTrunkLine.GREEN,
  },
  [MbtaLineName.GREEN_E]: {
    line: MbtaLineName.GREEN_E,
    displayName: "GLE",
    trunkLine: MbtaTrunkLine.GREEN,
  },
  [MbtaLineName.SILVER_1]: {
    line: MbtaLineName.SILVER_1,
    displayName: "SL1",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_2]: {
    line: MbtaLineName.SILVER_2,
    displayName: "SL2",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_3]: {
    line: MbtaLineName.SILVER_3,
    displayName: "SL3",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_4]: {
    line: MbtaLineName.SILVER_4,
    displayName: "SL4",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_5]: {
    line: MbtaLineName.SILVER_5,
    displayName: "SL5",
    trunkLine: MbtaTrunkLine.SILVER,
  },
};

type MbtaTrunkLineMapping = { [k in MbtaTrunkLine]: MbtaLine[] };
export const linesByTrunkLine: MbtaTrunkLineMapping = Object.values(
  lines
).reduce((acc: MbtaTrunkLineMapping, cur: MbtaLine) => {
  if (acc[cur.trunkLine] === undefined) {
    acc[cur.trunkLine] = [];
  }
  acc[cur.trunkLine].push(cur);
  return acc;
}, {} as MbtaTrunkLineMapping);

export const stations: MbtaStation[] = [
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Alewife",
    coordinates: [[-71.142483, 42.395428]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    name: "Allston Street",
    coordinates: [[-71.137955, 42.348701]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    name: "Amory Street",
    coordinates: [[-71.114748, 42.350992]],
  },
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Andrew",
    coordinates: [[-71.057655, 42.330154]],
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    name: "Airport",
    coordinates: [[-71.030395, 42.374262]],
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    name: "Aquarium",
    coordinates: [[-71.051652, 42.359784]],
  },
  {
    lines: [
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
    ],
    name: "Park Street",
    coordinates: [[-71.062424, 42.356395]],
  },
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Porter",
    coordinates: [[-71.119149, 42.3884]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    name: "Prudential",
    coordinates: [[-71.081696, 42.34557]],
  },
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Quincy Adams",
    coordinates: [[-71.007153, 42.233391]],
  },
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Quincy Center",
    coordinates: [[-71.005409, 42.251809]],
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    name: "Revere Beach",
    coordinates: [[-70.992533, 42.407843]],
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    name: "Roxbury Crossing",
    coordinates: [[-71.095451, 42.331397]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    name: "Riverside",
    coordinates: [[-71.252685, 42.337352]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    name: "Reservoir",
    coordinates: [[-71.148758, 42.335088]],
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    name: "Ruggles",
    coordinates: [[-71.088961, 42.336377]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    name: "Riverway",
    coordinates: [[-71.111931, 42.331684]],
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    name: "Stony Brook",
    coordinates: [[-71.104248, 42.317062]],
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    name: "Suffolk Downs",
    coordinates: [[-70.997123, 42.390501]],
  },
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Savin Hill",
    coordinates: [[-71.053331, 42.31129]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    name: "Saint Mary's Street",
    coordinates: [[-71.107353, 42.345974]],
  },
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Shawmut",
    coordinates: [[-71.065738, 42.293126]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    name: "South Street",
    coordinates: [[-71.157661, 42.3396]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_D], lines[MbtaLineName.GREEN_E]],
    name: "Science Park/West End",
    coordinates: [[-71.067666, 42.366664]],
  },
  {
    lines: [
      lines[MbtaLineName.RED],
      lines[MbtaLineName.SILVER_1],
      lines[MbtaLineName.SILVER_2],
      lines[MbtaLineName.SILVER_3],
      lines[MbtaLineName.SILVER_4],
      lines[MbtaLineName.SILVER_5],
    ],
    name: "South Station",
    coordinates: [[-71.055242, 42.352271]],
  },
  {
    lines: [lines[MbtaLineName.BLUE], lines[MbtaLineName.ORANGE]],
    name: "State",
    coordinates: [[-71.057598, 42.358978]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    name: "Sutherland Road",
    coordinates: [[-71.146202, 42.341614]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    name: "Saint Paul Street",
    coordinates: [[-71.116997, 42.343327]],
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    name: "Sullivan Square",
    coordinates: [[-71.076994, 42.383975]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    name: "Summit Avenue",
    coordinates: [[-71.12561, 42.34111]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    name: "Symphony",
    coordinates: [[-71.085056, 42.342687]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    name: "Tappan Street",
    coordinates: [[-71.138702, 42.338459]],
  },
  {
    lines: [
      lines[MbtaLineName.ORANGE],
      lines[MbtaLineName.SILVER_4],
      lines[MbtaLineName.SILVER_5],
    ],
    name: "Tufts Medical Center",
    coordinates: [[-71.063917, 42.349662]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    name: "Union Square",
    coordinates: [[-71.094761, 42.377359]],
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    name: "Valley Road",
    coordinates: [[-71.081343, 42.268347]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    name: "Waban",
    coordinates: [[-71.230609, 42.325845]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    name: "Washington Street",
    coordinates: [[-71.142853, 42.343864]],
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    name: "Wellington",
    coordinates: [[-71.077082, 42.40237]],
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    name: "Wood Island",
    coordinates: [[-71.022865, 42.37964]],
  },
  {
    lines: [lines[MbtaLineName.RED]],
    name: "Wollaston",
    coordinates: [[-71.020337, 42.266514]],
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    name: "Wonderland",
    coordinates: [[-70.991648, 42.41342]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    name: "Woodland",
    coordinates: [[-71.243362, 42.332902]],
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    name: "Warren Street",
    coordinates: [[-71.140457, 42.348343]],
  },
];
