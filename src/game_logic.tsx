import _ from "lodash";

import type { Coordinate } from "./operators/types";
import type { PlayableConfig, PlayableStation } from "./operators/config";

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

export function calculateScore(
  guess: Coordinate,
  station: PlayableStation,
  zeroPointDistanceInMeters: number,
): { score: number; point: Coordinate } {
  let point: Coordinate | null = null;
  let score: number = 0;

  for (const coord of station.coordinates) {
    let distance = distanceInMeters(guess, coord);

    // Quadratic scoring
    // normalize to be 5,000 max score
    let curScore = Math.round(
      (5000 / zeroPointDistanceInMeters ** 2) *
        Math.max(zeroPointDistanceInMeters - distance, 0) ** 2,
    );

    if (curScore >= score) {
      score = curScore;
      point = coord;
    }
  }

  return { score, point: point! };
}

export type Game = {
  guesses: FiveArray<Coordinate | null>;
  stations: FiveArray<PlayableStation>;
};

export function makeGame(config: PlayableConfig): Game {
  return {
    guesses: [null, null, null, null, null],
    stations: _.sampleSize(config.stations, 5) as FiveArray<PlayableStation>,
  };
}

export function guess(game: Game, guess: Coordinate, turn: number): Game {
  const newGuesses = [...game.guesses] as FiveArray<Coordinate | null>;
  newGuesses[turn] = guess;

  return {
    guesses: newGuesses,
    stations: game.stations,
  };
}
