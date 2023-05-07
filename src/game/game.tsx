import _ from "lodash";

import type { Coordinate, Station } from "../data/stations";
import { STATIONS } from "../data/stations";

type FiveArray<T> = [T, T, T, T, T];

// TODO: make this better
export function calculateScore(guess: Coordinate, station: Station): number {
  const [guessLat, guessLong] = guess;
  // TODO: update when we add compound stations
  const [actualLat, actualLong] = station.coordinates[0]!;

  const width = Math.abs(guessLat - actualLat);
  const height = Math.abs(guessLong - actualLong);

  const distance = Math.sqrt(width ** 2 + height ** 2);
  console.log(distance);
  return Math.round(Math.max(5000 - (distance * 900) ** 2, 0));
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
