import { MtaLineName, MtaTrunkLine, MtaStation, MtaLine } from "./types";

export const lines = {
  [MtaLineName.A]: {
    line: MtaLineName.A,
    displayName: "A",
    trunkLine: MtaTrunkLine.EIGHTH_AVENUE_IND,
  },
  [MtaLineName.C]: {
    line: MtaLineName.C,
    displayName: "C",
    trunkLine: MtaTrunkLine.EIGHTH_AVENUE_IND,
  },
  [MtaLineName.E]: {
    line: MtaLineName.E,
    displayName: "E",
    trunkLine: MtaTrunkLine.EIGHTH_AVENUE_IND,
  },
  [MtaLineName.B]: {
    line: MtaLineName.B,
    displayName: "B",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLineName.D]: {
    line: MtaLineName.D,
    displayName: "D",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLineName.F]: {
    line: MtaLineName.F,
    displayName: "F",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLineName.F_EXPRESS]: {
    line: MtaLineName.F_EXPRESS,
    displayName: "F",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLineName.M]: {
    line: MtaLineName.M,
    displayName: "M",
    trunkLine: MtaTrunkLine.SIXTH_AVENUE_IND,
  },
  [MtaLineName.G]: {
    line: MtaLineName.G,
    displayName: "G",
    trunkLine: MtaTrunkLine.CROSSTOWN_IND,
  },
  [MtaLineName.L]: {
    line: MtaLineName.L,
    displayName: "L",
    trunkLine: MtaTrunkLine.CANARSIE_BMT,
  },
  [MtaLineName.J]: {
    line: MtaLineName.J,
    displayName: "J",
    trunkLine: MtaTrunkLine.NASSAU_BMT,
  },
  [MtaLineName.Z]: {
    line: MtaLineName.Z,
    displayName: "Z",
    trunkLine: MtaTrunkLine.NASSAU_BMT,
  },
  [MtaLineName.N]: {
    line: MtaLineName.N,
    displayName: "N",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLineName.Q]: {
    line: MtaLineName.Q,
    displayName: "Q",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLineName.R]: {
    line: MtaLineName.R,
    displayName: "R",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLineName.W]: {
    line: MtaLineName.W,
    displayName: "W",
    trunkLine: MtaTrunkLine.BROADWAY_BMT,
  },
  [MtaLineName.ONE]: {
    line: MtaLineName.ONE,
    displayName: "1",
    trunkLine: MtaTrunkLine.BROADWAY_IRT,
  },
  [MtaLineName.TWO]: {
    line: MtaLineName.TWO,
    displayName: "2",
    trunkLine: MtaTrunkLine.BROADWAY_IRT,
  },
  [MtaLineName.THREE]: {
    line: MtaLineName.THREE,
    displayName: "3",
    trunkLine: MtaTrunkLine.BROADWAY_IRT,
  },
  [MtaLineName.FOUR]: {
    line: MtaLineName.FOUR,
    displayName: "4",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLineName.FIVE]: {
    line: MtaLineName.FIVE,
    displayName: "5",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLineName.SIX]: {
    line: MtaLineName.SIX,
    displayName: "6",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLineName.SIX_EXPRESS]: {
    line: MtaLineName.SIX_EXPRESS,
    displayName: "6",
    trunkLine: MtaTrunkLine.LEXINGTON_IRT,
  },
  [MtaLineName.SEVEN]: {
    line: MtaLineName.SEVEN,
    displayName: "7",
    trunkLine: MtaTrunkLine.FLUSHING_IRT,
  },
  [MtaLineName.SEVEN_EXPRESS]: {
    line: MtaLineName.SEVEN_EXPRESS,
    displayName: "7",
    trunkLine: MtaTrunkLine.FLUSHING_IRT,
  },
  [MtaLineName.S]: {
    line: MtaLineName.S,
    displayName: "S",
    trunkLine: MtaTrunkLine.SHUTTLES,
  },
};

export const linesByTrunkLine: { [k in MtaTrunkLine]: MtaLine[] } = {
  [MtaTrunkLine.EIGHTH_AVENUE_IND]: [
    lines[MtaLineName.A],
    lines[MtaLineName.C],
    lines[MtaLineName.E],
  ],
  [MtaTrunkLine.SHUTTLES]: [lines[MtaLineName.S]],
  [MtaTrunkLine.SIXTH_AVENUE_IND]: [
    lines[MtaLineName.B],
    lines[MtaLineName.D],
    lines[MtaLineName.F],
    lines[MtaLineName.F_EXPRESS],
    lines[MtaLineName.M],
  ],
  [MtaTrunkLine.CROSSTOWN_IND]: [lines[MtaLineName.G]],
  [MtaTrunkLine.CANARSIE_BMT]: [lines[MtaLineName.L]],
  [MtaTrunkLine.NASSAU_BMT]: [lines[MtaLineName.J], lines[MtaLineName.Z]],
  [MtaTrunkLine.BROADWAY_BMT]: [
    lines[MtaLineName.N],
    lines[MtaLineName.Q],
    lines[MtaLineName.R],
    lines[MtaLineName.W],
  ],
  [MtaTrunkLine.BROADWAY_IRT]: [
    lines[MtaLineName.ONE],
    lines[MtaLineName.TWO],
    lines[MtaLineName.THREE],
  ],
  [MtaTrunkLine.LEXINGTON_IRT]: [
    lines[MtaLineName.FOUR],
    lines[MtaLineName.FIVE],
    lines[MtaLineName.SIX],
    lines[MtaLineName.SIX_EXPRESS],
  ],
  [MtaTrunkLine.FLUSHING_IRT]: [
    lines[MtaLineName.SEVEN],
    lines[MtaLineName.SEVEN_EXPRESS],
  ],
};

