import React, { useState } from "react";
import "./App.css";
import _ from "lodash";
import type { MapboxStyle } from "react-map-gl";
import { Map, MapProvider, useMap, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapStyle from "./map_style";
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore/lite";
import type { Station, Coordinate, Line } from "./data/stations";
import type { FirebaseOptions, FirebaseApp } from "firebase/app";
import { Game, calculateScore, makeGame } from "./game/game";

const GUESSES_COLLECTION_NAME = "guesses";
const SCORES_COLLECTION_NAME = "scores";

declare global {
  interface Window {
    firebaseConfig?: FirebaseOptions; // error RIP
  }
}

let firebaseApp: FirebaseApp | undefined;

const HIGH_SCORES_KEY = "highScores";
const SEEN_INSTRUCTIONS_KEY = "seenInstructions";

const INITIAL_MAP_STATE = {
  longitude: -73.875,
  latitude: 40.73065,
  zoom: 9.25,
};

function shareableGame(game: Game, score: number): string {
  const guessStrs = [0, 1, 2, 3, 4].map((turn) => {
    const guess = game.guesses[turn];
    const station = game.stations[turn];
    const splitStationName = station.name.split("/")[0];
    const stationScore = calculateScore(guess!, station).score;

    const numStars = Math.ceil(stationScore / 1000);
    let stationScoreEmojis =
      _.repeat("⭐️", numStars) + _.repeat("◽️", 5 - numStars);

    if (stationScore > 4800) {
      stationScoreEmojis = "🌟🌟🌟🌟🌟";
    }

    return `${stationScoreEmojis} ${splitStationName}`;
  });
  return `
${score.toLocaleString()} / 25,000
${guessStrs.join("\n")}
https://nycguessr.com
    `.trim();
}

function tryToSaveFirebaseDoc(collectionName: string, doc: unknown) {
  try {
    if (!firebaseApp && window.firebaseConfig) {
      firebaseApp = initializeApp(window.firebaseConfig);
    }

    if (!firebaseApp) {
      return;
    }

    const dbRef = getFirestore(firebaseApp);
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
  id: string;
  guessScore: number | null;
  stationMarker: Coordinate | null;
  onClick: (c: Coordinate) => void;
}) {
  const { id, guessMarker, stationMarker, onClick, guessScore } = props;
  return (
    <Map
      id={id}
      initialViewState={INITIAL_MAP_STATE}
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
      id="gameplayMap"
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
  gameReviewCopied: boolean;
  onNewGame: () => void;
  onCopy: () => void;
  onSelectTurn: (turn: number) => void;
}) {
  const {
    score,
    onNewGame,
    onSelectTurn,
    onCopy,
    gameReviewCopied,
    turn,
    guess,
    station,
  } = props;
  const highScores = getHighScores();

  const guessScore = calculateScore(guess, station);

  return (
    <>
      <div className="final-score-container">
        <h2 className="final-score">Score: {score}</h2>
      </div>
      <div className="buttons">
        <button onClick={onCopy}>
          {gameReviewCopied ? "Copied" : "Share"}
        </button>
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
              id="reviewMap"
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

function AppImpl() {
  // TODO: refactor once I understand good react code
  const [game, setGame] = useState(makeGame());
  const [guess, setGuess] = useState<Coordinate | null>(null);
  const [gameReviewSelectedTurn, setGameReviewSelectedTurn] = useState(0);
  const [gameReviewCopied, setGameReviewCopied] = useState(false);
  const [guessConfirmed, setGuessConfirmed] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [instructionsVisible, setInstructionsVisible] = useState(
    !hasSeenInstruction()
  );

  const mapRef = useMap();
  const resetView = () => {
    mapRef?.reviewMap?.jumpTo(INITIAL_MAP_STATE);
    mapRef?.gameplayMap?.jumpTo(INITIAL_MAP_STATE);
  };

  return (
    <div className="main-container">
      <Instructions
        visible={instructionsVisible}
        onHide={() => {
          markInstructionsSeen();
          setInstructionsVisible(false);
        }}
      />
      <div className="inner-container">
        {!gameOver && (
          <ActiveGame
            onGuess={(guess) => {
              setGuess(guess);
              setGuessConfirmed(false);
            }}
            onGuessConfirmed={(guessScore) => {
              let newGame = { ...game };
              newGame.guesses[turn] = guess;

              const station = game.stations[turn];
              const stationNameSuffix = station.lines
                .map((line: Line) => `${line.name}${line.express ? "Exp" : ""}`)
                .join(",");

              tryToSaveFirebaseDoc(GUESSES_COLLECTION_NAME, {
                score: guessScore,
                station: `${station.name} (${stationNameSuffix})`,
                loc: guess,
              });

              setGuessConfirmed(true);
              setScore(score + guessScore);
              setGame(newGame);
            }}
            onContinue={() => {
              setGuess(null);
              setGuessConfirmed(false);
              setTurn(turn + 1);
              resetView();
            }}
            onGameOver={() => {
              addHighScore(score);
              tryToSaveFirebaseDoc(SCORES_COLLECTION_NAME, { score: score });
              setGameOver(true);
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
            gameReviewCopied={gameReviewCopied}
            onSelectTurn={(turn) => {
              setGameReviewSelectedTurn(turn);
              resetView();
            }}
            onCopy={() => {
              const toShare = shareableGame(game, score);
              navigator.clipboard.writeText(toShare);
              setGameReviewCopied(true);
            }}
            onNewGame={() => {
              setGame(makeGame);
              setGuess(null);
              setGuessConfirmed(false);
              setGameReviewSelectedTurn(0);
              setGameReviewCopied(false);
              setGameOver(false);
              setTurn(0);
              setScore(0);
              resetView();
            }}
          />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <MapProvider>
      <AppImpl />
    </MapProvider>
  );
}

export default App;
