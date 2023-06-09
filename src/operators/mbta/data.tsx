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
    displayName: "lines[MbtaLineName.SILVER_1]",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_2]: {
    line: MbtaLineName.SILVER_2,
    displayName: "lines[MbtaLineName.SILVER_2]",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_3]: {
    line: MbtaLineName.SILVER_3,
    displayName: "lines[MbtaLineName.SILVER_3]",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_4]: {
    line: MbtaLineName.SILVER_4,
    displayName: "lines[MbtaLineName.SILVER_4]",
    trunkLine: MbtaTrunkLine.SILVER,
  },
  [MbtaLineName.SILVER_5]: {
    line: MbtaLineName.SILVER_5,
    displayName: "lines[MbtaLineName.SILVER_5]",
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
    lines: [
      lines[MbtaLineName.SILVER_1],
      lines[MbtaLineName.SILVER_2],
      lines[MbtaLineName.SILVER_3],
    ],
    coordinates: [[-71.038385, 42.347154]],
    name: "Silver Line Way",
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
    lines: [lines[MbtaLineName.GREEN_C]],
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
    lines: [lines[MbtaLineName.SILVER_4], lines[MbtaLineName.SILVER_5]],
    coordinates: [[-71.083982, 42.329544]],
    name: "Nubian",
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
    lines: [lines[MbtaLineName.GREEN_B]],
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