export const stations: MtaStation[] = [
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "Astor Pl",
    coordinates: [[-73.99106999861966, 40.73005400028978]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "50th St",
    coordinates: [[-73.98384899986625, 40.76172799961419]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "Bergen St",
    coordinates: [[-73.97499915116808, 40.68086213682956]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Pennsylvania Ave",
    coordinates: [[-73.89488591154061, 40.66471445143568]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "238th St",
    coordinates: [[-73.90087000018522, 40.88466700064975]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "Cathedral Pkwy (110th St)",
    coordinates: [[-73.95806670661364, 40.800581558114956]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Kingston - Throop Aves",
    coordinates: [[-73.94085899871263, 40.67991899941601]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "65th St",
    coordinates: [[-73.8987883783301, 40.74971952935675]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "36th St",
    coordinates: [[-73.92901818461539, 40.75196004401078]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Van Siclen Ave",
    coordinates: [[-73.89165772702445, 40.67802821447783]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Norwood Ave",
    coordinates: [[-73.87962599910783, 40.68152000045683]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "104th-102nd Sts",
    coordinates: [[-73.84443500029684, 40.69516599823373]],
  },
  {
    lines: [
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
    ],
    name: "DeKalb Ave",
    coordinates: [[-73.98177094440949, 40.690648119969794]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.S]],
    name: "Beach 105th St",
    coordinates: [[-73.82758075034528, 40.58326843810286]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.S]],
    name: "Beach 90th St",
    coordinates: [[-73.81365140419632, 40.58809156457325]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Freeman St",
    coordinates: [[-73.89175225349464, 40.829987446384116]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Intervale Ave",
    coordinates: [[-73.89661738461646, 40.822142131170786]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "182nd-183rd Sts",
    coordinates: [[-73.90074099998965, 40.85609299881864]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "174th-175th Sts",
    coordinates: [[-73.91013600050078, 40.84589999983414]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "167th St",
    coordinates: [[-73.91843200082253, 40.83376899862797]],
  },
  {
    lines: [lines[MtaLineName.SEVEN], lines[MtaLineName.SEVEN_EXPRESS]],
    name: "Mets - Willets Point",
    coordinates: [[-73.8456249984179, 40.75462199881262]],
  },
  {
    lines: [lines[MtaLineName.SEVEN], lines[MtaLineName.SEVEN_EXPRESS]],
    name: "Junction Blvd",
    coordinates: [[-73.86952700103515, 40.74914499948836]],
  },
  {
    lines: [lines[MtaLineName.SEVEN], lines[MtaLineName.SEVEN_EXPRESS]],
    name: "Flushing - Main St",
    coordinates: [[-73.83003000262508, 40.75959999915012]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Buhre Ave",
    coordinates: [[-73.83256900003744, 40.846809998885504]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "3rd Ave - 138th St",
    coordinates: [[-73.92613800014134, 40.81047600117261]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Castle Hill Ave",
    coordinates: [[-73.85122199961472, 40.83425499825462]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
      lines[MtaLineName.J],
      lines[MtaLineName.Z],
    ],
    name: "Brooklyn Bridge - City Hall/Chambers St",
    coordinates: [
      [-74.0041310005885, 40.713064999433136],
      [-74.00340673031336, 40.71323378962671],
    ],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Zerega Ave",
    coordinates: [[-73.8470359987544, 40.836488000608156]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
      lines[MtaLineName.SEVEN],
      lines[MtaLineName.SEVEN_EXPRESS],
      lines[MtaLineName.S],
    ],
    name: "Grand Central - 42nd St",
    coordinates: [
      [-73.9767132992584, 40.75180742981634],
      [-73.97918899989101, 40.75276866674217],
      [-73.97604100111508, 40.751431000286864],
    ],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "33rd St",
    coordinates: [[-73.98207600148947, 40.74608099909145]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "96th St",
    coordinates: [[-73.9510700015425, 40.78567199998607]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "77th St",
    coordinates: [[-73.95987399886047, 40.77362000074615]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Chauncey St",
    coordinates: [[-73.91038357033376, 40.68285130087804]],
  },
  {
    lines: [lines[MtaLineName.D], lines[MtaLineName.N], lines[MtaLineName.R]],
    name: "Union St",
    coordinates: [[-73.98310999909673, 40.67731566735096]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "Elmhurst Ave",
    coordinates: [[-73.8820347465864, 40.74237007972169]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Ralph Ave",
    coordinates: [[-73.92078599933306, 40.678822000873375]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Pelham Pkwy",
    coordinates: [[-73.86748067850041, 40.8571924091606]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Gun Hill Rd",
    coordinates: [[-73.86613410538703, 40.877839385172024]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Nereid Ave (238 St)",
    coordinates: [[-73.8543153107622, 40.898286515575286]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
      lines[MtaLineName.S],
    ],
    name: "Franklin Ave/Botanic Garden",
    coordinates: [[-73.9580997367769, 40.67076515344894]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Simpson St",
    coordinates: [[-73.89306639507903, 40.823976841237396]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Bronx Park East",
    coordinates: [[-73.86835609178098, 40.848768666338934]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Winthrop St",
    coordinates: [[-73.95007934590994, 40.65665931376077]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Van Siclen Ave",
    coordinates: [[-73.88940491730106, 40.665517963059635]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "E 149th St",
    coordinates: [[-73.90409799875945, 40.81211799827203]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "Morrison Av - Soundview",
    coordinates: [[-73.87451599929486, 40.82952100156747]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "Whitlock Ave",
    coordinates: [[-73.8862829985325, 40.82652500055904]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "St Lawrence Ave",
    coordinates: [[-73.86761799923673, 40.8315090005233]],
  },
  {
    lines: [lines[MtaLineName.SEVEN], lines[MtaLineName.SEVEN_EXPRESS]],
    name: "Woodside - 61st St",
    coordinates: [[-73.90298400173006, 40.745630001138395]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Far Rockaway - Mott Ave",
    coordinates: [[-73.75540499924732, 40.603995001687544]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "72nd St",
    coordinates: [[-73.976336575218, 40.77551939729258]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "96th St",
    coordinates: [[-73.96460245687166, 40.79161879767014]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.ONE]],
    name: "168th St",
    coordinates: [
      [-73.93956099985425, 40.84071899990795],
      [-73.94013299907257, 40.840555999148535],
    ],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "Kingsbridge Rd",
    coordinates: [[-73.8935090000331, 40.86697799999945]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.S], lines[MtaLineName.Q]],
    name: "Prospect Park",
    coordinates: [[-73.96203130426609, 40.6616334551018]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "55th St",
    coordinates: [[-73.99534882595742, 40.63147876093745]],
  },
  {
    lines: [lines[MtaLineName.E]],
    name: "Jamaica - Van Wyck",
    coordinates: [[-73.81701287135405, 40.70289855287313]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.F]],
    name: "Kew Gardens - Union Tpke",
    coordinates: [[-73.8303702709878, 40.714034819571026]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Sutphin Blvd - Archer Av",
    coordinates: [[-73.80800471963833, 40.700382424235]],
  },
  {
    lines: [
      lines[MtaLineName.SEVEN],
      lines[MtaLineName.SEVEN_EXPRESS],
      lines[MtaLineName.E],
      lines[MtaLineName.M],
      lines[MtaLineName.G],
    ],
    name: "Court Sq - 23rd St",
    coordinates: [
      [-73.94605470266329, 40.747768121414325],
      [-73.94381559597835, 40.74630503357145],
      [-73.94526400039679, 40.74702299889643],
    ],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "67th Ave",
    coordinates: [[-73.85286048434907, 40.726505475813006]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "Grand Ave - Newtown",
    coordinates: [[-73.87722085669182, 40.736813418197144]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Ditmas Ave",
    coordinates: [[-73.97817199965161, 40.63611866666291]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Classon Ave",
    coordinates: [[-73.95999000137212, 40.68888900026455]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Broadway",
    coordinates: [[-73.95031225606621, 40.706126576274166]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Sutter Ave",
    coordinates: [[-73.9019160004208, 40.66914500061398]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Wilson Ave",
    coordinates: [[-73.90395860491864, 40.68886654246024]],
  },
  {
    lines: [lines[MtaLineName.J]],
    name: "Halsey St",
    coordinates: [[-73.9166388842194, 40.686415270704344]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.M]],
    name: "Lorimer St",
    coordinates: [[-73.94735499884204, 40.703844000042096]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "8th Ave",
    coordinates: [[-74.01151599772157, 40.634970999647166]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.W]],
    name: "36th Ave",
    coordinates: [[-73.929861999118, 40.7564420005104]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.W]],
    name: "Broadway",
    coordinates: [[-73.92582299919906, 40.761431998800546]],
  },
  {
    lines: [
      lines[MtaLineName.ONE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
      lines[MtaLineName.SEVEN],
      lines[MtaLineName.SEVEN_EXPRESS],
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.E],
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
      lines[MtaLineName.S],
    ],
    name: "Times Sq - 42nd St/Port Authority Bus Terminal",
    coordinates: [
      [-73.98676800153976, 40.75461199851542],
      [-73.98622899953202, 40.755983000570076],
      [-73.98769099825152, 40.755477001982506],
      [-73.98749500051885, 40.75528999995681],
      [-73.98973500085859, 40.757307998551504],
    ],
  },
  {
    lines: [lines[MtaLineName.S]],
    name: "Park Pl",
    coordinates: [[-73.95762400074634, 40.67477166685263]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "111th St",
    coordinates: [[-73.83216299845388, 40.68433100001238]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "86th St",
    coordinates: [[-73.97621799859327, 40.78864400073892]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "233rd St",
    coordinates: [[-73.85736239521543, 40.89314324138378]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "66th St - Lincoln Ctr",
    coordinates: [[-73.98220899995783, 40.77344000052039]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Hunts Point Ave",
    coordinates: [[-73.89054900017344, 40.82094799852307]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "Canal St",
    coordinates: [[-74.0062770001748, 40.72285399778783]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Middletown Rd",
    coordinates: [[-73.83632199755944, 40.84386300128381]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "23rd St",
    coordinates: [[-73.98659900207888, 40.739864000474604]],
  },
  {
    lines: [
      lines[MtaLineName.ONE],
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.B],
      lines[MtaLineName.D],
    ],
    name: "59th St - Columbus Circle",
    coordinates: [
      [-73.98164872301398, 40.768249531776064],
      [-73.98192900232715, 40.76824700063689],
    ],
  },
  {
    lines: [lines[MtaLineName.SEVEN], lines[MtaLineName.SEVEN_EXPRESS]],
    name: "Hunters Point Ave",
    coordinates: [[-73.9489160009391, 40.74221599986316]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "23rd St",
    coordinates: [[-73.9956570016487, 40.74408099989751]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "Houston St",
    coordinates: [[-74.00536700180581, 40.728251000730204]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "104th St",
    coordinates: [[-73.83768300060997, 40.681711001091195]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.S]],
    name: "Broad Channel",
    coordinates: [[-73.81583268782963, 40.60840218069683]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Ocean Pkwy",
    coordinates: [[-73.96850099975177, 40.57631166708091]],
  },
  {
    lines: [lines[MtaLineName.SEVEN], lines[MtaLineName.SEVEN_EXPRESS]],
    name: "Vernon Blvd - Jackson Ave",
    coordinates: [[-73.95358099875249, 40.74262599969749]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "68th St - Hunter College",
    coordinates: [[-73.96387000158042, 40.76814100049679]],
  },
  {
    lines: [
      lines[MtaLineName.SEVEN],
      lines[MtaLineName.SEVEN_EXPRESS],
      lines[MtaLineName.N],
      lines[MtaLineName.W],
    ],
    name: "Queensboro Plz",
    coordinates: [[-73.9401635351909, 40.750635651014804]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Rockaway Blvd",
    coordinates: [[-73.8438529979573, 40.680428999588415]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
      lines[MtaLineName.L],
    ],
    name: "Union Sq - 14th St",
    coordinates: [
      [-73.99053886181645, 40.73587226699812],
      [-73.98995099881881, 40.734673000996125],
      [-73.99066976901818, 40.73476331217923],
    ],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Bedford - Nostrand Aves",
    coordinates: [[-73.95352200064022, 40.68962700158444]],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F]],
    name: "15th St - Prospect Park",
    coordinates: [[-73.97973580592873, 40.66003568810021]],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F]],
    name: "7th Ave",
    coordinates: [[-73.98025117900944, 40.66624469001985]],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F]],
    name: "Ft Hamilton Pkwy",
    coordinates: [[-73.97577599917474, 40.65078166803418]],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F]],
    name: "Church Ave",
    coordinates: [[-73.97972116229084, 40.64427200012998]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Beverly Rd",
    coordinates: [[-73.96435779623125, 40.64390459860419]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.Q]],
    name: "Church Ave",
    coordinates: [[-73.96288246192114, 40.65049324646484]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.Q]],
    name: "Newkirk Ave",
    coordinates: [[-73.96269486837261, 40.63514193733789]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Parkside Ave",
    coordinates: [[-73.96145343987648, 40.65507304163716]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "Grand Army Plaza",
    coordinates: [[-73.9709563319228, 40.6752946951032]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "Atlantic Av - Barclay's Center",
    coordinates: [
      [-73.97678343963167, 40.684488323453685],
      [-73.97754993539385, 40.68442016526762],
      [-73.97880999956767, 40.683665667279435],
    ],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Rockaway Ave",
    coordinates: [[-73.91194599726617, 40.678339999883505]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Fulton St",
    coordinates: [[-73.97537499833149, 40.68711899950771]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Clinton - Washington Aves",
    coordinates: [[-73.9667959986695, 40.68809400106055]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.Q]],
    name: "7th Ave",
    coordinates: [[-73.97285279191024, 40.67710217983294]],
  },
  {
    lines: [
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.R],
    ],
    name: "Borough Hall/Court St",
    coordinates: [
      [-73.99015100090539, 40.692403999991036],
      [-73.99181830901125, 40.694196480776995],
      [-73.98999799960687, 40.693218999611084],
    ],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Aqueduct Racetrack",
    coordinates: [[-73.83591899965162, 40.672096999172844]],
  },
  {
    lines: [lines[MtaLineName.FIVE]],
    name: "Morris Park",
    coordinates: [[-73.86049500117254, 40.85436399966426]],
  },
  {
    lines: [lines[MtaLineName.FIVE]],
    name: "Pelham Pkwy",
    coordinates: [[-73.85535900043564, 40.858984999820116]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Nostrand Ave",
    coordinates: [[-73.95042600099683, 40.68043800006226]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "Nevins St",
    coordinates: [[-73.98040679874578, 40.68831058019022]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "Eastern Pkwy - Bklyn Museum",
    coordinates: [[-73.96422203748425, 40.67203223545925]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Beverly Rd",
    coordinates: [[-73.94884798381702, 40.64512351894373]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Church Ave",
    coordinates: [[-73.94945514035334, 40.6508606878022]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Newkirk Ave",
    coordinates: [[-73.94829990822407, 40.63999124275311]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Brooklyn College - Flatbush Ave",
    coordinates: [[-73.94754120734406, 40.63284240700742]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Sterling St",
    coordinates: [[-73.95072891124937, 40.6627729934283]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Crown Hts - Utica Ave",
    coordinates: [[-73.93293256081851, 40.66897831107809]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Kingston Ave",
    coordinates: [[-73.94215978392963, 40.66948144864978]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Nassau Ave",
    coordinates: [[-73.95118300016523, 40.724479997808274]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Greenpoint Ave",
    coordinates: [[-73.95442500146235, 40.73126699971465]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z], lines[MtaLineName.M]],
    name: "Marcy Ave",
    coordinates: [[-73.95783200075729, 40.708383000017925]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.M]],
    name: "Hewes St",
    coordinates: [[-73.95348800038457, 40.706889998054]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.FIVE]],
    name: "138th St - Grand Concourse",
    coordinates: [[-73.92984899935611, 40.81322399958908]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M]],
    name: "5th Ave - 53rd St",
    coordinates: [[-73.9752485052734, 40.76008683231326]],
  },
  {
    lines: [
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
      lines[MtaLineName.E],
      lines[MtaLineName.M],
    ],
    name: "Lexington Ave - 53rd St/51st St",
    coordinates: [
      [-73.96907237490204, 40.75746830782865],
      [-73.97192000069982, 40.75710699989316],
    ],
  },
  {
    lines: [
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "28th St",
    coordinates: [[-73.98869800128737, 40.74545399979951]],
  },
  {
    lines: [
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.F],
      lines[MtaLineName.F_EXPRESS],
      lines[MtaLineName.M],
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "Herald Sq - 34th St",
    coordinates: [
      [-73.9879368338264, 40.74964456009442],
      [-73.98777189072918, 40.74978939990011],
    ],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "1st Ave",
    coordinates: [[-73.98168087489128, 40.73097497580066]],
  },
  {
    lines: [lines[MtaLineName.L], lines[MtaLineName.G]],
    name: "Metropolitan Ave/Lorimer St",
    coordinates: [
      [-73.9514239994525, 40.71277400073426],
      [-73.95024799996972, 40.71407200064717],
    ],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Grand St",
    coordinates: [[-73.94049699874644, 40.71157600064823]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Graham Ave",
    coordinates: [[-73.94394399869037, 40.714575998363635]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Bedford Ave",
    coordinates: [[-73.95666499806525, 40.71717399858899]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Montrose Ave",
    coordinates: [[-73.93979284713505, 40.70739106438455]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "21st St",
    coordinates: [[-73.9495999997552, 40.7441286664954]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.W]],
    name: "39th Ave",
    coordinates: [[-73.93285137679598, 40.75276306140845]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "145th St",
    coordinates: [[-73.95035999879713, 40.82655099962194]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "157th St",
    coordinates: [[-73.94488999901047, 40.8340410001399]],
  },
  {
    lines: [
      lines[MtaLineName.ONE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "96th St",
    coordinates: [[-73.97232299915696, 40.79391900121471]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "103rd St",
    coordinates: [[-73.96837899960818, 40.799446000334825]],
  },
  {
    lines: [lines[MtaLineName.TWO], lines[MtaLineName.THREE]],
    name: "Central Park North (110th St)",
    coordinates: [[-73.95182200176913, 40.79907499977324]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "103rd St",
    coordinates: [[-73.96137008267617, 40.796060739904526]],
  },
  {
    lines: [
      lines[MtaLineName.ONE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "72nd St",
    coordinates: [[-73.98197000159583, 40.77845300068614]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "81st St",
    coordinates: [[-73.97209794937208, 40.78134608418206]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.F]],
    name: "75th Ave",
    coordinates: [[-73.83692369387158, 40.71804465348743]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "86th St",
    coordinates: [[-73.96882849429672, 40.78582304678557]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "Cathedral Pkwy (110th St)",
    coordinates: [[-73.9668470005456, 40.80396699961484]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "116th St - Columbia University",
    coordinates: [[-73.96410999757751, 40.807722001230864]],
  },
  {
    lines: [lines[MtaLineName.TWO], lines[MtaLineName.THREE]],
    name: "125th St",
    coordinates: [[-73.94549500011411, 40.807753999182815]],
  },
  {
    lines: [lines[MtaLineName.TWO], lines[MtaLineName.THREE]],
    name: "135th St",
    coordinates: [[-73.94077000106708, 40.8142290003391]],
  },
  {
    lines: [lines[MtaLineName.TWO], lines[MtaLineName.THREE]],
    name: "116th St",
    coordinates: [[-73.94962500096905, 40.802097999133004]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "Tremont Ave",
    coordinates: [[-73.90522700122354, 40.850409999510234]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "137th St - City College",
    coordinates: [[-73.95367600087873, 40.82200799968475]],
  },
  {
    lines: [lines[MtaLineName.THREE]],
    name: "145th St",
    coordinates: [[-73.93624499873299, 40.82042099969279]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "176th St",
    coordinates: [[-73.91179399884471, 40.8484800012369]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "Burnside Ave",
    coordinates: [[-73.9076840015997, 40.85345300155693]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "170th St",
    coordinates: [[-73.91339999846983, 40.83930599964156]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "181st St",
    coordinates: [[-73.9335959996056, 40.84950499974065]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "191st St",
    coordinates: [[-73.92941199742039, 40.85522500175836]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "175th St",
    coordinates: [[-73.93970399761596, 40.84739100072403]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Beach 44th St",
    coordinates: [[-73.77601299999507, 40.59294299908617]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Beach 60th St",
    coordinates: [[-73.7885219980118, 40.59237400121235]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.S]],
    name: "Beach 98th St",
    coordinates: [[-73.82052058959523, 40.58538569133279]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.S]],
    name: "Rockaway Park - Beach 116 St",
    coordinates: [[-73.83559008701239, 40.580955865573515]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Beach 36th St",
    coordinates: [[-73.76817499939688, 40.59539800166876]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Beach 25th St",
    coordinates: [[-73.76135299762073, 40.60006600105881]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Parsons Blvd",
    coordinates: [[-73.80328900021885, 40.707571999615695]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "169th St",
    coordinates: [[-73.79347419927721, 40.710517502784]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "103rd St - Corona Plaza",
    coordinates: [[-73.86269999830412, 40.749865000555545]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "111th St",
    coordinates: [[-73.85533399834884, 40.75172999941711]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "63rd Dr - Rego Park",
    coordinates: [[-73.86161820097203, 40.729763972422425]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Grant Ave",
    coordinates: [[-73.86504999877702, 40.67704400054478]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "79th St",
    coordinates: [[-73.97991700056134, 40.78393399959032]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Atlantic Ave",
    coordinates: [[-73.9030969995401, 40.67534466640805]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "Christopher St - Sheridan Sq",
    coordinates: [[-74.00290599855235, 40.73342200104225]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Ozone Park - Lefferts Blvd",
    coordinates: [[-73.82579799906613, 40.68595099878361]],
  },
  {
    lines: [lines[MtaLineName.F], lines[MtaLineName.Q]],
    name: "W 8th St - NY Aquarium",
    coordinates: [[-73.97595787413822, 40.576033818103646]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "28th St",
    coordinates: [[-73.99336500134324, 40.74721499918219]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "28th St",
    coordinates: [[-73.98426400110407, 40.743069999259035]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Pelham Bay Park",
    coordinates: [[-73.82812100059289, 40.85246199951662]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Westchester Sq - E Tremont Ave",
    coordinates: [[-73.84295199925012, 40.839892001013915]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "18th St",
    coordinates: [[-73.99787100060406, 40.741039999802105]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Beach 67th St",
    coordinates: [[-73.7969239998421, 40.59092700078133]],
  },
  {
    lines: [
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.E],
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.F],
      lines[MtaLineName.M],
    ],
    name: "W 4th St - Washington Sq",
    coordinates: [
      [-74.00049500225435, 40.73233799774325],
      [-74.00030814755975, 40.732254493367876],
    ],
  },
  {
    lines: [lines[MtaLineName.J]],
    name: "85th St - Forest Pky",
    coordinates: [[-73.86008700006875, 40.69242699966103]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Woodhaven Blvd",
    coordinates: [[-73.85205199740794, 40.69370399880105]],
  },
  {
    lines: [lines[MtaLineName.J]],
    name: "111th St",
    coordinates: [[-73.83679338454697, 40.697114810696476]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "121st St",
    coordinates: [[-73.82834900017954, 40.700481998515315]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Halsey St",
    coordinates: [[-73.90393400118631, 40.69551800114878]],
  },
  {
    lines: [lines[MtaLineName.L], lines[MtaLineName.M]],
    name: "Myrtle - Wyckoff Aves",
    coordinates: [
      [-73.9109757182647, 40.699471062427136],
      [-73.91217899939602, 40.69945400090837],
    ],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "New Lots Ave",
    coordinates: [[-73.88411070800329, 40.6663149325969]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Van Siclen Ave",
    coordinates: [[-73.8903580002471, 40.67270999906104]],
  },
  {
    lines: [lines[MtaLineName.J]],
    name: "Cleveland St",
    coordinates: [[-73.8851940021643, 40.679777998961164]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Livonia Ave",
    coordinates: [[-73.90056237226057, 40.66405727094644]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Junius St",
    coordinates: [[-73.90244864183562, 40.66358900181724]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Rockaway Ave",
    coordinates: [[-73.90895833584449, 40.66261748815223]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Canarsie - Rockaway Pkwy",
    coordinates: [[-73.90185000017287, 40.64665366739528]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "E 105th St",
    coordinates: [[-73.89954769388724, 40.65046878544699]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Saratoga Ave",
    coordinates: [[-73.91633025007947, 40.6615297898075]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Sutter Ave - Rutland Road",
    coordinates: [[-73.92252118536001, 40.66476678877493]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "New Lots Ave",
    coordinates: [[-73.89927796057142, 40.65891477368527]],
  },
  {
    lines: [
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.J],
      lines[MtaLineName.Z],
      lines[MtaLineName.L],
    ],
    name: "Broadway Junction",
    coordinates: [
      [-73.90428999746412, 40.67936600147369],
      [-73.90311757920684, 40.67845624842869],
      [-73.90531600055341, 40.67833366608023],
    ],
  },
  {
    lines: [lines[MtaLineName.J]],
    name: "Alabama Ave",
    coordinates: [[-73.89852600159652, 40.676998000003756]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Shepherd Ave",
    coordinates: [[-73.88074999747269, 40.6741300014559]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Crescent St",
    coordinates: [[-73.87392925215778, 40.68315265707736]],
  },
  {
    lines: [lines[MtaLineName.J]],
    name: "Cypress Hills",
    coordinates: [[-73.87332199882995, 40.689616000838754]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "75th St - Eldert Ln",
    coordinates: [[-73.86728799944963, 40.691290001246735]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "69th St",
    coordinates: [[-73.8964029993185, 40.746324999410284]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "Woodhaven Blvd - Queens Mall",
    coordinates: [[-73.86943208612348, 40.73309737380972]],
  },
  {
    lines: [lines[MtaLineName.M]],
    name: "Seneca Ave",
    coordinates: [[-73.90758199885423, 40.70291899894902]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "DeKalb Ave",
    coordinates: [[-73.91823200219723, 40.70369299961644]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "52nd St",
    coordinates: [[-73.91254899891254, 40.744149001021576]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "46th St",
    coordinates: [[-73.91352174995538, 40.756316952608096]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "Northern Blvd",
    coordinates: [[-73.90606508052358, 40.752824829236076]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "46th St",
    coordinates: [[-73.91843500103973, 40.74313200060382]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "82nd St - Jackson Hts",
    coordinates: [[-73.88369700071884, 40.747658999559135]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "90th St - Elmhurst Av",
    coordinates: [[-73.87661299986985, 40.74840800060913]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Howard Beach - JFK Airport",
    coordinates: [[-73.83030100071032, 40.66047600004959]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Aqueduct - North Conduit Av",
    coordinates: [[-73.83405799948723, 40.668234001699815]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.F]],
    name: "Briarwood - Van Wyck Blvd",
    coordinates: [[-73.82069263637443, 40.70916181536946]],
  },
  {
    lines: [
      lines[MtaLineName.E],
      lines[MtaLineName.F],
      lines[MtaLineName.M],
      lines[MtaLineName.R],
    ],
    name: "Forest Hills - 71st Av",
    coordinates: [[-73.84451672012669, 40.72159430953587]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Sutphin Blvd",
    coordinates: [[-73.81083299897232, 40.70541799906764]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Jamaica Ctr - Parsons / Archer",
    coordinates: [[-73.80109632298924, 40.70206737621188]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "225th St",
    coordinates: [[-73.86021461772737, 40.88802825863786]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "Elder Ave",
    coordinates: [[-73.87915899874777, 40.82858400108929]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "Longwood Ave",
    coordinates: [[-73.89643499897414, 40.816103999972405]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.W]],
    name: "Astoria Blvd",
    coordinates: [[-73.91809500109238, 40.77003699949086]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.W]],
    name: "Astoria - Ditmars Blvd",
    coordinates: [[-73.9120340001031, 40.775035666523664]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Jackson Ave",
    coordinates: [[-73.9077019387083, 40.81643746686396]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Prospect Ave",
    coordinates: [[-73.90177778730917, 40.81948726483844]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "Cypress Ave",
    coordinates: [[-73.91404199994753, 40.8053680007636]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "174th St",
    coordinates: [[-73.88769359812888, 40.837195550170605]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Allerton Ave",
    coordinates: [[-73.86723422851625, 40.86548337793927]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "E 143rd St - St Mary's St",
    coordinates: [[-73.90765699936489, 40.80871900090143]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "Kingsbridge Rd",
    coordinates: [[-73.89717400101743, 40.867760000885795]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "Bedford Park Blvd - Lehman College",
    coordinates: [[-73.89006400069478, 40.87341199980121]],
  },
  {
    lines: [lines[MtaLineName.THREE]],
    name: "Harlem - 148 St",
    coordinates: [[-73.93647000005559, 40.82388000080457]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "Mt Eden Ave",
    coordinates: [[-73.9146849986034, 40.84443400092679]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "Fordham Rd",
    coordinates: [[-73.89774900102401, 40.861295998683495]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "170th St",
    coordinates: [[-73.91779099745928, 40.84007499993004]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "Bedford Park Blvd",
    coordinates: [[-73.88713799889574, 40.87324399861646]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "Marble Hill - 225th St",
    coordinates: [[-73.90983099923551, 40.87456099941789]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "231st St",
    coordinates: [[-73.90483400107873, 40.87885599817935]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "215th St",
    coordinates: [[-73.91527899954356, 40.86944399946045]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "207th St",
    coordinates: [[-73.91881900132312, 40.864614000525854]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Inwood - 207th St",
    coordinates: [[-73.91989900100465, 40.86807199999737]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "Van Cortlandt Park - 242nd St",
    coordinates: [[-73.89858300049647, 40.88924800011476]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "West Farms Sq - E Tremont Av",
    coordinates: [[-73.87996127877184, 40.84020763241799]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "219th St",
    coordinates: [[-73.8625097078866, 40.883887974625274]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "Mosholu Pkwy",
    coordinates: [[-73.88465499988732, 40.87974999947229]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "Norwood - 205th St",
    coordinates: [[-73.87885499918691, 40.87481100011182]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "Burke Ave",
    coordinates: [[-73.86705361747603, 40.87125880254771]],
  },
  {
    lines: [lines[MtaLineName.FIVE]],
    name: "Baychester Ave",
    coordinates: [[-73.83859099802153, 40.87866300037311]],
  },
  {
    lines: [lines[MtaLineName.FIVE]],
    name: "Eastchester - Dyre Ave",
    coordinates: [[-73.8308340021742, 40.88829999901007]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Jamaica - 179th St",
    coordinates: [[-73.78381700176453, 40.712645666744045]],
  },
  {
    lines: [lines[MtaLineName.TWO]],
    name: "Wakefield - 241st St",
    coordinates: [[-73.8506199987954, 40.903125000541245]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Bushwick - Aberdeen",
    coordinates: [[-73.90526176305106, 40.68286062551184]],
  },
  {
    lines: [lines[MtaLineName.FIVE]],
    name: "Gun Hill Rd",
    coordinates: [[-73.84638400151765, 40.86952599962676]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "E 180th St",
    coordinates: [[-73.87334609510884, 40.8418630412186]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "Dyckman St",
    coordinates: [[-73.92553600006474, 40.86053100138796]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "125th St",
    coordinates: [[-73.95837200097044, 40.815580999978934]],
  },
  {
    lines: [
      lines[MtaLineName.FIVE],
      lines[MtaLineName.FOUR],
      lines[MtaLineName.TWO],
    ],
    name: "149th St - Grand Concourse",
    coordinates: [
      [-73.92672247438611, 40.81833014409742],
      [-73.9273847542618, 40.81830344372315],
    ],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "3rd Ave - 149th St",
    coordinates: [[-73.91779152760981, 40.816029252510006]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "167th St",
    coordinates: [[-73.92139999784426, 40.83553699933672]],
  },
  {
    lines: [lines[MtaLineName.SIX]],
    name: "Brook Ave",
    coordinates: [[-73.91923999909432, 40.80756599987699]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "33rd St",
    coordinates: [[-73.93099699953838, 40.74458699983993]],
  },
  {
    lines: [lines[MtaLineName.SEVEN]],
    name: "40th St",
    coordinates: [[-73.9240159984882, 40.74378100149132]],
  },
  {
    lines: [
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.B],
      lines[MtaLineName.D],
    ],
    name: "145th St",
    coordinates: [[-73.94408792823116, 40.824766360871905]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "155th St",
    coordinates: [[-73.93820899811622, 40.8301349999812]],
  },
  {
    lines: [
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.FOUR],
    ],
    name: "161st St - Yankee Stadium",
    coordinates: [
      [-73.92565099775477, 40.827904998845845],
      [-73.92569199505733, 40.82823032742169],
    ],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Utica Ave",
    coordinates: [[-73.93072899914027, 40.67936399950546]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "Steinway St",
    coordinates: [[-73.9205264716827, 40.75698735912575]],
  },
  {
    lines: [lines[MtaLineName.J]],
    name: "Kosciuszko St",
    coordinates: [[-73.92850899927413, 40.69317200129202]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Gates Ave",
    coordinates: [[-73.92215600150752, 40.689583999013905]],
  },
  {
    lines: [lines[MtaLineName.M]],
    name: "Central Ave",
    coordinates: [[-73.92724299902838, 40.69787300011831]],
  },
  {
    lines: [lines[MtaLineName.M]],
    name: "Knickerbocker Ave",
    coordinates: [[-73.91972000188625, 40.69866000123805]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.W]],
    name: "30th Ave",
    coordinates: [[-73.9214790001739, 40.76677866673298]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Jefferson St",
    coordinates: [[-73.9229130000312, 40.706606665988716]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "Morgan Ave",
    coordinates: [[-73.93314700024209, 40.70615166680729]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.M], lines[MtaLineName.R]],
    name: "Queens Plz",
    coordinates: [[-73.93713823965695, 40.74891771986323]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "18th Ave",
    coordinates: [[-73.97697099965796, 40.62975466638584]],
  },
  {
    lines: [lines[MtaLineName.R]],
    name: "77th St",
    coordinates: [[-74.0255099996266, 40.629741666886915]],
  },
  {
    lines: [lines[MtaLineName.R]],
    name: "Bay Ridge Ave",
    coordinates: [[-74.02337699950728, 40.63496666682377]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "50th St",
    coordinates: [[-73.9946587805514, 40.636260890961395]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "Ft Hamilton Pkwy",
    coordinates: [[-74.00535100046275, 40.63138566722445]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "25th Ave",
    coordinates: [[-73.98682900011477, 40.59770366695856]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "Bay Pky",
    coordinates: [[-73.9936762000529, 40.601950461572315]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "20th Ave",
    coordinates: [[-73.98452199846113, 40.617108999866005]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "18th Ave",
    coordinates: [[-73.99045399865993, 40.620686997680025]],
  },
  {
    lines: [lines[MtaLineName.R]],
    name: "Bay Ridge - 95th St",
    coordinates: [[-74.03087600085765, 40.61662166725951]],
  },
  {
    lines: [lines[MtaLineName.R]],
    name: "86th St",
    coordinates: [[-74.0283979999864, 40.62268666715025]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "79th St",
    coordinates: [[-74.00058287431507, 40.61315892569516]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "71st St",
    coordinates: [[-73.99884094850685, 40.61925870977273]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "20th Ave",
    coordinates: [[-73.99817432157568, 40.60467699816932]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "18th Ave",
    coordinates: [[-74.00159259239406, 40.60773573171741]],
  },
  {
    lines: [lines[MtaLineName.D], lines[MtaLineName.N]],
    name: "62nd St/New Utrecht Ave",
    coordinates: [
      [-73.99685724994863, 40.626224462922195],
      [-73.99635300025969, 40.62484166725887],
    ],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Ave U",
    coordinates: [[-73.97337641974885, 40.59592482551748]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Kings Hwy",
    coordinates: [[-73.9723553085244, 40.603258405128265]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.Q]],
    name: "Brighton Beach",
    coordinates: [[-73.96135378598797, 40.577710196642435]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.Q]],
    name: "Sheepshead Bay",
    coordinates: [[-73.95405791257907, 40.58654754707536]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Ave U",
    coordinates: [[-73.95581122316301, 40.59930895095475]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.Q]],
    name: "Kings Hwy",
    coordinates: [[-73.95760873538083, 40.608638645396006]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "Ave U",
    coordinates: [[-73.97908400099428, 40.597235999920436]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "Kings Hwy",
    coordinates: [[-73.98037300229343, 40.60405899980493]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Neptune Ave",
    coordinates: [[-73.97459272818807, 40.580738758491464]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Ave X",
    coordinates: [[-73.97426599968905, 40.589449666625285]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "Bay 50th St",
    coordinates: [[-73.98376500045946, 40.58884066651933]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "Gravesend - 86th St",
    coordinates: [[-73.97818899936274, 40.59246500088859]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Ave P",
    coordinates: [[-73.97300281528751, 40.608842808949916]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Ave N",
    coordinates: [[-73.97404850873143, 40.61435671190883]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Bay Pky",
    coordinates: [[-73.9752569782215, 40.62073162316788]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Ave M",
    coordinates: [[-73.9592431052215, 40.617397744443736]],
  },
  {
    lines: [lines[MtaLineName.N]],
    name: "Bay Pky",
    coordinates: [[-73.98178001069293, 40.61145578989005]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Ave I",
    coordinates: [[-73.97606933170925, 40.62501744019143]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Ave J",
    coordinates: [[-73.96069316246925, 40.625022819915166]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Ave H",
    coordinates: [[-73.96151793942495, 40.62920837758969]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Neck Rd",
    coordinates: [[-73.95507827493762, 40.59532169111695]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "21st St - Queensbridge",
    coordinates: [[-73.94193761457447, 40.75373927087553]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.E]],
    name: "50th St",
    coordinates: [[-73.98598400026407, 40.76245599925997]],
  },
  {
    lines: [lines[MtaLineName.E], lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "7th Ave",
    coordinates: [[-73.98169782344476, 40.76297015245628]],
  },
  {
    lines: [
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.F],
      lines[MtaLineName.M],
    ],
    name: "47th-50th Sts - Rockefeller Ctr",
    coordinates: [[-73.98133100227702, 40.75864100159815]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "57th St",
    coordinates: [[-73.97736800085171, 40.76408500081713]],
  },
  {
    lines: [lines[MtaLineName.F], lines[MtaLineName.Q]],
    name: "Lexington Ave - 63rd St",
    coordinates: [[-73.96608964413245, 40.76461809442373]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Roosevelt Island - Main St",
    coordinates: [[-73.95323499978866, 40.75917199967108]],
  },
  {
    lines: [
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "49th St",
    coordinates: [[-73.98420956591096, 40.759801973870694]],
  },
  {
    lines: [
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "57th St",
    coordinates: [[-73.98072973372128, 40.76456552501829]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.R], lines[MtaLineName.W]],
    name: "5th Ave - 59th St",
    coordinates: [[-73.97334700047045, 40.764810999755284]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
      lines[MtaLineName.N],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "Lexington Ave - 59th St",
    coordinates: [
      [-73.96737501711436, 40.762708855394564],
      [-73.9679670004732, 40.762526000304575],
    ],
  },
  {
    lines: [
      lines[MtaLineName.ONE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "34th St - Penn Station",
    coordinates: [[-73.99105699913983, 40.75037300003949]],
  },
  {
    lines: [
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.J],
      lines[MtaLineName.Z],
    ],
    name: "Fulton St",
    coordinates: [
      [-74.00657099970202, 40.70941599925865],
      [-74.00762309323994, 40.71016216530185],
      [-74.00793800110387, 40.71002266658424],
      [-74.00950899856461, 40.710367998822136],
    ],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Myrtle-Willoughby Aves",
    coordinates: [[-73.94906699890156, 40.69461899903765]],
  },
  {
    lines: [lines[MtaLineName.G]],
    name: "Flushing Ave",
    coordinates: [[-73.9502340010257, 40.70037666622154]],
  },
  {
    lines: [lines[MtaLineName.F], lines[MtaLineName.M]],
    name: "23rd St",
    coordinates: [[-73.99276500471389, 40.742954317826005]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.G]],
    name: "Hoyt - Schermerhorn Sts",
    coordinates: [[-73.98503624034139, 40.68840847580642]],
  },
  {
    lines: [
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.F],
      lines[MtaLineName.R],
    ],
    name: "Jay St - MetroTech",
    coordinates: [
      [-73.98721815267317, 40.692470636847084],
      [-73.98605667854612, 40.69225539645323],
    ],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "East Broadway",
    coordinates: [[-73.99017700122197, 40.713855001020406]],
  },
  {
    lines: [
      lines[MtaLineName.J],
      lines[MtaLineName.Z],
      lines[MtaLineName.M],
      lines[MtaLineName.F],
    ],
    name: "Delancey St - Essex St",
    coordinates: [
      [-73.98740940202974, 40.71830605618619],
      [-73.98807806807719, 40.71868074219453],
    ],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "Lower East Side - 2nd Ave",
    coordinates: [[-73.98993800003434, 40.72340166574911]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.M]],
    name: "Flushing Ave",
    coordinates: [[-73.94137734838365, 40.70040440298112]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z], lines[MtaLineName.M]],
    name: "Myrtle Ave",
    coordinates: [[-73.9356230012996, 40.6971950005145]],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F], lines[MtaLineName.R]],
    name: "4th Av - 9th St",
    coordinates: [
      [-73.98977899938897, 40.67027166728493],
      [-73.98830199974512, 40.670846666842756],
    ],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F]],
    name: "Smith - 9th Sts",
    coordinates: [[-73.99589172790934, 40.67364106090412]],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F]],
    name: "Bergen St",
    coordinates: [[-73.99075649573565, 40.68611054725977]],
  },
  {
    lines: [
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "23rd St",
    coordinates: [[-73.98934400102907, 40.74130266729]],
  },
  {
    lines: [lines[MtaLineName.D], lines[MtaLineName.N], lines[MtaLineName.R]],
    name: "Prospect Ave",
    coordinates: [[-73.99287200067424, 40.66541366712979]],
  },
  {
    lines: [lines[MtaLineName.L]],
    name: "3rd Ave",
    coordinates: [[-73.98575000112093, 40.73269099971662]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Liberty Ave",
    coordinates: [[-73.89654800103929, 40.67454199987086]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.R]],
    name: "59th St",
    coordinates: [[-74.01788099953987, 40.6413616662838]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.R]],
    name: "45th St",
    coordinates: [[-74.01000600074939, 40.648938666612814]],
  },
  {
    lines: [lines[MtaLineName.D], lines[MtaLineName.N], lines[MtaLineName.R]],
    name: "36th St",
    coordinates: [[-74.00354899951809, 40.65514366633887]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "9th Ave",
    coordinates: [[-73.99444874451204, 40.64648407726636]],
  },
  {
    lines: [lines[MtaLineName.N], lines[MtaLineName.R]],
    name: "53rd St",
    coordinates: [[-74.01403399986317, 40.64506866735981]],
  },
  {
    lines: [lines[MtaLineName.D]],
    name: "Ft Hamilton Pkwy",
    coordinates: [[-73.9942022375285, 40.640912711444656]],
  },
  {
    lines: [lines[MtaLineName.D], lines[MtaLineName.N], lines[MtaLineName.R]],
    name: "25th St",
    coordinates: [[-73.99809099974297, 40.66039666692321]],
  },
  {
    lines: [lines[MtaLineName.G], lines[MtaLineName.F]],
    name: "Carroll St",
    coordinates: [[-73.99494697998841, 40.68027335170176]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.E]],
    name: "Spring St",
    coordinates: [[-74.00373899843763, 40.72622700129312]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "181st St",
    coordinates: [[-73.93796900205011, 40.851694999744616]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "190th St",
    coordinates: [[-73.93417999964333, 40.85902199892482]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "116th St",
    coordinates: [[-73.95479778057312, 40.80505813344211]],
  },
  {
    lines: [
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.B],
      lines[MtaLineName.D],
    ],
    name: "125th St",
    coordinates: [[-73.95224799734774, 40.811071672994565]],
  },
  {
    lines: [
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "Prince St",
    coordinates: [[-73.99770200045987, 40.72432866597571]],
  },
  {
    lines: [
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "8th St - NYU",
    coordinates: [[-73.99250799849149, 40.73046499853991]],
  },
  {
    lines: [
      lines[MtaLineName.ONE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
    ],
    name: "Chambers St",
    coordinates: [[-74.00926600170112, 40.71547800011327]],
  },
  {
    lines: [lines[MtaLineName.TWO], lines[MtaLineName.THREE]],
    name: "Hoyt St",
    coordinates: [[-73.98506379575646, 40.69054418535472]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "183rd St",
    coordinates: [[-73.90387900151532, 40.85840700040842]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "Fordham Rd",
    coordinates: [[-73.90103399921699, 40.86280299988937]],
  },
  {
    lines: [
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.E],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "Chambers St - World Trade Center/Park Pl/Cortlandt St",
    coordinates: [
      [-74.00974461517701, 40.71256392680817],
      [-74.00881099997359, 40.713050999077694],
      [-74.01113196473266, 40.7105129841524],
    ],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.E]],
    name: "Canal St - Holland Tunnel",
    coordinates: [[-74.0052290023424, 40.72082400007119]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "155th St",
    coordinates: [[-73.94151400082208, 40.83051799929251]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "163rd St - Amsterdam Av",
    coordinates: [[-73.93989200188344, 40.83601299923096]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
      lines[MtaLineName.J],
      lines[MtaLineName.Z],
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
      lines[MtaLineName.R],
      lines[MtaLineName.W],
    ],
    name: "Canal St",
    coordinates: [
      [-74.00019299927328, 40.71880300107709],
      [-73.99982638545937, 40.71817387697391],
      [-74.0018260000577, 40.71946500105898],
      [-74.00105471306033, 40.718814263587134],
    ],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.R], lines[MtaLineName.W]],
    name: "South Ferry/Whitehall St",
    coordinates: [
      [-74.01316895919258, 40.701730507574474],
      [-74.0130072374272, 40.703142373599135],
    ],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.FIVE]],
    name: "Bowling Green",
    coordinates: [[-74.01400799803432, 40.70491399928076]],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.FIVE]],
    name: "Wall St",
    coordinates: [[-74.01186199860112, 40.70755700086603]],
  },
  {
    lines: [lines[MtaLineName.R], lines[MtaLineName.W]],
    name: "Rector St",
    coordinates: [[-74.01297456253795, 40.707744756294474]],
  },
  {
    lines: [lines[MtaLineName.M]],
    name: "Fresh Pond Rd",
    coordinates: [[-73.8958980017196, 40.70622599823048]],
  },
  {
    lines: [lines[MtaLineName.M]],
    name: "Middle Village - Metropolitan Ave",
    coordinates: [[-73.88957722978091, 40.711431305058255]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "Rector St",
    coordinates: [[-74.01378300119742, 40.707512999521775]],
  },
  {
    lines: [lines[MtaLineName.ONE]],
    name: "Cortlandt St",
    coordinates: [[-74.01218800112292, 40.7118350008202]],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Broad St",
    coordinates: [[-74.01105599991755, 40.706476001106005]],
  },
  {
    lines: [lines[MtaLineName.TWO], lines[MtaLineName.THREE]],
    name: "Wall St",
    coordinates: [[-74.00909999844257, 40.706820999753376]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "Dyckman St",
    coordinates: [[-73.92727099960726, 40.865490998968916]],
  },
  {
    lines: [lines[MtaLineName.B], lines[MtaLineName.D]],
    name: "Grand St",
    coordinates: [[-73.99375299913589, 40.71826699954992]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.F],
      lines[MtaLineName.M],
    ],
    name: "Broadway - Lafayette St/Bleeker St",
    coordinates: [
      [-73.99620399876055, 40.725296998738045],
      [-73.99465900006331, 40.72591466682659],
    ],
  },
  {
    lines: [lines[MtaLineName.J], lines[MtaLineName.Z]],
    name: "Bowery",
    coordinates: [[-73.99380690654237, 40.720246883147254]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.E]],
    name: "23rd St",
    coordinates: [[-73.99804100117201, 40.74590599939995]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.E]],
    name: "34th St - Penn Station",
    coordinates: [[-73.99339099970578, 40.752287000775894]],
  },
  {
    lines: [
      lines[MtaLineName.SEVEN],
      lines[MtaLineName.E],
      lines[MtaLineName.F],
      lines[MtaLineName.M],
      lines[MtaLineName.R],
    ],
    name: "Jackson Hts - Roosevelt Av/74th St - Broadway",
    coordinates: [
      [-73.89129866519697, 40.74653969115889],
      [-73.8912051289911, 40.746867573829114],
    ],
  },
  {
    lines: [
      lines[MtaLineName.ONE],
      lines[MtaLineName.TWO],
      lines[MtaLineName.THREE],
      lines[MtaLineName.F],
      lines[MtaLineName.F_EXPRESS],
      lines[MtaLineName.M],
      lines[MtaLineName.L],
    ],
    name: "14th St/6th Ave",
    coordinates: [
      [-73.99620899921355, 40.73822799969515],
      [-74.00020100063497, 40.737825999728116],
      [-73.99775078874781, 40.73774146981052],
    ],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C], lines[MtaLineName.B]],
    name: "135th St",
    coordinates: [[-73.94753480879213, 40.817905559212676]],
  },
  {
    lines: [
      lines[MtaLineName.A],
      lines[MtaLineName.C],
      lines[MtaLineName.E],
      lines[MtaLineName.L],
    ],
    name: "14th St/8th Ave",
    coordinates: [
      [-74.00168999937027, 40.740893000193296],
      [-74.00257800104762, 40.73977666638199],
    ],
  },
  {
    lines: [lines[MtaLineName.FOUR], lines[MtaLineName.THREE]],
    name: "Nostrand Ave",
    coordinates: [[-73.9504262489579, 40.66993815093054]],
  },
  {
    lines: [lines[MtaLineName.TWO], lines[MtaLineName.THREE]],
    name: "Clark St",
    coordinates: [[-73.99308599821961, 40.69746599996469]],
  },
  {
    lines: [lines[MtaLineName.C], lines[MtaLineName.S]],
    name: "Franklin Ave - Fulton St",
    coordinates: [
      [-73.95684800014614, 40.68137966658742],
      [-73.95582700110425, 40.68059566598263],
    ],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Clinton - Washington Aves",
    coordinates: [[-73.96583799857275, 40.68326299912644]],
  },
  {
    lines: [lines[MtaLineName.M]],
    name: "Forest Ave",
    coordinates: [[-73.90307500005954, 40.70441200087814]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "110th St",
    coordinates: [[-73.94424999687163, 40.795020000113105]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "86th St",
    coordinates: [[-73.95558899985132, 40.77949199820952]],
  },
  {
    lines: [lines[MtaLineName.F]],
    name: "York St",
    coordinates: [[-73.98688499993673, 40.699742667691574]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "High St",
    coordinates: [[-73.99053100065458, 40.69933699977884]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Lafayette Ave",
    coordinates: [[-73.97394599849406, 40.68611300020567]],
  },
  {
    lines: [lines[MtaLineName.FIVE], lines[MtaLineName.TWO]],
    name: "President St",
    coordinates: [[-73.95058920022207, 40.667883603536815]],
  },
  {
    lines: [lines[MtaLineName.FOUR]],
    name: "Woodlawn",
    coordinates: [[-73.87875099990931, 40.886037000253324]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "103rd St",
    coordinates: [[-73.94747800152219, 40.79060000008452]],
  },
  {
    lines: [lines[MtaLineName.A], lines[MtaLineName.C]],
    name: "Euclid Ave",
    coordinates: [[-73.87210600099675, 40.675376998239365]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "88th St",
    coordinates: [[-73.85147000026086, 40.67984300135503]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "Cortelyou Rd",
    coordinates: [[-73.96379005505493, 40.6409401651401]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "116th St",
    coordinates: [[-73.9416169983714, 40.7986290002001]],
  },
  {
    lines: [lines[MtaLineName.SIX], lines[MtaLineName.SIX_EXPRESS]],
    name: "Parkchester",
    coordinates: [[-73.86081600108396, 40.83322599927859]],
  },
  {
    lines: [lines[MtaLineName.ONE], lines[MtaLineName.TWO]],
    name: "Franklin St",
    coordinates: [[-74.00688600277107, 40.719318001302135]],
  },
  {
    lines: [lines[MtaLineName.A]],
    name: "80th St",
    coordinates: [[-73.85899200206335, 40.67937100115432]],
  },
  {
    lines: [
      lines[MtaLineName.SEVEN],
      lines[MtaLineName.SEVEN_EXPRESS],
      lines[MtaLineName.B],
      lines[MtaLineName.D],
      lines[MtaLineName.F],
      lines[MtaLineName.F_EXPRESS],
      lines[MtaLineName.M],
    ],
    name: "42nd St - Bryant Park/5th Ave",
    coordinates: [
      [-73.98196299856706, 40.75382100064824],
      [-73.98459099904711, 40.754184001312545],
    ],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "Spring St",
    coordinates: [[-73.99714100006673, 40.72230099999366]],
  },
  {
    lines: [
      lines[MtaLineName.FOUR],
      lines[MtaLineName.FIVE],
      lines[MtaLineName.SIX],
      lines[MtaLineName.SIX_EXPRESS],
    ],
    name: "125th St",
    coordinates: [[-73.93759400055725, 40.804138000587244]],
  },
  {
    lines: [
      lines[MtaLineName.D],
      lines[MtaLineName.F],
      lines[MtaLineName.N],
      lines[MtaLineName.Q],
    ],
    name: "Coney Island - Stillwell Av",
    coordinates: [[-73.9812359981396, 40.57728100006751]],
  },
  {
    lines: [lines[MtaLineName.SEVEN], lines[MtaLineName.SEVEN_EXPRESS]],
    name: "34th St - Hudson Yards",
    coordinates: [[-74.00219709442206, 40.75544635961596]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "72nd St",
    coordinates: [[-73.95836178682246, 40.76880251014895]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "86th St",
    coordinates: [[-73.95177090964917, 40.77786104333163]],
  },
  {
    lines: [lines[MtaLineName.Q]],
    name: "96th St",
    coordinates: [[-73.9470660219183, 40.784236650177654]],
  },
];

export const stationGuessData = [
  {
    station:
      "Times Sq - 42nd St/Port Authority Bus Terminal (1,2,3,7,7Exp,A,C,E,N,Q,R,W,S)",
    avgScore: 4818.7731481481442,
  },
  {
    station: "Grand Central - 42nd St (4,5,6,6Exp,7,7Exp,S)",
    avgScore: 4786.0593220338978,
  },
  {
    station: "59th St - Columbus Circle (1,A,C,B,D)",
    avgScore: 4768.9796747967466,
  },
  {
    station: "Union Sq - 14th St (4,5,6,6Exp,N,Q,R,W,L)",
    avgScore: 4719.4732142857147,
  },
  {
    station: "47th-50th Sts - Rockefeller Ctr (B,D,F,M)",
    avgScore: 4713.7289719626169,
  },
  {
    station: "Lexington Ave - 59th St (4,5,6,6Exp,N,R,W)",
    avgScore: 4695.925619834713,
  },
  {
    station: "86th St (4,5,6,6Exp)",
    avgScore: 4691.3060344827627,
  },
  {
    station: "50th St (A,C,E)",
    avgScore: 4681.0239043824677,
  },
  {
    station: "W 4th St - Washington Sq (A,C,E,B,D,F,M)",
    avgScore: 4660.4123711340235,
  },
  {
    station: "42nd St - Bryant Park/5th Ave (7,7Exp,B,D,F,FExp,M)",
    avgScore: 4659.7280334728039,
  },
  {
    station: "14th St/6th Ave (1,2,3,F,FExp,M,L)",
    avgScore: 4653.77551020408,
  },
  {
    station: "Lexington Ave - 53rd St/51st St (6,6Exp,E,M)",
    avgScore: 4653.1809954751116,
  },
  {
    station: "34th St - Penn Station (1,2,3)",
    avgScore: 4652.1026785714275,
  },
  {
    station: "23rd St (A,C,E)",
    avgScore: 4649.2355072463806,
  },
  {
    station: "34th St - Penn Station (A,C,E)",
    avgScore: 4646.9257812499964,
  },
  {
    station: "Herald Sq - 34th St (B,D,F,FExp,M,N,Q,R,W)",
    avgScore: 4640.7851239669408,
  },
  {
    station: "23rd St (1,2)",
    avgScore: 4635.6280000000024,
  },
  {
    station: "8th St - NYU (N,Q,R,W)",
    avgScore: 4621.3799126637578,
  },
  {
    station: "66th St - Lincoln Ctr (1,2)",
    avgScore: 4617.8359375000045,
  },
  {
    station: "Lower East Side - 2nd Ave (F)",
    avgScore: 4616.4922480620162,
  },
  {
    station: "28th St (4,6,6Exp)",
    avgScore: 4616.3438914027165,
  },
  {
    station: "Broadway - Lafayette St/Bleeker St (4,6,6Exp,B,D,F,M)",
    avgScore: 4606.1620370370329,
  },
  {
    station: "Central Park North (110th St) (2,3)",
    avgScore: 4602.8418803418781,
  },
  {
    station: "57th St (N,Q,R,W)",
    avgScore: 4599.6172839506207,
  },
  {
    station: "125th St (4,5,6,6Exp)",
    avgScore: 4598.7279151943467,
  },
  {
    station: "Lexington Ave - 63rd St (F,Q)",
    avgScore: 4595.0000000000027,
  },
  {
    station: "23rd St (4,6,6Exp)",
    avgScore: 4591.5546558704436,
  },
  {
    station: "103rd St (1)",
    avgScore: 4590.8391304347824,
  },
  {
    station: "96th St (4,6,6Exp)",
    avgScore: 4589.637554585147,
  },
  {
    station: "34th St - Hudson Yards (7,7Exp)",
    avgScore: 4587.0897959183685,
  },
  {
    station: "96th St (1,2,3)",
    avgScore: 4585.1673819742491,
  },
  {
    station: "110th St (4,6,6Exp)",
    avgScore: 4578.553846153849,
  },
  {
    station: "Canal St (4,6,6Exp,J,Z,N,Q,R,W)",
    avgScore: 4578.148471615722,
  },
  {
    station: "103rd St (4,6,6Exp)",
    avgScore: 4576.94761904762,
  },
  {
    station:
      "Chambers St - World Trade Center/Park Pl/Cortlandt St (2,3,A,C,E,R,W)",
    avgScore: 4566.98312236287,
  },
  {
    station: "79th St (1,2)",
    avgScore: 4561.6454183266951,
  },
  {
    station: "116th St - Columbia University (1)",
    avgScore: 4558.3703703703695,
  },
  {
    station: "Wall St (4,5)",
    avgScore: 4557.9502074688808,
  },
  {
    station: "96th St (A,C,B)",
    avgScore: 4554.9757085020256,
  },
  {
    station: "Wall St (2,3)",
    avgScore: 4553.4375,
  },
  {
    station: "Canal St (1,2)",
    avgScore: 4549.6033755274257,
  },
  {
    station: "77th St (4,6,6Exp)",
    avgScore: 4547.2062780269071,
  },
  {
    station: "South Ferry/Whitehall St (1,R,W)",
    avgScore: 4544.920560747667,
  },
  {
    station: "5th Ave - 59th St (N,R,W)",
    avgScore: 4541.5922746781116,
  },
  {
    station: "14th St/8th Ave (A,C,E,L)",
    avgScore: 4540.1396396396367,
  },
  {
    station: "116th St (4,6,6Exp)",
    avgScore: 4539.3333333333321,
  },
  {
    station: "86th St (1,2)",
    avgScore: 4520.5900900900924,
  },
  {
    station: "18th St (1,2)",
    avgScore: 4519.85344827586,
  },
  {
    station: "28th St (1,2)",
    avgScore: 4511.1324200913214,
  },
  {
    station: "68th St - Hunter College (4,6,6Exp)",
    avgScore: 4510.0086580086572,
  },
  {
    station: "125th St (A,C,B,D)",
    avgScore: 4496.7411764705857,
  },
  {
    station: "50th St (1,2)",
    avgScore: 4484.2844036697243,
  },
  {
    station: "81st St (A,C,B)",
    avgScore: 4484.1627906976746,
  },
  {
    station: "33rd St (4,6,6Exp)",
    avgScore: 4478.3957446808508,
  },
  {
    station: "Spring St (A,C,E)",
    avgScore: 4472.2027649769589,
  },
  {
    station: "116th St (2,3)",
    avgScore: 4468.8376068376019,
  },
  {
    station: "23rd St (N,Q,R,W)",
    avgScore: 4465.3660714285716,
  },
  {
    station: "Prince St (N,Q,R,W)",
    avgScore: 4464.27188940092,
  },
  {
    station: "86th St (A,C,B)",
    avgScore: 4460.0567685589485,
  },
  {
    station: "Cathedral Pkwy (110th St) (1)",
    avgScore: 4454.2616033755294,
  },
  {
    station: "72nd St (A,C,B)",
    avgScore: 4453.7131782945762,
  },
  {
    station: "116th St (A,C,B)",
    avgScore: 4441.1286307053924,
  },
  {
    station: "Brooklyn Bridge - City Hall/Chambers St (4,5,6,6Exp,J,Z)",
    avgScore: 4436.796536796538,
  },
  {
    station: "1st Ave (L)",
    avgScore: 4432.7763713080167,
  },
  {
    station: "Fulton St (2,3,4,5,A,C,J,Z)",
    avgScore: 4413.7768240343366,
  },
  {
    station: "125th St (2,3)",
    avgScore: 4407.15652173913,
  },
  {
    station: "5th Ave - 53rd St (E,M)",
    avgScore: 4404.3392070484551,
  },
  {
    station: "72nd St (1,2,3)",
    avgScore: 4403.78636363636,
  },
  {
    station: "Houston St (1,2)",
    avgScore: 4400.8594377510017,
  },
  {
    station: "28th St (N,Q,R,W)",
    avgScore: 4400.033613445381,
  },
  {
    station: "103rd St (A,C,B)",
    avgScore: 4399.5081967213118,
  },
  {
    station: "Roosevelt Island - Main St (F)",
    avgScore: 4390.6653386454218,
  },
  {
    station: "125th St (1)",
    avgScore: 4387.6863636363587,
  },
  {
    station: "Atlantic Av - Barclay\u0027s Center (4,5,2,3,B,D,N,Q,R,W)",
    avgScore: 4384.18067226891,
  },
  {
    station: "Chambers St (1,2,3)",
    avgScore: 4378.83137254902,
  },
  {
    station: "Prospect Park (B,S,Q)",
    avgScore: 4370.1612903225832,
  },
  {
    station: "3rd Ave (L)",
    avgScore: 4370.0535714285743,
  },
  {
    station: "Canal St - Holland Tunnel (A,C,E)",
    avgScore: 4367.4190871369292,
  },
  {
    station: "23rd St (F,M)",
    avgScore: 4366.771186440681,
  },
  {
    station: "49th St (N,Q,R,W)",
    avgScore: 4355.6,
  },
  {
    station: "135th St (A,C,B)",
    avgScore: 4352.626609442058,
  },
  {
    station: "Spring St (4,6,6Exp)",
    avgScore: 4331.1120689655145,
  },
  {
    station: "135th St (2,3)",
    avgScore: 4328.77990430622,
  },
  {
    station: "Cathedral Pkwy (110th St) (A,C,B)",
    avgScore: 4328.4599156118111,
  },
  {
    station: "Bowery (J,Z)",
    avgScore: 4328.3199999999988,
  },
  {
    station: "145th St (1)",
    avgScore: 4299.30666666667,
  },
  {
    station: "Christopher St - Sheridan Sq (1,2)",
    avgScore: 4289.9120000000066,
  },
  {
    station: "Harlem - 148 St (3)",
    avgScore: 4289.7428571428545,
  },
  {
    station: "Astor Pl (4,6,6Exp)",
    avgScore: 4275.0992063492076,
  },
  {
    station: "157th St (1)",
    avgScore: 4263.51923076923,
  },
  {
    station: "137th St - City College (1)",
    avgScore: 4249.3921568627475,
  },
  {
    station: "Delancey St - Essex St (J,Z,M,F)",
    avgScore: 4242.4199134199171,
  },
  {
    station: "Jay St - MetroTech (A,C,F,R)",
    avgScore: 4240.2467532467526,
  },
  {
    station: "Eastern Pkwy - Bklyn Museum (4,2,3)",
    avgScore: 4237.6521739130376,
  },
  {
    station: "72nd St (Q)",
    avgScore: 4228.2794759825338,
  },
  {
    station: "181st St (1)",
    avgScore: 4222.624,
  },
  {
    station: "57th St (F)",
    avgScore: 4209.0944881889754,
  },
  {
    station: "Court Sq - 23rd St (7,7Exp,E,M,G)",
    avgScore: 4207.27188940092,
  },
  {
    station: "155th St (A,C)",
    avgScore: 4195.3913043478251,
  },
  {
    station: "191st St (1)",
    avgScore: 4189.490990990992,
  },
  {
    station: "15th St - Prospect Park (G,F)",
    avgScore: 4182.3105022831041,
  },
  {
    station: "Borough Hall/Court St (2,3,4,5,R)",
    avgScore: 4177.6213991769582,
  },
  {
    station: "96th St (Q)",
    avgScore: 4173.95278969957,
  },
  {
    station: "145th St (A,C,B,D)",
    avgScore: 4168.0572687224667,
  },
  {
    station: "145th St (3)",
    avgScore: 4137.2911392405076,
  },
  {
    station: "190th St (A)",
    avgScore: 4135.9876543209893,
  },
  {
    station: "138th St - Grand Concourse (4,5)",
    avgScore: 4120.4525862068986,
  },
  {
    station: "149th St - Grand Concourse (5,4,2)",
    avgScore: 4112.6018957346005,
  },
  {
    station: "161st St - Yankee Stadium (B,D,4)",
    avgScore: 4111.4533898305053,
  },
  {
    station: "168th St (A,C,1)",
    avgScore: 4110.3835616438364,
  },
  {
    station: "163rd St - Amsterdam Av (A,C)",
    avgScore: 4099.8,
  },
  {
    station: "3rd Ave - 138th St (6,6Exp)",
    avgScore: 4084.6713615023477,
  },
  {
    station: "Grand St (B,D)",
    avgScore: 4061.8583690987143,
  },
  {
    station: "207th St (1)",
    avgScore: 4054.753086419752,
  },
  {
    station: "181st St (A)",
    avgScore: 4049.7008547008541,
  },
  {
    station: "Metropolitan Ave/Lorimer St (L,G)",
    avgScore: 4049.1116071428569,
  },
  {
    station: "86th St (Q)",
    avgScore: 4043.4915966386566,
  },
  {
    station: "Inwood - 207th St (A)",
    avgScore: 4033.6763285024149,
  },
  {
    station: "DeKalb Ave (B,D,N,Q,R)",
    avgScore: 4019.9458333333332,
  },
  {
    station: "Fulton St (G)",
    avgScore: 4015.167512690356,
  },
  {
    station: "Astoria - Ditmars Blvd (N,W)",
    avgScore: 4014.4713656387694,
  },
  {
    station: "Bedford Ave (L)",
    avgScore: 3985.7444933920697,
  },
  {
    station: "Queensboro Plz (7,7Exp,N,W)",
    avgScore: 3985.6225680933844,
  },
  {
    station: "Astoria Blvd (N,W)",
    avgScore: 3974.8592233009713,
  },
  {
    station: "Rector St (1)",
    avgScore: 3972.2663755458516,
  },
  {
    station: "167th St (4)",
    avgScore: 3970.0138888888891,
  },
  {
    station: "176th St (4)",
    avgScore: 3964.2583732057415,
  },
  {
    station: "215th St (1)",
    avgScore: 3962.1232876712324,
  },
  {
    station: "E 149th St (6)",
    avgScore: 3947.6824644549752,
  },
  {
    station: "Hoyt St (2,3)",
    avgScore: 3944.3211382113846,
  },
  {
    station: "Marble Hill - 225th St (1)",
    avgScore: 3925.4023437499991,
  },
  {
    station: "175th St (A)",
    avgScore: 3914.0186915887862,
  },
  {
    station: "170th St (4)",
    avgScore: 3904.143540669857,
  },
  {
    station: "Hoyt - Schermerhorn Sts (A,C,G)",
    avgScore: 3903.6637931034479,
  },
  {
    station: "Bowling Green (4,5)",
    avgScore: 3886.7107843137264,
  },
  {
    station: "3rd Ave - 149th St (5,2)",
    avgScore: 3880.2251082251073,
  },
  {
    station: "Greenpoint Ave (G)",
    avgScore: 3875.395744680849,
  },
  {
    station: "East Broadway (F)",
    avgScore: 3874.9918032786873,
  },
  {
    station: "Rector St (R,W)",
    avgScore: 3864.0726495726512,
  },
  {
    station: "E 143rd St - St Mary\u0027s St (6)",
    avgScore: 3846.8434782608711,
  },
  {
    station: "231st St (1)",
    avgScore: 3839.168888888888,
  },
  {
    station: "Myrtle Ave (J,Z,M)",
    avgScore: 3831.97356828194,
  },
  {
    station: "7th Ave (E,B,D)",
    avgScore: 3822.9905213270149,
  },
  {
    station: "Grand St (L)",
    avgScore: 3822.6277056277045,
  },
  {
    station: "155th St (B,D)",
    avgScore: 3813.5517241379289,
  },
  {
    station: "69th St (7)",
    avgScore: 3812.0941176470592,
  },
  {
    station: "21st St - Queensbridge (F)",
    avgScore: 3801.7574468085104,
  },
  {
    station: "Myrtle-Willoughby Aves (G)",
    avgScore: 3773.5315315315315,
  },
  {
    station: "Lorimer St (J,M)",
    avgScore: 3768.3267326732675,
  },
  {
    station: "82nd St - Jackson Hts (7)",
    avgScore: 3766.6919431279634,
  },
  {
    station: "Coney Island - Stillwell Av (D,F,N,Q)",
    avgScore: 3765.9203187251,
  },
  {
    station: "Bergen St (G,F)",
    avgScore: 3764.7542372881348,
  },
  {
    station: "Queens Plz (E,M,R)",
    avgScore: 3763.2789699570822,
  },
  {
    station: "Van Cortlandt Park - 242nd St (1)",
    avgScore: 3757.9149797570835,
  },
  {
    station: "Bedford - Nostrand Aves (G)",
    avgScore: 3749.9631336405537,
  },
  {
    station: "Grand Army Plaza (4,2,3)",
    avgScore: 3748.2808510638292,
  },
  {
    station: "Morgan Ave (L)",
    avgScore: 3747.2909090909088,
  },
  {
    station: "Classon Ave (G)",
    avgScore: 3745.9285714285725,
  },
  {
    station: "4th Av - 9th St (G,F,R)",
    avgScore: 3741.8302752293589,
  },
  {
    station: "Carroll St (G,F)",
    avgScore: 3740.8970588235306,
  },
  {
    station: "238th St (1)",
    avgScore: 3737.3728813559314,
  },
  {
    station: "Broadway (G)",
    avgScore: 3737.1173913043485,
  },
  {
    station: "Brighton Beach (B,Q)",
    avgScore: 3736.903508771928,
  },
  {
    station: "Franklin St (1,2)",
    avgScore: 3731.0958333333338,
  },
  {
    station: "Myrtle - Wyckoff Aves (L,M)",
    avgScore: 3727.2000000000003,
  },
  {
    station: "Prospect Ave (D,N,R)",
    avgScore: 3725.4716981132078,
  },
  {
    station: "Montrose Ave (L)",
    avgScore: 3715.9626168224304,
  },
  {
    station: "Graham Ave (L)",
    avgScore: 3711.44,
  },
  {
    station: "Woodhaven Blvd - Queens Mall (E,M,R)",
    avgScore: 3707.8207547169823,
  },
  {
    station: "Woodside - 61st St (7,7Exp)",
    avgScore: 3705.2227272727264,
  },
  {
    station: "Jackson Hts - Roosevelt Av/74th St - Broadway (7,E,F,M,R)",
    avgScore: 3704.08071748879,
  },
  {
    station: "Bushwick - Aberdeen (L)",
    avgScore: 3695.6651376146779,
  },
  {
    station: "DeKalb Ave (L)",
    avgScore: 3690.184834123223,
  },
  {
    station: "103rd St - Corona Plaza (7)",
    avgScore: 3685.9205020920513,
  },
  {
    station: "York St (F)",
    avgScore: 3680.7058823529419,
  },
  {
    station: "Smith - 9th Sts (G,F)",
    avgScore: 3673.0840707964589,
  },
  {
    station: "7th Ave (G,F)",
    avgScore: 3669.3761904761909,
  },
  {
    station: "High St (A,C)",
    avgScore: 3652.1309523809518,
  },
  {
    station: "Jefferson St (L)",
    avgScore: 3640.4951923076924,
  },
  {
    station: "167th St (B,D)",
    avgScore: 3640.2187500000009,
  },
  {
    station: "90th St - Elmhurst Av (7)",
    avgScore: 3632.4097560975611,
  },
  {
    station: "170th St (B,D)",
    avgScore: 3629.2606635071074,
  },
  {
    station: "Franklin Ave - Fulton St (C,S)",
    avgScore: 3624.0742358078619,
  },
  {
    station: "Clinton - Washington Aves (G)",
    avgScore: 3621.2397959183686,
  },
  {
    station: "Franklin Ave/Botanic Garden (4,5,2,3,S)",
    avgScore: 3619.3969465648861,
  },
  {
    station: "Nassau Ave (G)",
    avgScore: 3609.9141630901281,
  },
  {
    station: "Bergen St (4,2,3)",
    avgScore: 3605.279569892476,
  },
  {
    station: "46th St (7)",
    avgScore: 3602.7034220532328,
  },
  {
    station: "Crown Hts - Utica Ave (4,3)",
    avgScore: 3601.5447470817112,
  },
  {
    station: "33rd St (7)",
    avgScore: 3591.7477064220179,
  },
  {
    station: "Union St (D,N,R)",
    avgScore: 3587.6186440677975,
  },
  {
    station: "183rd St (4)",
    avgScore: 3584.212598425197,
  },
  {
    station: "Newkirk Ave (B,Q)",
    avgScore: 3580.1772727272714,
  },
  {
    station: "Wilson Ave (L)",
    avgScore: 3576.2315270935969,
  },
  {
    station: "Bronx Park East (5,2)",
    avgScore: 3573.9150943396207,
  },
  {
    station: "Broad St (J,Z)",
    avgScore: 3573.4978354978352,
  },
  {
    station: "Nevins St (4,5,2,3)",
    avgScore: 3553.590308370045,
  },
  {
    station: "Ft Hamilton Pkwy (G,F)",
    avgScore: 3552.8125000000014,
  },
  {
    station: "Nostrand Ave (A,C)",
    avgScore: 3546.8949771689495,
  },
  {
    station: "Clark St (2,3)",
    avgScore: 3544.2488888888865,
  },
  {
    station: "Halsey St (J)",
    avgScore: 3536.0138888888882,
  },
  {
    station: "40th St (7)",
    avgScore: 3524.9999999999995,
  },
  {
    station: "Brooklyn College - Flatbush Ave (5,2)",
    avgScore: 3519.7198275862065,
  },
  {
    station: "Ave H (Q)",
    avgScore: 3507.9999999999991,
  },
  {
    station: "Halsey St (L)",
    avgScore: 3506.0954545454529,
  },
  {
    station: "Mets - Willets Point (7,7Exp)",
    avgScore: 3495.3648068669554,
  },
  {
    station: "Steinway St (E,M,R)",
    avgScore: 3489.48275862069,
  },
  {
    station: "Broadway Junction (A,C,J,Z,L)",
    avgScore: 3484.1848739495808,
  },
  {
    station: "Parkside Ave (Q)",
    avgScore: 3483.9952830188672,
  },
  {
    station: "Kosciuszko St (J)",
    avgScore: 3482.3749999999977,
  },
  {
    station: "52nd St (7)",
    avgScore: 3480.9783549783547,
  },
  {
    station: "Middle Village - Metropolitan Ave (M)",
    avgScore: 3473.7117117117114,
  },
  {
    station: "Junction Blvd (7,7Exp)",
    avgScore: 3465.8095238095229,
  },
  {
    station: "Gates Ave (J,Z)",
    avgScore: 3464.5280373831788,
  },
  {
    station: "Cortlandt St (1)",
    avgScore: 3452.4721030042942,
  },
  {
    station: "174th St (5,2)",
    avgScore: 3451.4937238493731,
  },
  {
    station: "Marcy Ave (J,Z,M)",
    avgScore: 3440.2323232323224,
  },
  {
    station: "Alabama Ave (J)",
    avgScore: 3433.6871794871809,
  },
  {
    station: "Elmhurst Ave (E,M,R)",
    avgScore: 3419.8865546218481,
  },
  {
    station: "Forest Hills - 71st Av (E,F,M,R)",
    avgScore: 3407.5777777777771,
  },
  {
    station: "Church Ave (B,Q)",
    avgScore: 3406.0593607305918,
  },
  {
    station: "111th St (7)",
    avgScore: 3402.3795918367368,
  },
  {
    station: "Vernon Blvd - Jackson Ave (7,7Exp)",
    avgScore: 3399.6713615023477,
  },
  {
    station: "Nostrand Ave (4,3)",
    avgScore: 3397.3476394849754,
  },
  {
    station: "E 180th St (5,2)",
    avgScore: 3383.828125,
  },
  {
    station: "Knickerbocker Ave (M)",
    avgScore: 3381.9624413145566,
  },
  {
    station: "Central Ave (M)",
    avgScore: 3381.3703703703686,
  },
  {
    station: "Hunters Point Ave (7,7Exp)",
    avgScore: 3377.3333333333321,
  },
  {
    station: "174th-175th Sts (B,D)",
    avgScore: 3369.8639999999991,
  },
  {
    station: "Park Pl (S)",
    avgScore: 3366.5299145299136,
  },
  {
    station: "182nd-183rd Sts (B,D)",
    avgScore: 3355.3801652892525,
  },
  {
    station: "Atlantic Ave (L)",
    avgScore: 3352.8502024291483,
  },
  {
    station: "Bay Ridge Ave (R)",
    avgScore: 3340.3879310344828,
  },
  {
    station: "Cortelyou Rd (Q)",
    avgScore: 3338.2871287128687,
  },
  {
    station: "Bay Ridge - 95th St (R)",
    avgScore: 3334.2086956521748,
  },
  {
    station: "Seneca Ave (M)",
    avgScore: 3331.2056074766369,
  },
  {
    station: "Bay Pky (F)",
    avgScore: 3329.9357798165133,
  },
  {
    station: "Hewes St (J,M)",
    avgScore: 3318.617777777778,
  },
  {
    station: "36th St (E,M,R)",
    avgScore: 3317.2096069869008,
  },
  {
    station: "Sheepshead Bay (B,Q)",
    avgScore: 3300.0979591836722,
  },
  {
    station: "Ave J (Q)",
    avgScore: 3295.5872340425531,
  },
  {
    station: "21st St (G)",
    avgScore: 3291.8543689320395,
  },
  {
    station: "Flushing Ave (G)",
    avgScore: 3288.6930232558166,
  },
  {
    station: "Ave I (F)",
    avgScore: 3275.8529411764712,
  },
  {
    station: "Flushing - Main St (7,7Exp)",
    avgScore: 3270.8893805309735,
  },
  {
    station: "Cypress Hills (J)",
    avgScore: 3264.7130044843025,
  },
  {
    station: "39th Ave (N,W)",
    avgScore: 3261.7117117117118,
  },
  {
    station: "62nd St/New Utrecht Ave (D,N)",
    avgScore: 3258.8606557377057,
  },
  {
    station: "30th Ave (N,W)",
    avgScore: 3252.2369668246447,
  },
  {
    station: "Dyckman St (1)",
    avgScore: 3252.1056910569114,
  },
  {
    station: "46th St (E,M,R)",
    avgScore: 3252.0232558139537,
  },
  {
    station: "Broadway (N,W)",
    avgScore: 3251.8714285714286,
  },
  {
    station: "Norwood Ave (J,Z)",
    avgScore: 3241.7991266375575,
  },
  {
    station: "Van Siclen Ave (J,Z)",
    avgScore: 3236.1542056074786,
  },
  {
    station: "Sutter Ave (L)",
    avgScore: 3234.7448559670784,
  },
  {
    station: "Ave M (Q)",
    avgScore: 3233.4514767932469,
  },
  {
    station: "Ave N (F)",
    avgScore: 3213.4009009009019,
  },
  {
    station: "Chauncey St (J,Z)",
    avgScore: 3210.4000000000024,
  },
  {
    station: "Livonia Ave (L)",
    avgScore: 3209.40566037736,
  },
  {
    station: "Morrison Av - Soundview (6)",
    avgScore: 3206.3593073593083,
  },
  {
    station: "Utica Ave (A,C)",
    avgScore: 3204.1964285714284,
  },
  {
    station: "Kings Hwy (B,Q)",
    avgScore: 3203.2723004694831,
  },
  {
    station: "New Lots Ave (L)",
    avgScore: 3203.151658767772,
  },
  {
    station: "Clinton - Washington Aves (A,C)",
    avgScore: 3195.9365853658542,
  },
  {
    station: "Church Ave (G,F)",
    avgScore: 3193.7511961722475,
  },
  {
    station: "Bay Pky (N)",
    avgScore: 3192.5756302521013,
  },
  {
    station: "Beverly Rd (Q)",
    avgScore: 3192.0047619047618,
  },
  {
    station: "233rd St (5,2)",
    avgScore: 3183.1024390243897,
  },
  {
    station: "7th Ave (B,Q)",
    avgScore: 3177.6800000000007,
  },
  {
    station: "225th St (5,2)",
    avgScore: 3175.4955752212391,
  },
  {
    station: "West Farms Sq - E Tremont Av (5,2)",
    avgScore: 3173.8309859154942,
  },
  {
    station: "Lafayette Ave (A,C)",
    avgScore: 3173.2923728813576,
  },
  {
    station: "Northern Blvd (E,M,R)",
    avgScore: 3164.2238095238085,
  },
  {
    station: "219th St (5,2)",
    avgScore: 3162.7904761904761,
  },
  {
    station: "65th St (E,M,R)",
    avgScore: 3161.952153110049,
  },
  {
    station: "Bay Pky (D)",
    avgScore: 3159.113402061856,
  },
  {
    station: "Forest Ave (M)",
    avgScore: 3158.6749999999984,
  },
  {
    station: "Fordham Rd (4)",
    avgScore: 3139.6929824561403,
  },
  {
    station: "Ave U (Q)",
    avgScore: 3135.9748953974895,
  },
  {
    station: "Jamaica Ctr - Parsons / Archer (E,J,Z)",
    avgScore: 3135.5466666666671,
  },
  {
    station: "85th St - Forest Pky (J)",
    avgScore: 3133.3587443946208,
  },
  {
    station: "Cleveland St (J)",
    avgScore: 3130.8719211822672,
  },
  {
    station: "63rd Dr - Rego Park (E,M,R)",
    avgScore: 3126.7666666666664,
  },
  {
    station: "Ave U (F)",
    avgScore: 3121.2344497607664,
  },
  {
    station: "Fordham Rd (B,D)",
    avgScore: 3118.3244444444445,
  },
  {
    station: "Woodhaven Blvd (J,Z)",
    avgScore: 3107.7889908256875,
  },
  {
    station: "Hunts Point Ave (6,6Exp)",
    avgScore: 3107.7109004739332,
  },
  {
    station: "36th Ave (N,W)",
    avgScore: 3106.1565656565658,
  },
  {
    station: "Wakefield - 241st St (2)",
    avgScore: 3089.4556451612889,
  },
  {
    station: "Fresh Pond Rd (M)",
    avgScore: 3089.1730769230749,
  },
  {
    station: "Whitlock Ave (6)",
    avgScore: 3086.0909090909081,
  },
  {
    station: "Jamaica - Van Wyck (E)",
    avgScore: 3084.8372093023249,
  },
  {
    station: "Kings Hwy (N)",
    avgScore: 3076.3251231527088,
  },
  {
    station: "Crescent St (J,Z)",
    avgScore: 3067.7370689655177,
  },
  {
    station: "Ralph Ave (A,C)",
    avgScore: 3065.3004694835681,
  },
  {
    station: "Pelham Pkwy (5)",
    avgScore: 3056.2787610619462,
  },
  {
    station: "Rockaway Park - Beach 116 St (A,S)",
    avgScore: 3050.1119999999996,
  },
  {
    station: "Ditmas Ave (F)",
    avgScore: 3048.1674876847292,
  },
  {
    station: "Pelham Bay Park (6,6Exp)",
    avgScore: 3037.275109170308,
  },
  {
    station: "25th St (D,N,R)",
    avgScore: 3036.8783783783779,
  },
  {
    station: "Ave U (N)",
    avgScore: 3022.3070175438606,
  },
  {
    station: "W 8th St - NY Aquarium (F,Q)",
    avgScore: 3020.3019607843148,
  },
  {
    station: "Ocean Pkwy (Q)",
    avgScore: 3018.4753363228692,
  },
  {
    station: "Canarsie - Rockaway Pkwy (L)",
    avgScore: 3009.9180327868844,
  },
  {
    station: "Sutphin Blvd - Archer Av (E,J,Z)",
    avgScore: 3005.3055555555552,
  },
  {
    station: "Howard Beach - JFK Airport (A)",
    avgScore: 2999.5140186915874,
  },
  {
    station: "Grand Ave - Newtown (E,M,R)",
    avgScore: 2993.553097345135,
  },
  {
    station: "Ft Hamilton Pkwy (D)",
    avgScore: 2988.91959798995,
  },
  {
    station: "Parkchester (6,6Exp)",
    avgScore: 2983.529702970297,
  },
  {
    station: "Longwood Ave (6)",
    avgScore: 2979.4713656387653,
  },
  {
    station: "Ave X (F)",
    avgScore: 2979.4326530612257,
  },
  {
    station: "36th St (D,N,R)",
    avgScore: 2975.6650246305421,
  },
  {
    station: "75th St - Eldert Ln (J,Z)",
    avgScore: 2974.9356435643581,
  },
  {
    station: "Norwood - 205th St (D)",
    avgScore: 2974.41592920354,
  },
  {
    station: "Ave P (F)",
    avgScore: 2960.6071428571436,
  },
  {
    station: "Westchester Sq - E Tremont Ave (6,6Exp)",
    avgScore: 2958.3004484304925,
  },
  {
    station: "Nereid Ave (238 St) (5,2)",
    avgScore: 2951.3271889400912,
  },
  {
    station: "Zerega Ave (6,6Exp)",
    avgScore: 2945.3146551724149,
  },
  {
    station: "9th Ave (D)",
    avgScore: 2939.7370689655158,
  },
  {
    station: "Church Ave (5,2)",
    avgScore: 2936.4596774193569,
  },
  {
    station: "Mt Eden Ave (4)",
    avgScore: 2930.5431472081209,
  },
  {
    station: "Kew Gardens - Union Tpke (E,F)",
    avgScore: 2928.9574468085107,
  },
  {
    station: "18th Ave (F)",
    avgScore: 2916.0292682926824,
  },
  {
    station: "Kings Hwy (F)",
    avgScore: 2908.3846153846171,
  },
  {
    station: "Ft Hamilton Pkwy (N)",
    avgScore: 2907.7392996108965,
  },
  {
    station: "Pelham Pkwy (5,2)",
    avgScore: 2903.0343347639487,
  },
  {
    station: "Flushing Ave (J,M)",
    avgScore: 2893.2535211267618,
  },
  {
    station: "Beach 98th St (A,S)",
    avgScore: 2887.7348837209315,
  },
  {
    station: "Elder Ave (6)",
    avgScore: 2881.8055555555538,
  },
  {
    station: "St Lawrence Ave (6)",
    avgScore: 2879.6633663366338,
  },
  {
    station: "Kingston - Throop Aves (A,C)",
    avgScore: 2871.82485875706,
  },
  {
    station: "Beach 67th St (A)",
    avgScore: 2858.0854700854707,
  },
  {
    station: "President St (5,2)",
    avgScore: 2856.2814070351774,
  },
  {
    station: "Burnside Ave (4)",
    avgScore: 2851.5405405405409,
  },
  {
    station: "Kingsbridge Rd (4)",
    avgScore: 2851.3201970443347,
  },
  {
    station: "Jamaica - 179th St (F)",
    avgScore: 2851.2600896860981,
  },
  {
    station: "67th Ave (E,M,R)",
    avgScore: 2848.3911111111106,
  },
  {
    station: "Liberty Ave (A,C)",
    avgScore: 2847.6291079812218,
  },
  {
    station: "Brook Ave (6)",
    avgScore: 2846.2803738317734,
  },
  {
    station: "Gun Hill Rd (5)",
    avgScore: 2845.9473684210529,
  },
  {
    station: "Mosholu Pkwy (4)",
    avgScore: 2840.5679999999998,
  },
  {
    station: "Morris Park (5)",
    avgScore: 2802.4834710743794,
  },
  {
    station: "Castle Hill Ave (6,6Exp)",
    avgScore: 2785.0676328502409,
  },
  {
    station: "104th-102nd Sts (J,Z)",
    avgScore: 2778.8009259259261,
  },
  {
    station: "Woodlawn (4)",
    avgScore: 2771.8702928870284,
  },
  {
    station: "Rockaway Ave (4,3)",
    avgScore: 2769.8119266055037,
  },
  {
    station: "Beach 105th St (A,S)",
    avgScore: 2759.2217194570148,
  },
  {
    station: "Far Rockaway - Mott Ave (A)",
    avgScore: 2743.3975903614455,
  },
  {
    station: "Kingston Ave (4,3)",
    avgScore: 2740.0731707317073,
  },
  {
    station: "Eastchester - Dyre Ave (5)",
    avgScore: 2737.2968036529674,
  },
  {
    station: "75th Ave (E,F)",
    avgScore: 2735.6515837104066,
  },
  {
    station: "Bay 50th St (D)",
    avgScore: 2733.9852941176468,
  },
  {
    station: "Neck Rd (Q)",
    avgScore: 2723.4891774891789,
  },
  {
    station: "Beach 60th St (A)",
    avgScore: 2719.0184331797223,
  },
  {
    station: "20th Ave (N)",
    avgScore: 2705.1249999999991,
  },
  {
    station: "Beach 90th St (A,S)",
    avgScore: 2701.406113537118,
  },
  {
    station: "Neptune Ave (F)",
    avgScore: 2688.3443396226417,
  },
  {
    station: "Bedford Park Blvd - Lehman College (4)",
    avgScore: 2681.72350230415,
  },
  {
    station: "Euclid Ave (A,C)",
    avgScore: 2669.8268398268415,
  },
  {
    station: "Aqueduct Racetrack (A)",
    avgScore: 2665.8857142857123,
  },
  {
    station: "Sterling St (5,2)",
    avgScore: 2644.180995475112,
  },
  {
    station: "Ozone Park - Lefferts Blvd (A)",
    avgScore: 2639.9102564102568,
  },
  {
    station: "Beach 44th St (A)",
    avgScore: 2632.3254716981128,
  },
  {
    station: "Briarwood - Van Wyck Blvd (E,F)",
    avgScore: 2621.4977578475332,
  },
  {
    station: "111th St (J)",
    avgScore: 2620.6026785714294,
  },
  {
    station: "Van Siclen Ave (A,C)",
    avgScore: 2614.7376237623762,
  },
  {
    station: "Winthrop St (5,2)",
    avgScore: 2588.2614678899067,
  },
  {
    station: "Dyckman St (A)",
    avgScore: 2586.8288288288281,
  },
  {
    station: "121st St (J,Z)",
    avgScore: 2571.9132420091328,
  },
  {
    station: "Broad Channel (A,S)",
    avgScore: 2569.4607843137255,
  },
  {
    station: "Middletown Rd (6,6Exp)",
    avgScore: 2567.27966101695,
  },
  {
    station: "Beach 25th St (A)",
    avgScore: 2552.6804979253097,
  },
  {
    station: "Cypress Ave (6)",
    avgScore: 2548.7543859649113,
  },
  {
    station: "Gravesend - 86th St (N)",
    avgScore: 2545.7881773399004,
  },
  {
    station: "Grant Ave (A)",
    avgScore: 2540.4588744588746,
  },
  {
    station: "Gun Hill Rd (5,2)",
    avgScore: 2535.8379629629653,
  },
  {
    station: "Buhre Ave (6,6Exp)",
    avgScore: 2520.9786324786323,
  },
  {
    station: "Shepherd Ave (A,C)",
    avgScore: 2517.4306930693078,
  },
  {
    station: "20th Ave (D)",
    avgScore: 2517.1256544502626,
  },
  {
    station: "18th Ave (D)",
    avgScore: 2517.1005917159782,
  },
  {
    station: "45th St (N,R)",
    avgScore: 2515.7307692307672,
  },
  {
    station: "E 105th St (L)",
    avgScore: 2507.1386138613848,
  },
  {
    station: "8th Ave (N)",
    avgScore: 2486.1488372093013,
  },
  {
    station: "25th Ave (D)",
    avgScore: 2485.7280701754394,
  },
  {
    station: "Baychester Ave (5)",
    avgScore: 2477.6086956521754,
  },
  {
    station: "Saratoga Ave (4,3)",
    avgScore: 2458.4881516587698,
  },
  {
    station: "Intervale Ave (5,2)",
    avgScore: 2428.6186046511621,
  },
  {
    station: "Aqueduct - North Conduit Av (A)",
    avgScore: 2420.8926829268275,
  },
  {
    station: "New Lots Ave (4,3)",
    avgScore: 2408.0042918454938,
  },
  {
    station: "Beach 36th St (A)",
    avgScore: 2365.7020202020208,
  },
  {
    station: "18th Ave (N)",
    avgScore: 2356.2206572769942,
  },
  {
    station: "Newkirk Ave (5,2)",
    avgScore: 2328.3453608247437,
  },
  {
    station: "Burke Ave (5,2)",
    avgScore: 2316.2047619047635,
  },
  {
    station: "Kingsbridge Rd (B,D)",
    avgScore: 2275.3024390243918,
  },
  {
    station: "86th St (R)",
    avgScore: 2262.0814479638007,
  },
  {
    station: "Allerton Ave (5,2)",
    avgScore: 2248.176470588236,
  },
  {
    station: "55th St (D)",
    avgScore: 2237.7625000000012,
  },
  {
    station: "Pennsylvania Ave (4,3)",
    avgScore: 2236.3349282296649,
  },
  {
    station: "77th St (R)",
    avgScore: 2191.9543378995436,
  },
  {
    station: "Freeman St (5,2)",
    avgScore: 2179.6788990825703,
  },
  {
    station: "53rd St (N,R)",
    avgScore: 2170.564655172413,
  },
  {
    station: "Tremont Ave (B,D)",
    avgScore: 2162.3618090452255,
  },
  {
    station: "Sutter Ave - Rutland Road (4,3)",
    avgScore: 2159.6173913043481,
  },
  {
    station: "50th St (D)",
    avgScore: 2148.1923076923063,
  },
  {
    station: "Parsons Blvd (F)",
    avgScore: 2133.7303921568632,
  },
  {
    station: "Beverly Rd (5,2)",
    avgScore: 2113.0312500000005,
  },
  {
    station: "71st St (D)",
    avgScore: 2078.2738589211608,
  },
  {
    station: "Jackson Ave (5,2)",
    avgScore: 2072.3571428571431,
  },
  {
    station: "59th St (N,R)",
    avgScore: 2066.1422764227632,
  },
  {
    station: "Bedford Park Blvd (B,D)",
    avgScore: 2060.6431535269712,
  },
  {
    station: "Junius St (4,3)",
    avgScore: 2054.0717488789242,
  },
  {
    station: "Rockaway Blvd (A)",
    avgScore: 2040.6517857142851,
  },
  {
    station: "Sutphin Blvd (F)",
    avgScore: 2040.533653846154,
  },
  {
    station: "111th St (A)",
    avgScore: 2024.7358490566046,
  },
  {
    station: "Simpson St (5,2)",
    avgScore: 1996.9901960784321,
  },
  {
    station: "79th St (D)",
    avgScore: 1961.4465116279082,
  },
  {
    station: "Rockaway Ave (A,C)",
    avgScore: 1957.9810426540284,
  },
  {
    station: "Van Siclen Ave (4,3)",
    avgScore: 1946.3298429319364,
  },
  {
    station: "104th St (A)",
    avgScore: 1888.7737556561092,
  },
  {
    station: "80th St (A)",
    avgScore: 1820.8903508771921,
  },
  {
    station: "169th St (F)",
    avgScore: 1819.5353535353534,
  },
  {
    station: "88th St (A)",
    avgScore: 1740.338028169014,
  },
  {
    station: "Prospect Ave (5,2)",
    avgScore: 976.4365482233502,
  },
];
