import React, { useState } from "react";
import _ from "lodash";
import { MapProvider, useMap } from "react-map-gl";
import type { CameraOptions } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Coordinate } from "./operators/types";
import type { PlayableConfig, PlayableStation } from "./operators/config";
import { Game, calculateScore, makeGame } from "./game_logic";
import { WrappedMap } from "./WrappedMap";
import { FirebaseCollection, tryToSaveFirebaseDoc } from "./firebase";

const HIGH_SCORES_KEY = "highScores";
const SEEN_INSTRUCTIONS_KEY = "seenInstructions";

let localStorageFailed = false;

function shareableGame(
  game: Game,
  score: number,
  config: PlayableConfig,
): string {
  const guessStrs = [0, 1, 2, 3, 4].map((turn) => {
    const guess = game.guesses[turn];
    const station = game.stations[turn];
    const stationScore = calculateScore(
      guess!,
      station,
      station.zeroPointDistanceInMetersOverride ??
        config.zeroPointDistanceInMeters,
    ).score;

    const scoreBrackets = [0, 1000, 2500, 4000, 4750];
    const numStars = _.sortedLastIndex(scoreBrackets, stationScore);
    let stationScoreEmojis =
      _.repeat("⭐️", numStars) + _.repeat("◽️", 5 - numStars);

    return `${stationScoreEmojis} ${config.shortNameForStation(
      station as any,
    )}`;
  });
  return `
${`My score: ${score.toLocaleString()} / 25,000`}
${guessStrs.join("\n")}
${config.domain}
    `.trim();
}

function getHighScores(): number[] {
  try {
    const highScores = JSON.parse(
      localStorage.getItem(HIGH_SCORES_KEY) ?? "[]",
    );
    return highScores.map((score: string) => parseInt(score));
  } catch {
    localStorageFailed = true;
    console.error("high score load error");
    return [];
  }
}

function addHighScore(score: number): void {
  let curScores = [...getHighScores(), score];
  let sortedScores = curScores.sort((a, b) => b - a);
  try {
    localStorage.setItem(
      HIGH_SCORES_KEY,
      JSON.stringify(sortedScores.slice(0, 5)),
    );
  } catch {
    localStorageFailed = true;
  }
}

function markInstructionsSeen() {
  try {
    localStorage.setItem(SEEN_INSTRUCTIONS_KEY, "1");
  } catch {
    localStorageFailed = true;
  }
}

function hasSeenInstruction() {
  try {
    return localStorage.getItem(SEEN_INSTRUCTIONS_KEY) !== null;
  } catch {
    localStorageFailed = true;
  }
}

function GameplayMap(props: {
  station: PlayableStation;
  guess: Coordinate | null;
  guessConfirmed: boolean;
  initialViewState: { zoom: number; latitude: number; longitude: number };
  onClick: (c: Coordinate) => void;
  config: PlayableConfig;
}) {
  const { config, guess, station, guessConfirmed, onClick, initialViewState } =
    props;
  const guessScore = guess
    ? calculateScore(guess, station, config.zeroPointDistanceInMeters)
    : null;

  return (
    <WrappedMap
      id="gameplayMap"
      zoomControls={config.zoomConfigurations}
      initialViewState={initialViewState}
      onClick={onClick}
      guessMarker={guess}
      stationMarker={guessConfirmed ? guessScore!.point : null}
      guessScore={guessConfirmed ? guessScore!.score : null}
    />
  );
}

