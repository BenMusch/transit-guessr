import { CtaLine, CtaLineName, CtaStation, CtaTrunkLine } from "./types";

export const lines = {
  [CtaLineName.BLUE]: {
    line: CtaLineName.BLUE,
    displayName: "Blue Line",
    trunkLine: CtaTrunkLine.BLUE,
  },
  [CtaLineName.BROWN]: {
    line: CtaLineName.BROWN,
    displayName: "Brown Line",
    trunkLine: CtaTrunkLine.BROWN,
  },
  [CtaLineName.GREEN]: {
    line: CtaLineName.GREEN,
    displayName: "Green Line",
    trunkLine: CtaTrunkLine.GREEN,
  },
  [CtaLineName.ORANGE]: {
    line: CtaLineName.ORANGE,
    displayName: "Orange Line",
    trunkLine: CtaTrunkLine.ORANGE,
  },
  [CtaLineName.PINK]: {
    line: CtaLineName.PINK,
    displayName: "Pink Line",
    trunkLine: CtaTrunkLine.PINK,
  },
  [CtaLineName.PURPLE]: {
    line: CtaLineName.PURPLE,
    displayName: "Purple Line",
    trunkLine: CtaTrunkLine.PURPLE,
  },
  [CtaLineName.RED]: {
    line: CtaLineName.RED,
    displayName: "Red Line",
    trunkLine: CtaTrunkLine.RED,
  },
  [CtaLineName.YELLOW]: {
    line: CtaLineName.YELLOW,
    displayName: "Yellow Line",
    trunkLine: CtaTrunkLine.YELLOW,
  },
};

export const linesByTrunkLine: { [k in CtaTrunkLine]: CtaLine[] } = {
  [CtaTrunkLine.BLUE]: [lines[CtaTrunkLine.BLUE]],
  [CtaTrunkLine.BROWN]: [lines[CtaTrunkLine.BROWN]],
  [CtaTrunkLine.GREEN]: [lines[CtaTrunkLine.GREEN]],
  [CtaTrunkLine.ORANGE]: [lines[CtaTrunkLine.ORANGE]],
  [CtaTrunkLine.PINK]: [lines[CtaTrunkLine.PINK]],
  [CtaTrunkLine.PURPLE]: [lines[CtaTrunkLine.PURPLE]],
  [CtaTrunkLine.RED]: [lines[CtaTrunkLine.RED]],
  [CtaTrunkLine.YELLOW]: [lines[CtaTrunkLine.YELLOW]],
};

