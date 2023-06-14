import { MbtaLineName, MbtaTrunkLine } from "./types";
import type { MbtaLine, MbtaStation } from "./types";

export const lines = {
  [MbtaLineName.BLUE]: {
    line: MbtaLineName.BLUE,
    displayName: "Blue Line",
    trunkLine: MbtaTrunkLine.BLUE,
  },
  [MbtaLineName.RED]: {
    line: MbtaLineName.RED,
    displayName: "Red Line",
    trunkLine: MbtaTrunkLine.RED,
  },
  [MbtaLineName.RED_M]: {
    line: MbtaLineName.RED_M,
    displayName: "Red Line - Mattapan",
    trunkLine: MbtaTrunkLine.RED,
  },
  [MbtaLineName.ORANGE]: {
    line: MbtaLineName.ORANGE,
    displayName: "Orange Line",
    trunkLine: MbtaTrunkLine.ORANGE,
  },
  [MbtaLineName.GREEN_B]: {
    line: MbtaLineName.GREEN_B,
    displayName: "Green Line - Boston College",
    trunkLine: MbtaTrunkLine.GREEN,
  },
  [MbtaLineName.GREEN_C]: {
    line: MbtaLineName.GREEN_C,
    displayName: "Green Line - Cleveland Circle",
    trunkLine: MbtaTrunkLine.GREEN,
  },
  [MbtaLineName.GREEN_D]: {
    line: MbtaLineName.GREEN_D,
    displayName: "Green Line - Riverside",
    trunkLine: MbtaTrunkLine.GREEN,
  },
  [MbtaLineName.GREEN_E]: {
    line: MbtaLineName.GREEN_E,
    displayName: "Green Line - Heath St",
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
    coordinates: [[-71.142483, 42.395428]],
    name: "Alewife",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.137955, 42.348701]],
    name: "Allston Street",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.114748, 42.350992]],
    name: "Amory Street",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.057655, 42.330154]],
    name: "Andrew",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-71.030395, 42.374262]],
    name: "Airport",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-71.051652, 42.359784]],
    name: "Aquarium",
  },
  {
    lines: [
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
    ],
    coordinates: [[-71.070893, 42.351902]],
    name: "Arlington",
  },
  {
    lines: [lines[MbtaLineName.RED], lines[MbtaLineName.RED_M]],
    coordinates: [[-71.063777, 42.28452]],
    name: "Ashmont",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.077257, 42.392811]],
    name: "Assembly",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.119924, 42.351616]],
    name: "Babcock Street",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.111003, 42.399889]],
    name: "Ball Square",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.075727, 42.34735]],
    name: "Back Bay",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.111313, 42.330139]],
    name: "Back of the Hill",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.140455, 42.335765]],
    name: "Beaconsfield",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.13533, 42.339394]],
    name: "Washington Square",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.100258, 42.349293]],
    name: "Blandford Street",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-70.992319, 42.397542]],
    name: "Beachmont",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.129082, 42.340023]],
    name: "Brandon Hall",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-71.062037, 42.361365]],
    name: "Bowdoin",
  },
  {
    lines: [
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
      lines[MbtaLineName.SILVER_5],
    ],
    coordinates: [[-71.06459, 42.35302]],
    name: "Boylston",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.056967, 42.342622]],
    name: "Broadway",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.125031, 42.351967]],
    name: "Packard's Corner",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.126683, 42.331316]],
    name: "Brookline Hills",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.104609, 42.334229]],
    name: "Brigham Circle",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.001138, 42.207854]],
    name: "Braintree",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.106865, 42.350082]],
    name: "Boston University Central",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.103889, 42.349735]],
    name: "Boston University East",
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    coordinates: [[-71.062519, 42.272429]],
    name: "Butler",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.116857, 42.332608]],
    name: "Brookline Village",
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    coordinates: [[-71.087338, 42.267563]],
    name: "Capen Street",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.069533, 42.373622]],
    name: "Community College",
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    coordinates: [[-71.060394, 42.279629]],
    name: "Cedar Grove",
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    coordinates: [[-71.073444, 42.270027]],
    name: "Central Avenue",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.164699, 42.326753]],
    name: "Chestnut Hill",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.15316, 42.338169]],
    name: "Chestnut Hill Avenue",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.070628, 42.361166]],
    name: "Charles/MGH",
  },
  {
    lines: [
      lines[MbtaLineName.ORANGE],
      lines[MbtaLineName.SILVER_4],
      lines[MbtaLineName.SILVER_5],
    ],
    coordinates: [[-71.062752, 42.352547]],
    name: "Chinatown",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.150711, 42.340805]],
    name: "Chiswick Road",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.149326, 42.336142]],
    name: "Cleveland Circle",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.103802, 42.365486]],
    name: "Central",
  },
  {
    lines: [
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
    ],
    coordinates: [[-71.077447, 42.349974]],
    name: "Copley",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.121263, 42.342116]],
    name: "Coolidge Corner",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.121815, 42.39674]],
    name: "Davis",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.141853, 42.337807]],
    name: "Dean Road",
  },
  {
    lines: [
      lines[MbtaLineName.RED],
      lines[MbtaLineName.ORANGE],
      lines[MbtaLineName.SILVER_5],
    ],
    coordinates: [[-71.060225, 42.355518]],
    name: "Downtown Crossing",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.216684, 42.319045]],
    name: "Eliot",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.14566, 42.336971]],
    name: "Englewood Avenue",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.086625, 42.379467]],
    name: "East Somerville",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.131073, 42.339725]],
    name: "Fairbanks Street",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.105728, 42.333706]],
    name: "Fenwood Road",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.104213, 42.345403]],
    name: "Fenway",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.061667, 42.300093]],
    name: "Fields Corner",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.113686, 42.300523]],
    name: "Forest Hills",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.096766, 42.387928]],
    name: "Gilman Square",
  },
  {
    lines: [
      lines[MbtaLineName.BLUE],
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
    ],
    coordinates: [[-71.059215, 42.359705]],
    name: "Government Center",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.134949, 42.348545]],
    name: "Griggs Street",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.107414, 42.310525]],
    name: "Green Street",
  },
  {
    lines: [
      lines[MbtaLineName.ORANGE],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
    ],
    coordinates: [[-71.05829, 42.363021]],
    name: "Haymarket",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.118956, 42.373362]],
    name: "Harvard",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.131355, 42.350243]],
    name: "Harvard Avenue",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.110252, 42.328316]],
    name: "Heath Street",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.111145, 42.344906]],
    name: "Hawes Street",
  },
  {
    lines: [
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
    ],
    coordinates: [[-71.087903, 42.347888]],
    name: "Hynes Convention Center",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.099592, 42.323132]],
    name: "Jackson Square",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.052391, 42.320685]],
    name: "JFK/UMass",
  },
  {
    lines: [
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
    ],
    coordinates: [[-71.095169, 42.348949]],
    name: "Kenmore",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.086176, 42.362491]],
    name: "Kendall/MIT",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.114197, 42.344074]],
    name: "Kent Street",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.166769, 42.340081]],
    name: "Boston College",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D], lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.076584, 42.371572]],
    name: "Lechmere",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.100052, 42.33596]],
    name: "Longwood Medical Area",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.109956, 42.341702]],
    name: "Longwood",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.083423, 42.341512]],
    name: "Massachusetts Avenue",
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    coordinates: [[-71.092486, 42.26762]],
    name: "Mattapan",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.117044, 42.407975]],
    name: "Medford/Tufts",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.095512, 42.337711]],
    name: "Museum of Fine Arts",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.106388, 42.393682]],
    name: "Magoun Square",
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    coordinates: [[-71.067266, 42.270349]],
    name: "Milton",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.109756, 42.333195]],
    name: "Mission Park",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.07411, 42.426632]],
    name: "Malden Center",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-71.03953, 42.369119]],
    name: "Maverick",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.205509, 42.322381]],
    name: "Newton Highlands",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.192414, 42.329443]],
    name: "Newton Centre",
  },
  {
    lines: [
      lines[MbtaLineName.ORANGE],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
    ],
    coordinates: [[-71.06129, 42.365577]],
    name: "North Station",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.029583, 42.275275]],
    name: "North Quincy",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.088806, 42.340401]],
    name: "Northeastern University",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.071097, 42.43668]],
    name: "Oak Grove",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-71.004736, 42.386867]],
    name: "Orient Heights",
  },
  {
    lines: [
      lines[MbtaLineName.RED],
      lines[MbtaLineName.GREEN_B],
      lines[MbtaLineName.GREEN_C],
      lines[MbtaLineName.GREEN_D],
      lines[MbtaLineName.GREEN_E],
    ],
    coordinates: [[-71.062424, 42.356395]],
    name: "Park Street",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.119149, 42.3884]],
    name: "Porter",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.081696, 42.34557]],
    name: "Prudential",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.007153, 42.233391]],
    name: "Quincy Adams",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.005409, 42.251809]],
    name: "Quincy Center",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-70.992533, 42.407843]],
    name: "Revere Beach",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.095451, 42.331397]],
    name: "Roxbury Crossing",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.252685, 42.337352]],
    name: "Riverside",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.148758, 42.335088]],
    name: "Reservoir",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.088961, 42.336377]],
    name: "Ruggles",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.111931, 42.331684]],
    name: "Riverway",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.104248, 42.317062]],
    name: "Stony Brook",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-70.997123, 42.390501]],
    name: "Suffolk Downs",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.053331, 42.31129]],
    name: "Savin Hill",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.107353, 42.345974]],
    name: "Saint Mary's Street",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.065738, 42.293126]],
    name: "Shawmut",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.157661, 42.3396]],
    name: "South Street",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D], lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.067666, 42.366664]],
    name: "Science Park/West End",
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
    coordinates: [[-71.055242, 42.352271]],
    name: "South Station",
  },
  {
    lines: [lines[MbtaLineName.BLUE], lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.057598, 42.358978]],
    name: "State",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.146202, 42.341614]],
    name: "Sutherland Road",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.116997, 42.343327]],
    name: "Saint Paul Street",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.076994, 42.383975]],
    name: "Sullivan Square",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.12561, 42.34111]],
    name: "Summit Avenue",
  },
  {
    lines: [lines[MbtaLineName.GREEN_E]],
    coordinates: [[-71.085056, 42.342687]],
    name: "Symphony",
  },
  {
    lines: [lines[MbtaLineName.GREEN_C]],
    coordinates: [[-71.138702, 42.338459]],
    name: "Tappan Street",
  },
  {
    lines: [
      lines[MbtaLineName.ORANGE],
      lines[MbtaLineName.SILVER_4],
      lines[MbtaLineName.SILVER_5],
    ],
    coordinates: [[-71.063917, 42.349662]],
    name: "Tufts Medical Center",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.094761, 42.377359]],
    name: "Union Square",
  },
  {
    lines: [lines[MbtaLineName.RED_M]],
    coordinates: [[-71.081343, 42.268347]],
    name: "Valley Road",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.230609, 42.325845]],
    name: "Waban",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.142853, 42.343864]],
    name: "Washington Street",
  },
  {
    lines: [lines[MbtaLineName.ORANGE]],
    coordinates: [[-71.077082, 42.40237]],
    name: "Wellington",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-71.022865, 42.37964]],
    name: "Wood Island",
  },
  {
    lines: [lines[MbtaLineName.RED]],
    coordinates: [[-71.020337, 42.266514]],
    name: "Wollaston",
  },
  {
    lines: [lines[MbtaLineName.BLUE]],
    coordinates: [[-70.991648, 42.41342]],
    name: "Wonderland",
  },
  {
    lines: [lines[MbtaLineName.GREEN_D]],
    coordinates: [[-71.243362, 42.332902]],
    name: "Woodland",
  },
  {
    lines: [lines[MbtaLineName.GREEN_B]],
    coordinates: [[-71.140457, 42.348343]],
    name: "Warren Street",
  },
];

