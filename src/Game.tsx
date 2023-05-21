import React, { useState } from "react";
import _ from "lodash";
import { MapProvider, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type {
  Station,
  Coordinate,
  PlayableConfig,
} from "./data/operator_config";
import { Game, calculateScore, makeGame } from "./game_logic";
import { StationHeader } from "./StationHeader";
import { WrappedMap, INITIAL_MAP_STATE } from "./WrappedMap";

const HIGH_SCORES_KEY = "highScores";
const SEEN_INSTRUCTIONS_KEY = "seenInstructions";

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
  game: Game;
  score: number;
  onNewGame: () => void;
}) {
  const { score, onNewGame, game } = props;
  const [copied, setCopied] = useState(false);
  const [selectedTurn, setSelectedTurn] = useState(0);
  const highScores = getHighScores();

  const guess = game.guesses[selectedTurn];
  const station = game.stations[selectedTurn];

  const guessScore = calculateScore(guess!, station);
  const mapRef = useMap();
  const resetView = () => {
    mapRef?.reviewMap?.jumpTo(INITIAL_MAP_STATE);
  };

  return (
    <>
      <div className="final-score-container">
        <h2 className="final-score">Score: {score}</h2>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setCopied(true);
            const toShare = shareableGame(game, score);
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
  onGuess: (score: number, location: Coordinate) => void;
  onContinue: () => void;
  onGameOver: () => void;
  turn: number;
  score: number;
  game: Game;
}) {
  const { game, turn, onGuess, score, onContinue, onGameOver } = props;
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

      <StationHeader station={station} />

      <GameplayMap
        onClick={(guess) => {
          if (!confirmed) {
            setGuess(guess);
          }
        }}
        station={station}
        guessConfirmed={confirmed}
        guess={guess}
      />

      <div className="buttons">
        {!confirmed && (
          <button
            disabled={guess === null}
            onClick={() => {
              onGuess(calculateScore(guess!, station).score, guess!);
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

function Instructions() {
  const [visible, setVisible] = useState(!hasSeenInstruction());

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
  const [game, setGame] = useState(makeGame(props.config));
  const [gameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);

  const mapRef = useMap();
  const resetView = () => {
    mapRef?.reviewMap?.jumpTo(INITIAL_MAP_STATE);
    mapRef?.gameplayMap?.jumpTo(INITIAL_MAP_STATE);
  };

  return (
    <div className="main-container">
      <Instructions />
      <div className="inner-container">
        {!gameOver && (
          <ActiveGame
            onGuess={(guessScore, guessLoc) => {
              let newGame = { ...game };
              newGame.guesses[turn] = guessLoc;

              setScore(score + guessScore);
              setGame(newGame);
            }}
            onContinue={() => {
              setTurn(turn + 1);
              resetView();
            }}
            onGameOver={() => {
              addHighScore(score);
              setGameOver(true);
            }}
            game={game}
            turn={turn}
            score={score}
          />
        )}

        {gameOver && (
          <GameReview
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
