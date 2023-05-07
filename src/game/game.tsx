import _ from "lodash";

import type { Coordinate, Station } from "../data/stations";
import { STATIONS } from "../data/stations";

type FiveArray<T> = [T, T, T, T, T];

// TODO: make this better
export function calculateScore(guess: Coordinate, station: Station): number {
  const [guessLat, guessLong] = guess;
  // TODO: update when we add compound stations
  const [actualLat, actualLong] = station.coordinates[0]!;

  return Math.abs(guessLat - actualLat) + Math.abs(guessLong - actualLong);
}

export type Game = {
  guesses: FiveArray<Coordinate | null>;
  stations: FiveArray<Station>;
};

export function makeGame(): Game {
  return {
    guesses: [null, null, null, null, null],
    stations: _.sampleSize(STATIONS, 5) as FiveArray<Station>,
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
