import React from "react";
import "./App.css";
import type { MapboxStyle } from "react-map-gl";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapStyle from "./map_style";
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore/lite";
import type { Station, Coordinate, Line } from "./data/stations";
import { Game, calculateScore, makeGame } from "./game/game";

const GUESSES_COLLECTION_NAME = "guesses";
const SCORES_COLLECTION_NAME = "scores";

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);

const HIGH_SCORES_KEY = "highScores";
const SEEN_INSTRUCTIONS_KEY = "seenInstructions";

function tryToSaveFirebaseDoc(collectionName: string, doc: unknown) {
  try {
    const dbRef = getFirestore(FIREBASE_APP);
    const collectionRef = collection(dbRef, collectionName);
    addDoc(collectionRef, doc);
  } catch (err) {
    console.error("Error sending guess data to server", err);
  }
}

function getHighScores(): number[] {
  try {
    const highScores = JSON.parse(
      localStorage.getItem(HIGH_SCORES_KEY) ?? "[]"
    );
    return highScores.map((score: string) => parseInt(score));
  } catch {
    console.error("high score load error");
    return [];
  }
}

function addHighScore(score: number): void {
  let curScores = [...getHighScores(), score];
  let sortedScores = curScores.sort((a, b) => b - a);
  localStorage.setItem(
    HIGH_SCORES_KEY,
    JSON.stringify(sortedScores.slice(0, 5))
  );
}

function markInstructionsSeen() {
  localStorage.setItem(SEEN_INSTRUCTIONS_KEY, "1");
}

function hasSeenInstruction() {
  return localStorage.getItem(SEEN_INSTRUCTIONS_KEY) !== null;
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
        zoom: 9.25,
      }}
      maxZoom={12}
      minZoom={8.5}
      onClick={(e) => {
        onClick([e.lngLat.lng, e.lngLat.lat]);
      }}
      style={{ width: 500, height: 400 }}
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
      stationMarker={guessConfirmed ? guessScore!.point : null}
      guessScore={guessConfirmed ? guessScore!.score : null}
    />
  );
}

function GameReview(props: {
  station: Station;
  guess: Coordinate;
  score: number;
  turn: number;
  onNewGame: () => void;
  onSelectTurn: (turn: number) => void;
}) {
  const { score, onNewGame, onSelectTurn, turn, guess, station } = props;
  const highScores = getHighScores();

  const guessScore = calculateScore(guess, station);

  return (
    <>
      <div className="final-score-container">
        <h2 className="final-score">Score: {score}</h2>
      </div>
      <div className="buttons">
        <button onClick={onNewGame}>Play Again</button>
      </div>
      <div className="guess-review">
        <div className="guess-review-heading">
          <div className="turn-select-prefix">
            <span>Turn:</span>
          </div>
          {[0, 1, 2, 3, 4].map((curTurn) => {
            return (
              <div
                className={`turn-select-item${
                  curTurn === turn ? " active" : ""
                }`}
                onClick={() => onSelectTurn(curTurn)}
                key={curTurn}
              >
                <span>{curTurn + 1}</span>
              </div>
            );
          })}
        </div>

        <div className="guess-review">
          <div className="guess-review-item">
            <StationHeader station={station} />
            <WrappedMap
              guessMarker={guess}
              stationMarker={guessScore.point}
              onClick={(c) => {}}
              guessScore={guessScore.score}
            />
          </div>
        </div>
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

  const curGuessScore = guess ? calculateScore(guess, station).score : null;

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
        {guessConfirmed && guess && turn === 4 && (
          <button onClick={onGameOver}>See Results</button>
        )}
      </div>
    </>
  );
}

function Instructions(props: { visible: boolean; onHide: () => void }) {
  const { visible, onHide } = props;

  if (!visible) {
    return null;
  }

  return (
    <div className="instructions-container">
      <div className="instructions-content">
        <h3>Instructions</h3>
        <p>
          Click on the map to guess where the displayed MTA stop is located.
          There will be 5 rounds. Each round has a maximum score of 5000 points,
          which are awarded based on how close your guess is to the actual
          subway stop location.
        </p>
        <div className="buttons buttons-hide">
          <button onClick={onHide}>Got It</button>
        </div>
      </div>
    </div>
  );
}

class App extends React.Component<
  {},
  {
    score: number;
    game: Game;
    turn: number;
    gameReviewSelectedTurn: number;
    guess: Coordinate | null;
    guessConfirmed: boolean;
    gameOver: boolean;
    instructionsVisible: boolean;
  }
> {
  constructor() {
    super({});
    this.state = {
      game: makeGame(),
      guess: null,
      gameReviewSelectedTurn: 0,
      guessConfirmed: false,
      gameOver: false,
      turn: 0,
      score: 0,
      instructionsVisible: !hasSeenInstruction(),
    };
  }

  render() {
    const {
      game,
      gameOver,
      turn,
      gameReviewSelectedTurn,
      guessConfirmed,
      guess,
      score,
      instructionsVisible,
    } = this.state;

    return (
      <div className="main-container">
        <Instructions
          visible={instructionsVisible}
          onHide={() => {
            markInstructionsSeen();
            this.setState({ instructionsVisible: false });
          }}
        />
        <div className="inner-container">
          {!gameOver && (
            <ActiveGame
              onGuess={(guess) =>
                this.setState({ guess, guessConfirmed: false })
              }
              onGuessConfirmed={(guessScore) => {
                let newGame = { ...game };
                newGame.guesses[turn] = guess;

                const station = game.stations[turn];
                const stationNameSuffix = station.lines
                  .map(
                    (line: Line) => `${line.name}${line.express ? "Exp" : ""}`
                  )
                  .join(",");

                tryToSaveFirebaseDoc(GUESSES_COLLECTION_NAME, {
                  score: guessScore,
                  station: `${station.name} (${stationNameSuffix})`,
                  loc: guess,
                });

                this.setState({
                  guessConfirmed: true,
                  score: guessScore + score,
                  game: newGame,
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
                tryToSaveFirebaseDoc(SCORES_COLLECTION_NAME, { score: score });
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
              guess={game.guesses[gameReviewSelectedTurn]!}
              station={game.stations[gameReviewSelectedTurn]!}
              turn={gameReviewSelectedTurn}
              score={score}
              onSelectTurn={(turn) => {
                this.setState({ gameReviewSelectedTurn: turn });
              }}
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
