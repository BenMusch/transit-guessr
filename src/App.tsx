import React from "react";
import "./App.css";
import type { MapboxStyle } from "react-map-gl";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapStyle from "./map_style";

import type { Station, Coordinate } from "./data/stations";

import { Game, calculateScore, makeGame } from "./game/game";

const HIGH_SCORES_KEY = "highScores";

function getHighScores(): number[] {
  try {
    return JSON.parse(localStorage.getItem(HIGH_SCORES_KEY) ?? "[]");
  } catch {
    console.error("high score load error");
    return [];
  }
}

function addHighScore(score: number): void {
  const curScores = getHighScores();
  curScores.push(score);
  curScores.sort();
  curScores.reverse();
  localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(curScores.slice(0, 5)));
}

function WrappedMap(props: {
  guessMarker: Coordinate | null;
  guessScore: number | null;
  stationMarker: Coordinate | null;
  onClick: (c: Coordinate) => void;
}) {
  const { guessMarker, stationMarker, onClick, guessScore } = props;
  return (
    <Map
      initialViewState={{
        longitude: -73.875,
        latitude: 40.73065,
        zoom: 10,
      }}
      maxZoom={12}
      minZoom={9}
      onClick={(e) => {
        onClick([e.lngLat.lng, e.lngLat.lat]);
      }}
      style={{ width: 500, height: 600 }}
      mapStyle={mapStyle as MapboxStyle}
    >
      {guessMarker && (
        <Marker longitude={guessMarker[0]} latitude={guessMarker[1]} />
      )}
      {stationMarker && (
        <Marker
          longitude={stationMarker[0]}
          latitude={stationMarker[1]}
          color="red"
        />
      )}
      {stationMarker && (
        <div className="score-overlay">Score: {guessScore}</div>
      )}
    </Map>
  );
}

function StationHeader(props: { station: Station }) {
  const { station } = props;
  return (
    <div className="station-heading">
      <h1 className="station-name">{station.name}</h1>
      <div className="station-lines">
        {station.lines.map((line, i) => {
          return (
            <div
              key={i}
              className={`station-line ${line.lineGroup} ${
                line.express ? "express" : "local"
              }`}
            >
              <span className="station-line-name">{line.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GameplayMap(props: {
  station: Station;
  guess: Coordinate | null;
  guessConfirmed: boolean;
  onClick: (c: Coordinate) => void;
}) {
  const { guess, station, guessConfirmed, onClick } = props;
  const guessScore = guess ? calculateScore(guess, station) : null;

  return (
    <WrappedMap
      onClick={onClick}
      guessMarker={guess}
      stationMarker={guessConfirmed ? station.coordinates[0]! : null}
      guessScore={guessConfirmed ? guessScore : null}
    />
  );
}

function GameReview(props: { score: number; onNewGame: () => void }) {
  const { score, onNewGame } = props;
  const highScores = getHighScores();
  return (
    <>
      <div className="final-score-container">
        <h2 className="final-score">Score: {score}</h2>
      </div>

      <div className="high-scores">
        <div className="high-scores-heading">
          <span>High Scores</span>
        </div>
        {highScores.map((score, i) => {
          return (
            <div className="high-score-row" key={i}>
              <span>{score}</span>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={onNewGame}>Play Again</button>
      </div>
    </>
  );
}

function ActiveGame(props: {
  onGuess: (c: Coordinate) => void;
  onGuessConfirmed: (score: number) => void;
  onContinue: () => void;
  onGameOver: () => void;
  turn: number;
  score: number;
  game: Game;
  guess: Coordinate | null;
  guessConfirmed: boolean;
}) {
  const {
    game,
    turn,
    guessConfirmed,
    onGuess,
    guess,
    score,
    onGuessConfirmed,
    onContinue,
    onGameOver,
  } = props;
  const station = game.stations[turn];

  const curGuessScore = guess ? calculateScore(guess, station) : null;

  return (
    <>
      <header className="stats">
        <div className="stat-container">
          <div className="stat-component">
            <span className="stat-component-name">Turn:</span>
            <span className="stat-component-value">{turn + 1} / 5</span>
          </div>

          <div className="stat-component">
            <span className="stat-component-name">Total score:</span>
            <span className="stat-component-value">{score}</span>
          </div>
        </div>
      </header>

      <StationHeader station={station} />

      <GameplayMap
        onClick={(guess) => {
          if (!guessConfirmed) {
            onGuess(guess);
          }
        }}
        station={station}
        guessConfirmed={guessConfirmed}
        guess={guess}
        key={turn}
      />

      <div className="buttons">
        {!guessConfirmed && (
          <button
            disabled={guess === null}
            onClick={() => onGuessConfirmed(curGuessScore!)}
          >
            Confirm
          </button>
        )}
        {guessConfirmed && guess && turn !== 4 && (
          <button onClick={onContinue}>Continue</button>
        )}
        {guessConfirmed && guess && turn == 4 && (
          <button onClick={onGameOver}>See Results</button>
        )}
      </div>
    </>
  );
}

class App extends React.Component<
  {},
  {
    score: number;
    game: Game;
    turn: number;
    guess: Coordinate | null;
    guessConfirmed: boolean;
    gameOver: boolean;
  }
> {
  constructor() {
    super({});
    this.state = {
      game: makeGame(),
      guess: null,
      guessConfirmed: false,
      gameOver: false,
      turn: 0,
      score: 0,
    };
  }

  render() {
    const { game, gameOver, turn, guessConfirmed, guess, score } = this.state;

    return (
      <div className="main-container">
        <div className="inner-container">
          {!gameOver && (
            <ActiveGame
              onGuess={(guess) =>
                this.setState({ guess, guessConfirmed: false })
              }
              onGuessConfirmed={(guessScore) => {
                this.setState({
                  guessConfirmed: true,
                  score: guessScore + score,
                });
              }}
              onContinue={() => {
                this.setState({
                  guess: null,
                  guessConfirmed: false,
                  turn: turn + 1,
                });
              }}
              onGameOver={() => {
                addHighScore(score);
                this.setState({
                  gameOver: true,
                });
              }}
              game={game}
              turn={turn}
              guessConfirmed={guessConfirmed}
              score={score}
              guess={guess}
            />
          )}

          {gameOver && (
            <GameReview
              score={score}
              onNewGame={() => {
                this.setState({
                  game: makeGame(),
                  guess: null,
                  guessConfirmed: false,
                  gameOver: false,
                  turn: 0,
                  score: 0,
                });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