function GameReview(props: {
  config: PlayableConfig;
  game: Game;
  score: number;
  onNewGame: () => void;
}) {
  const { config, score, onNewGame, game } = props;
  const [copied, setCopied] = useState(false);
  const [selectedTurn, setSelectedTurn] = useState(0);
  const highScores = getHighScores();

  const guess = game.guesses[selectedTurn];
  const station = game.stations[selectedTurn];

  const guessScore = calculateScore(
    guess!,
    station,
    config.zeroPointDistanceInMeters,
  );
  const mapRef = useMap();
  const resetView = () => {
    mapRef?.reviewMap?.jumpTo({
      zoom: config.initialMapState.zoom,
      pitch: 0,
      center: [
        config.initialMapState.longitude,
        config.initialMapState.latitude,
      ],
    });
  };

  return (
    <>
      <div className="final-score-container">
        <h2 className="final-score">Score: {score}</h2>
      </div>
      {highScores.length === 0 || score >= highScores[0] ? (
        <h2 className="new-high-score">New high score!</h2>
      ) : null}
      <div className="buttons">
        <button
          onClick={() => {
            setCopied(true);
            const toShare = shareableGame(game, score, config);
            navigator.clipboard.writeText(toShare);
          }}
        >
          {copied ? "Copied" : "Share"}
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
                  curTurn === selectedTurn ? " active" : ""
                }`}
                onClick={() => {
                  setSelectedTurn(curTurn);
                  resetView();
                }}
                key={curTurn}
              >
                <span>{curTurn + 1}</span>
              </div>
            );
          })}
        </div>

        <div className="guess-review">
          <div className="guess-review-item">
            {config.renderStationHeading(station as any)}
            <WrappedMap
              id="reviewMap"
              initialViewState={config.initialMapState}
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
        {localStorageFailed && (
          <span>
            Cannot load/save high scores in the embedded version of the game.
            Try visiting the website directly
          </span>
        )}
      </div>
    </>
  );
}

function ActiveGame(props: {
  config: PlayableConfig;
  onGuess: (score: number, location: Coordinate) => void;
  onContinue: () => void;
  onGameOver: () => void;
  turn: number;
  score: number;
  game: Game;
}) {
  const { config, game, turn, onGuess, score, onContinue, onGameOver } = props;
  const station = game.stations[turn];

  const [guess, setGuess] = useState<Coordinate | null>(null);
  const [confirmed, setConfirmed] = useState(false);

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

      {config.renderStationHeading(station as any)}

      <GameplayMap
        onClick={(guess) => {
          if (!confirmed) {
            setGuess(guess);
          }
        }}
        config={config}
        initialViewState={config.initialMapState}
        station={station}
        guessConfirmed={confirmed}
        guess={guess}
      />

      <div className="buttons">
        {!confirmed && (
          <button
            disabled={guess === null}
            onClick={() => {
              onGuess(
                calculateScore(
                  guess!,
                  station,
                  config.zeroPointDistanceInMeters,
                ).score,
                guess!,
              );
              setConfirmed(true);
            }}
          >
            Confirm
          </button>
        )}
        {confirmed && guess && turn !== 4 && (
          <button
            onClick={() => {
              setGuess(null);
              setConfirmed(false);
              onContinue();
            }}
          >
            Continue
          </button>
        )}
        {confirmed && guess && turn === 4 && (
          <button
            onClick={() => {
              setGuess(null);
              setConfirmed(false);
              onGameOver();
            }}
          >
            See Results
          </button>
        )}
      </div>
    </>
  );
}

function Instructions(props: { config: PlayableConfig }) {
  const [visible, setVisible] = useState(!hasSeenInstruction());

  if (!visible) {
    return null;
  }

  return (
    <div className="instructions-container">
      <div className="instructions-content">
        <h3>Instructions</h3>
        <p>
          Click on the map to guess where the displayed{" "}
          {props.config.operatorName} stop is located. There will be 5 rounds.
          Each round has a maximum score of 5000 points, which are awarded based
          on how close your guess is to the actual stop location.
        </p>
        <div className="buttons buttons-hide">
          <button
            onClick={() => {
              setVisible(false);
              markInstructionsSeen();
            }}
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}

function GameImpl(props: { config: PlayableConfig }) {
  const { config } = props;
  const [game, setGame] = useState(makeGame(props.config));
  const [gameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);

  const mapRef = useMap();
  const resetView = () => {
    const stateToJumpTo: CameraOptions = {
      center: [
        config.initialMapState.longitude,
        config.initialMapState.latitude,
      ],
      zoom: config.initialMapState.zoom,
      pitch: 0,
    };
    mapRef?.reviewMap?.jumpTo(stateToJumpTo);
    mapRef?.gameplayMap?.jumpTo(stateToJumpTo);
  };

  return (
    <div className="main-container">
      <Instructions config={config} />
      <div className="inner-container">
        {!gameOver && (
          <ActiveGame
            config={props.config}
            onGuess={(guessScore, guessLoc) => {
              let newGame = { ...game };
              const station = game.stations[turn];
              newGame.guesses[turn] = guessLoc;

              setScore(score + guessScore);
              setGame(newGame);

              tryToSaveFirebaseDoc(FirebaseCollection.GUESSES, {
                operator: config.operatorName,
                score: guessScore,
                station: config.uniqueNameForStation(station as any),
                loc: guessLoc,
              });
            }}
            onContinue={() => {
              setTurn(turn + 1);
              resetView();
            }}
            onGameOver={() => {
              addHighScore(score);
              tryToSaveFirebaseDoc(FirebaseCollection.SCORES, {
                score: score,
                operator: config.operatorName,
              });
              setGameOver(true);
            }}
            game={game}
            turn={turn}
            score={score}
          />
        )}

        {gameOver && (
          <GameReview
            config={props.config}
            game={game}
            score={score}
            onNewGame={() => {
              setGame(makeGame(props.config));
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

function GameComponent(props: { config: PlayableConfig }) {
  return (
    <MapProvider>
      <GameImpl config={props.config} />
    </MapProvider>
  );
}

export default GameComponent;
