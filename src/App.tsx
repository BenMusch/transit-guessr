import React from "react";
import "./App.css";
import type { MapboxStyle } from "react-map-gl";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapStyle from "./map_style";

import type { Station, Coordinate } from "./data/stations";

import { Game, calculateScore, makeGame } from "./game/game";

function WrappedMap(props: {
  guessMarker: Coordinate | null;
  stationMarker: Coordinate | null;
  onClick: (c: Coordinate) => void;
}) {
  const { guessMarker, stationMarker, onClick } = props;
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
    </Map>
  );
}

function ReviewGame(props: { game: Game; score: number }) {
  return <h1>done! score: {props.score}</h1>;
}

class App extends React.Component<
  {},
  {
    score: number;
    game: Game;
    turn: number;
    guess: Coordinate | null;
    guessConfirmed: boolean;
  }
> {
  constructor() {
    super({});
    this.state = {
      game: makeGame(),
      guess: null,
      guessConfirmed: false,
      turn: 0,
      score: 0,
    };
  }

  render() {
    if (this.state.turn === 5) {
      return (
        <div className="App">
          <ReviewGame game={this.state.game} score={this.state.score} />
        </div>
      );
    }

    const { game, turn, guessConfirmed, guess, score } = this.state;
    const station = game.stations[turn];

    const curGuessScore = guess ? calculateScore(guess, station) : null;

    return (
      <div className="main-container">
        <div className="inner-container">
          <header className="stats">
            <div className="stat-component">
              <span className="stat-component-name">Turn:</span>
              <span className="stat-component-name">{turn + 1} / 5</span>
            </div>

            <div className="stat-component">
              <span className="stat-component-name">Total score:</span>
              <span className="stat-component-name">{score}</span>
            </div>
          </header>

          <div className="station-heading">
            <h1 className="station-name">{station.name}</h1>
            <div className="station-lines">
              {station.lines.map((line) => {
                return (
                  <div
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

          {guessConfirmed && curGuessScore && (
            <div className="guess-score-container">
              <div className="stat-component">
                <span className="stat-component-name">Guess score:</span>
                <span className="stat-component-name">{curGuessScore}</span>
              </div>
            </div>
          )}

          <WrappedMap
            key={turn}
            onClick={(guess) => {
              if (!guessConfirmed) {
                this.setState({ guess, guessConfirmed: false });
              }
            }}
            guessMarker={guess}
            stationMarker={guessConfirmed ? station.coordinates[0]! : null}
          />

          {!guessConfirmed && (
            <button
              disabled={guess === null}
              onClick={() =>
                this.setState({
                  guessConfirmed: true,
                  score: curGuessScore! + score,
                })
              }
            >
              Confirm
            </button>
          )}
          {guessConfirmed && guess && (
            <button
              onClick={() => {
                this.setState({
                  guessConfirmed: false,
                  guess: null,
                  turn: turn + 1,
                });
              }}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
