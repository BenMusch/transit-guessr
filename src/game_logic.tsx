import _ from "lodash";

import type {
  IStation,
  Coordinate,
  OperatorConfiguration,
} from "./operators/types";

type FiveArray<T> = [T, T, T, T, T];

// calculate distance in meters using https://www.movable-type.co.uk/scripts/latlong.html
// i have no idea what these variables mean
function distanceInMeters(a: Coordinate, b: Coordinate) {
  const [lng1, lat1] = a;
  const [lng2, lat2] = b;

  const a1 = (lat1 * Math.PI) / 180;
  const a2 = (lat2 * Math.PI) / 180;

  const deltaA1A2 = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lng2 - lng1) * Math.PI) / 180;

  const res =
    Math.sin(deltaA1A2 / 2) ** 2 +
    Math.cos(a1) * Math.cos(a2) * Math.sin(deltaLambda / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(res), Math.sqrt(1 - res));
  return 6371e3 * c;
}

export function calculateScore<
  TrunkLineT extends string,
  LineNameT extends string
>(
  guess: Coordinate,
  station: IStation<TrunkLineT, LineNameT>
): { score: number; point: Coordinate } {
  let point: Coordinate | null = null;
  let score: number = 0;

  for (const coord of station.coordinates) {
    let distance = distanceInMeters(guess, coord);

    // Quadratic scoring
    // 20,0000 meters = 0 points
    // normalize to be 5,000 max score
    let curScore = Math.round(
      (5000 / 400000000) * Math.max(20000 - distance, 0) ** 2
    );

    if (curScore >= score) {
      score = curScore;
      point = coord;
    }
  }

  return { score, point: point! };
}

export type Game<TrunkLineT extends string, LineNameT extends string> = {
  guesses: FiveArray<Coordinate | null>;
  stations: FiveArray<IStation<TrunkLineT, LineNameT>>;
};

export function makeGame<TrunkLineT extends string, LineNameT extends string>(
  config: OperatorConfiguration<TrunkLineT, LineNameT>
): Game<TrunkLineT, LineNameT> {
  return {
    guesses: [null, null, null, null, null],
    stations: _.sampleSize(config.stations, 5) as FiveArray<
      IStation<TrunkLineT, LineNameT>
    >,
  };
}

export function guess<TrunkLineT extends string, LineNameT extends string>(
  game: Game<TrunkLineT, LineNameT>,
  guess: Coordinate,
  turn: number
): Game<TrunkLineT, LineNameT> {
  const newGuesses = [...game.guesses] as FiveArray<Coordinate | null>;
  newGuesses[turn] = guess;

  return {
    guesses: newGuesses,
    stations: game.stations,
  };
}