export const stations: CtaStation[] = [
  {
    coordinates: [[-87.7566977993187, 41.8517811520071]],
    name: "54th/Cermak",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.7472268129385, 42.0262517669504]],
    name: "Oakton-Skokie",
    lines: [lines[CtaLineName.YELLOW]],
  },
  {
    coordinates: [[-87.7243325002513, 41.8538646754276]],
    name: "Pulaski",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.7085471641801, 41.9297359003234]],
    name: "Logan Square",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7291830521445, 41.9529481226115]],
    name: "Irving Park",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.708849574421, 41.9661004713094]],
    name: "Kedzie",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6786406573541, 41.9664188387777]],
    name: "Damen",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6653174197458, 41.8393637237933]],
    name: "Ashland",
    lines: [lines[CtaLineName.ORANGE]],
  },
  {
    coordinates: [[-87.6594612675974, 41.875893486368]],
    name: "Racine",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6636153262743, 41.9438201191629]],
    name: "Southport",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6536316945234, 41.9474358616316]],
    name: "Addison",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6728982274079, 42.0190710955012]],
    name: "Howard",
    lines: [
      lines[CtaLineName.RED],
      lines[CtaLineName.YELLOW],
      lines[CtaLineName.PURPLE],
    ],
  },
  {
    coordinates: [[-87.6690978871949, 42.0158840559435]],
    name: "Jarvis",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6188318683217, 41.8092166774229]],
    name: "47th",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6306420405166, 41.8311984057141]],
    name: "Sox-35th",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.621468552778, 41.8218230409244]],
    name: "Indiana",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6317395846178, 41.8768631883767]],
    name: "LaSalle/Van Buren",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
    ],
  },
  {
    coordinates: [[-87.6317278255993, 41.8755754790277]],
    name: "LaSalle",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6293014143095, 41.87819037253]],
    name: "Jackson",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6265956348053, 41.8674128115991]],
    name: "Roosevelt",
    lines: [lines[CtaLineName.ORANGE], lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6314180458674, 41.9039281707863]],
    name: "Clark/Division",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6155516194625, 41.7801375543113]],
    name: "King Drive",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.8380318068063, 41.9843019179755]],
    name: "Cumberland",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.8069666741512, 41.8734978948597]],
    name: "Harlem",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7836668289516, 41.8871672448627]],
    name: "Ridgeland",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.7332694364639, 41.8537585306984]],
    name: "Kostner",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.685184984822, 41.8544046839752]],
    name: "Western",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.6885083818154, 41.9662579136525]],
    name: "Western",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6638505984343, 41.7789612403492]],
    name: "Ashland",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6481368563758, 41.8469092881234]],
    name: "Halsted",
    lines: [lines[CtaLineName.ORANGE]],
  },
  {
    coordinates: [[-87.6695489888663, 41.8715708546151]],
    name: "Polk",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.6531366193255, 41.9327393626827]],
    name: "Diversey",
    lines: [lines[CtaLineName.BROWN], lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6749615140804, 41.9545310037213]],
    name: "Irving Park",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6610664721811, 42.0010812325187]],
    name: "Loyola",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6592080495191, 41.9936721327886]],
    name: "Granville",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6590816284849, 41.9902673651999]],
    name: "Thorndale",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6244204781868, 41.7223838114069]],
    name: "95/Dan Ryan",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6185073388136, 41.8020994255451]],
    name: "51st",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6264081312554, 41.8531229329346]],
    name: "Cermak-McCormick Pl",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6261036486826, 41.8795180734382]],
    name: "Adams/Wabash",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
      lines[CtaLineName.GREEN],
    ],
  },
  {
    coordinates: [[-87.6339791124125, 41.8889757890646]],
    name: "Merchandise Mart",
    lines: [lines[CtaLineName.BROWN], lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6281821037464, 41.8966790697197]],
    name: "Chicago",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.7937891507331, 41.8869953676161]],
    name: "Oak Park",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.77679106162, 41.870894237935]],
    name: "Austin",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7656552962431, 41.8873968620832]],
    name: "Central",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.70432643014, 41.8043562455804]],
    name: "Kedzie",
    lines: [lines[CtaLineName.ORANGE]],
  },
  {
    coordinates: [[-87.7061611934145, 41.8843289466525]],
    name: "Kedzie",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6835487085104, 42.0477179742168]],
    name: "Davis",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.673951642288, 41.8756432795085]],
    name: "Medical District",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.652650066547, 41.9182244273074]],
    name: "Armitage",
    lines: [lines[CtaLineName.BROWN], lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6585357313285, 41.9734611912188]],
    name: "Argyle",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6440288713858, 41.7790357039443]],
    name: "Halsted",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6338592813957, 41.8827028726792]],
    name: "Washington/Wells",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
    ],
  },
  {
    coordinates: [[-87.6294458098575, 41.8831722810713]],
    name: "Washington",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6278409306554, 41.8857482658558]],
    name: "State/Lake",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
      lines[CtaLineName.GREEN],
    ],
  },
  {
    coordinates: [[-87.6274848664284, 41.8740470971052]],
    name: "Harrison",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6274081309855, 41.8673755179234]],
    name: "Roosevelt",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.7453477910822, 41.8519325576649]],
    name: "Cicero",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.760898076954, 41.9706420002594]],
    name: "Jefferson Park",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7519244278655, 42.0389585676811]],
    name: "Dempster-Skokie",
    lines: [lines[CtaLineName.YELLOW]],
  },
  {
    coordinates: [[-87.7244554126788, 41.79989565534]],
    name: "Pulaski",
    lines: [lines[CtaLineName.ORANGE]],
  },
  {
    coordinates: [[-87.7131478186709, 41.9679360158686]],
    name: "Kimball",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6774424215003, 41.9097516488515]],
    name: "Damen",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6873701519635, 41.9161652860628]],
    name: "Western",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6795437027357, 42.0334635879271]],
    name: "Main",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6783351950943, 42.0276197251038]],
    name: "South Boulevard",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6521337492022, 41.8855846423837]],
    name: "Morgan",
    lines: [lines[CtaLineName.GREEN], lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.6528715990472, 41.9250592289658]],
    name: "Fullerton",
    lines: [
      lines[CtaLineName.RED],
      lines[CtaLineName.BROWN],
      lines[CtaLineName.PURPLE],
    ],
  },
  {
    coordinates: [[-87.6532722125531, 41.9360404649145]],
    name: "Wellington",
    lines: [lines[CtaLineName.BROWN], lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6190415217967, 41.8164710665178]],
    name: "43rd",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6293834503996, 41.8807113152785]],
    name: "Monroe",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6278191303412, 41.8848167227136]],
    name: "Lake",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6261945339908, 41.8832278676329]],
    name: "Washington/Wabash",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
      lines[CtaLineName.GREEN],
    ],
  },
  {
    coordinates: [[-87.6359524105505, 41.8967820282575]],
    name: "Chicago",
    lines: [lines[CtaLineName.BROWN], lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.9018542401251, 41.9788845945215]],
    name: "O'Hare",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7451779610493, 41.8716158966054]],
    name: "Cicero",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7436227659806, 41.961494494582]],
    name: "Montrose",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7148860365821, 41.8539997996978]],
    name: "Central Park",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.7165286089476, 41.8849122297051]],
    name: "Conservatory",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.7123651306988, 41.9381395290749]],
    name: "Belmont",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6968955727368, 41.9219470288921]],
    name: "California",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6941169023781, 41.9662178145924]],
    name: "Rockwell",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6665018300423, 41.903362941394]],
    name: "Division",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.670889712045, 41.9437170110947]],
    name: "Paulina",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6533862509046, 41.9397586090157]],
    name: "Belmont",
    lines: [
      lines[CtaLineName.RED],
      lines[CtaLineName.BROWN],
      lines[CtaLineName.PURPLE],
    ],
  },
  {
    coordinates: [[-87.6751711621703, 41.9617595767203]],
    name: "Montrose",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6577398122228, 41.9642620267585]],
    name: "Wilson",
    lines: [lines[CtaLineName.PURPLE], lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6258872185329, 41.8316858675362]],
    name: "35-Bronzeville-IIT",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6417770582394, 41.8857112779315]],
    name: "Clinton",
    lines: [lines[CtaLineName.GREEN], lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.6308917692326, 41.885744841126]],
    name: "Clark/Lake",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
      lines[CtaLineName.GREEN],
      lines[CtaLineName.BLUE],
    ],
  },
  {
    coordinates: [[-87.8593935296364, 41.9835151466621]],
    name: "Rosemont",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7916079466438, 41.8721158177932]],
    name: "Oak Park",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7191050851877, 41.9473679629925]],
    name: "Addison",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.684070745255, 41.8046913980631]],
    name: "Western",
    lines: [lines[CtaLineName.ORANGE]],
  },
  {
    coordinates: [[-87.6962399861887, 41.8842273825954]],
    name: "California",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6552200382654, 41.8960830926877]],
    name: "Chicago",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6475840665063, 41.8911971489399]],
    name: "Grand",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6586741879951, 41.9779918616499]],
    name: "Berwyn",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6584987290971, 41.9691468084194]],
    name: "Lawrence",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6309735739579, 41.8532136452985]],
    name: "Cermak-Chinatown",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.628214893786, 41.8769161939259]],
    name: "Library",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
    ],
  },
  {
    coordinates: [[-87.6280270080354, 41.8916730574256]],
    name: "Grand",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6393079203776, 41.9104170389223]],
    name: "Sedgwick",
    lines: [lines[CtaLineName.BROWN], lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.8173235836912, 41.8742651538007]],
    name: "Forest Park",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.8031817889155, 41.8868561489306]],
    name: "Harlem",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.7054337263969, 41.8541384319667]],
    name: "Kedzie",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.7059840672709, 41.8744333577589]],
    name: "Kedzie-Homan",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7016615122914, 41.9661547605721]],
    name: "Francisco",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6816077681205, 42.0416625234119]],
    name: "Dempster",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6856230414434, 42.0639944264264]],
    name: "Central",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6835661096864, 42.054168105609]],
    name: "Foster",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6759798571173, 41.8545227090361]],
    name: "Damen",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.6496479861906, 41.8755240612322]],
    name: "UIC-Halsted",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6747418773794, 41.9470365182941]],
    name: "Addison",
    lines: [lines[CtaLineName.BROWN]],
  },
  {
    coordinates: [[-87.6251840896426, 41.7504201746768]],
    name: "79th",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.631006189554, 41.7805421713732]],
    name: "63rd",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6310315405433, 41.8103459747356]],
    name: "47th",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6311749120376, 41.7954261014675]],
    name: "Garfield",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6409899695692, 41.875546757556]],
    name: "Clinton",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6337457270016, 41.8787311369957]],
    name: "Quincy/Wells",
    lines: [
      lines[CtaLineName.BROWN],
      lines[CtaLineName.ORANGE],
      lines[CtaLineName.PINK],
      lines[CtaLineName.PURPLE],
    ],
  },
  {
    coordinates: [[-87.6058631505376, 41.7803166059274]],
    name: "Cottage Grove",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.8089007480191, 41.982331231851]],
    name: "Harlem",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.774141048747, 41.8873006318581]],
    name: "Austin",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.7549922818578, 41.8871710747419]],
    name: "Laramie",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.74470418468, 41.8865272021817]],
    name: "Cicero",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.7379621442433, 41.7866213829469]],
    name: "Midway",
    lines: [lines[CtaLineName.ORANGE]],
  },
  {
    coordinates: [[-87.7256307076872, 41.8738965720071]],
    name: "Pulaski",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.7254095470132, 41.8854198292477]],
    name: "Pulaski",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6805931285664, 41.8295679305181]],
    name: "35th/Archer",
    lines: [lines[CtaLineName.ORANGE]],
  },
  {
    coordinates: [[-87.6948286820439, 41.8542874762452]],
    name: "California",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.6884402778711, 41.8755374238929]],
    name: "Western",
    lines: [lines[CtaLineName.BLUE]],
  },
  {
    coordinates: [[-87.6907353058871, 42.073160645837]],
    name: "Linden",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6833426653597, 42.0582903521023]],
    name: "Noyes",
    lines: [lines[CtaLineName.PURPLE]],
  },
  {
    coordinates: [[-87.6691658842754, 41.8579155563989]],
    name: "18th",
    lines: [lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.666956698087, 41.8853192483664]],
    name: "Ashland",
    lines: [lines[CtaLineName.GREEN], lines[CtaLineName.PINK]],
  },
  {
    coordinates: [[-87.6491830256379, 41.9106624386776]],
    name: "North/Clybourn",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6549351569646, 41.9537828126077]],
    name: "Sheridan",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6588460539629, 41.9835120952945]],
    name: "Bryn Mawr",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6659148632272, 42.0083696933337]],
    name: "Morse",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6247588074334, 41.7353790407575]],
    name: "87th",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6258150877943, 41.7683757008673]],
    name: "69th",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6183298460005, 41.7951844937943]],
    name: "Garfield",
    lines: [lines[CtaLineName.GREEN]],
  },
  {
    coordinates: [[-87.6277022089687, 41.8807524129805]],
    name: "Monroe",
    lines: [lines[CtaLineName.RED]],
  },
  {
    coordinates: [[-87.6276018467328, 41.8781606107067]],
    name: "Jackson",
    lines: [lines[CtaLineName.RED]],
  },
];