export const stationGuessData = [
  {
    station: "Park Street",
    avgScore: 4642.287234042552,
  },
  {
    station: "Government Center",
    avgScore: 4580.0387323943723,
  },
  {
    station: "Downtown Crossing",
    avgScore: 4570.3838709677475,
  },
  {
    station: "North Station",
    avgScore: 4533.8843537414987,
  },
  {
    station: "State",
    avgScore: 4513.6131386861307,
  },
  {
    station: "Copley",
    avgScore: 4507.4733542319764,
  },
  {
    station: "Boylston",
    avgScore: 4495.98305084746,
  },
  {
    station: "Chinatown",
    avgScore: 4485.7337461300331,
  },
  {
    station: "Haymarket",
    avgScore: 4466.4081632653024,
  },
  {
    station: "Prudential",
    avgScore: 4446.5624999999955,
  },
  {
    station: "South Station",
    avgScore: 4443.6112956810639,
  },
  {
    station: "Aquarium",
    avgScore: 4435.6351791530933,
  },
  {
    station: "Hynes Convention Center",
    avgScore: 4419.1802721088434,
  },
  {
    station: "Back Bay",
    avgScore: 4415.7368421052606,
  },
  {
    station: "Charles/MGH",
    avgScore: 4407.0000000000018,
  },
  {
    station: "Arlington",
    avgScore: 4365.74,
  },
  {
    station: "Airport",
    avgScore: 4358.1234567901265,
  },
  {
    station: "Kenmore",
    avgScore: 4288.4095238095233,
  },
  {
    station: "Symphony",
    avgScore: 4213.4212328767144,
  },
  {
    station: "Kendall/MIT",
    avgScore: 4204.344051446943,
  },
  {
    station: "Science Park/West End",
    avgScore: 4192.0569620253127,
  },
  {
    station: "Fenway",
    avgScore: 4184.5322033898337,
  },
  {
    station: "Northeastern University",
    avgScore: 4182.0087976539589,
  },
  {
    station: "Tufts Medical Center",
    avgScore: 4169.3106796116481,
  },
  {
    station: "Massachusetts Avenue",
    avgScore: 4146.0031746031773,
  },
  {
    station: "Harvard",
    avgScore: 4144.7380952380972,
  },
  {
    station: "Museum of Fine Arts",
    avgScore: 4089.6020066889641,
  },
  {
    station: "Bowdoin",
    avgScore: 4083.1050847457627,
  },
  {
    station: "Longwood Medical Area",
    avgScore: 4061.0563380281674,
  },
  {
    station: "Boston University Central",
    avgScore: 4045.3827586206903,
  },
  {
    station: "Boston University East",
    avgScore: 4007.4419354838697,
  },
  {
    station: "Central",
    avgScore: 4005.4221556886228,
  },
  {
    station: "Lechmere",
    avgScore: 4005.1162790697695,
  },
  {
    station: "Revere Beach",
    avgScore: 3995.503105590064,
  },
  {
    station: "Harvard Avenue",
    avgScore: 3986.1221122112197,
  },
  {
    station: "JFK/UMass",
    avgScore: 3986.0884353741494,
  },
  {
    station: "Packard\u0027s Corner",
    avgScore: 3967.7744107744124,
  },
  {
    station: "Broadway",
    avgScore: 3964.5854545454554,
  },
  {
    station: "Ruggles",
    avgScore: 3950.7483443708625,
  },
  {
    station: "Coolidge Corner",
    avgScore: 3944.829787234044,
  },
  {
    station: "Maverick",
    avgScore: 3929.9376947040496,
  },
  {
    station: "Saint Paul Street",
    avgScore: 3927.6842105263136,
  },
  {
    station: "Allston Street",
    avgScore: 3908.1307189542495,
  },
  {
    station: "Babcock Street",
    avgScore: 3907.9577922077906,
  },
  {
    station: "Fairbanks Street",
    avgScore: 3902.3377926421404,
  },
  {
    station: "Summit Avenue",
    avgScore: 3901.0033898305082,
  },
  {
    station: "Fenwood Road",
    avgScore: 3893.3220338983056,
  },
  {
    station: "Washington Square",
    avgScore: 3887.87857142857,
  },
  {
    station: "Dean Road",
    avgScore: 3880.2315436241606,
  },
  {
    station: "Brigham Circle",
    avgScore: 3864.482876712329,
  },
  {
    station: "Warren Street",
    avgScore: 3863.7347670250888,
  },
  {
    station: "Saint Mary\u0027s Street",
    avgScore: 3859.1980830670927,
  },
  {
    station: "Porter",
    avgScore: 3859.0529801324492,
  },
  {
    station: "Mission Park",
    avgScore: 3855.4353312302819,
  },
  {
    station: "Brandon Hall",
    avgScore: 3847.597014925374,
  },
  {
    station: "East Somerville",
    avgScore: 3842.8231292517012,
  },
  {
    station: "Longwood",
    avgScore: 3838.2607260726049,
  },
  {
    station: "Englewood Avenue",
    avgScore: 3826.2147651006712,
  },
  {
    station: "Roxbury Crossing",
    avgScore: 3812.853658536586,
  },
  {
    station: "Chestnut Hill Avenue",
    avgScore: 3806.5622775800707,
  },
  {
    station: "Griggs Street",
    avgScore: 3799.9305555555547,
  },
  {
    station: "Washington Street",
    avgScore: 3797.624060150376,
  },
  {
    station: "Amory Street",
    avgScore: 3794.212765957448,
  },
  {
    station: "Riverway",
    avgScore: 3785.6093749999991,
  },
  {
    station: "Back of the Hill",
    avgScore: 3783.6132404181208,
  },
  {
    station: "Assembly",
    avgScore: 3776.9934640522888,
  },
  {
    station: "Tappan Street",
    avgScore: 3776.9652777777778,
  },
  {
    station: "Orient Heights",
    avgScore: 3769.7311475409833,
  },
  {
    station: "Brookline Village",
    avgScore: 3765.3177257525076,
  },
  {
    station: "Sutherland Road",
    avgScore: 3762.9240924092414,
  },
  {
    station: "Cleveland Circle",
    avgScore: 3754.8784722222217,
  },
  {
    station: "Davis",
    avgScore: 3733.1704918032783,
  },
  {
    station: "Chiswick Road",
    avgScore: 3713.9440559440554,
  },
  {
    station: "Kent Street",
    avgScore: 3692.6524590163954,
  },
  {
    station: "Sullivan Square",
    avgScore: 3679.5986394557813,
  },
  {
    station: "Boston College",
    avgScore: 3679.0091185410347,
  },
  {
    station: "Union Square",
    avgScore: 3674.631768953067,
  },
  {
    station: "Beachmont",
    avgScore: 3658.9696969696952,
  },
  {
    station: "Wonderland",
    avgScore: 3655.8843283582087,
  },
  {
    station: "Forest Hills",
    avgScore: 3643.2626262626286,
  },
  {
    station: "Heath Street",
    avgScore: 3625.00651465798,
  },
  {
    station: "Reservoir",
    avgScore: 3623.7540453074421,
  },
  {
    station: "Community College",
    avgScore: 3620.5738831615117,
  },
  {
    station: "Jackson Square",
    avgScore: 3593.5230263157891,
  },
  {
    station: "Andrew",
    avgScore: 3591.3978873239448,
  },
  {
    station: "Hawes Street",
    avgScore: 3589.4407407407407,
  },
  {
    station: "Alewife",
    avgScore: 3569.6095890410966,
  },
  {
    station: "Chestnut Hill",
    avgScore: 3565.5480427046245,
  },
  {
    station: "South Street",
    avgScore: 3531.8863636363621,
  },
  {
    station: "Savin Hill",
    avgScore: 3517.6953405017921,
  },
  {
    station: "Green Street",
    avgScore: 3507.2539682539673,
  },
  {
    station: "North Quincy",
    avgScore: 3494.2578616352207,
  },
  {
    station: "Brookline Hills",
    avgScore: 3478.3975155279481,
  },
  {
    station: "Blandford Street",
    avgScore: 3474.1678082191793,
  },
  {
    station: "Shawmut",
    avgScore: 3462.273049645391,
  },
  {
    station: "Butler",
    avgScore: 3457.7328519855591,
  },
  {
    station: "Valley Road",
    avgScore: 3455.1125827814571,
  },
  {
    station: "Suffolk Downs",
    avgScore: 3440.6197183098584,
  },
  {
    station: "Medford/Tufts",
    avgScore: 3405.3682432432438,
  },
  {
    station: "Beaconsfield",
    avgScore: 3384.1310344827575,
  },
  {
    station: "Fields Corner",
    avgScore: 3376.9096989966561,
  },
  {
    station: "Wood Island",
    avgScore: 3358.264984227128,
  },
  {
    station: "Ashmont",
    avgScore: 3354.7586206896567,
  },
  {
    station: "Cedar Grove",
    avgScore: 3341.2156862745114,
  },
  {
    station: "Capen Street",
    avgScore: 3325.7252747252742,
  },
  {
    station: "Milton",
    avgScore: 3307.9327217125374,
  },
  {
    station: "Central Avenue",
    avgScore: 3282.3533834586442,
  },
  {
    station: "Stony Brook",
    avgScore: 3251.6829268292672,
  },
  {
    station: "Mattapan",
    avgScore: 3239.6351791530947,
  },
  {
    station: "Malden Center",
    avgScore: 3219.652459016394,
  },
  {
    station: "Newton Centre",
    avgScore: 3131.9803278688519,
  },
  {
    station: "Magoun Square",
    avgScore: 3094.3745704467333,
  },
  {
    station: "Wellington",
    avgScore: 3091.391304347826,
  },
  {
    station: "Wollaston",
    avgScore: 2987.8537414966004,
  },
  {
    station: "Ball Square",
    avgScore: 2973.0825082508259,
  },
  {
    station: "Newton Highlands",
    avgScore: 2947.451505016722,
  },
  {
    station: "Gilman Square",
    avgScore: 2898.4098939929327,
  },
  {
    station: "Quincy Center",
    avgScore: 2813.4967532467545,
  },
  {
    station: "Oak Grove",
    avgScore: 2688.7830188679231,
  },
  {
    station: "Waban",
    avgScore: 2253.6731391585749,
  },
  {
    station: "Eliot",
    avgScore: 2206.0615942028962,
  },
  {
    station: "Riverside",
    avgScore: 2179.026845637582,
  },
  {
    station: "Quincy Adams",
    avgScore: 2110.0439189189183,
  },
  {
    station: "Braintree",
    avgScore: 1892.7979797979795,
  },
  {
    station: "Woodland",
    avgScore: 1881.0629139072846,
  },
];
