import React from "react";
import "./App.css";
import type { MapboxStyle } from "react-map-gl";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import type { Station, Coordinate } from "./data/stations";

import { Game, calculateScore, makeGame } from "./game/game";

const mapStyle = {
  version: 8,
  name: "Basic",
  metadata: {
    "mapbox:autocomposite": true,
  },
  sources: {
    mapbox: {
      url: "mapbox://mapbox.mapbox-streets-v7",
      type: "vector",
    },
  },
  sprite: "mapbox://sprites/mapbox/basic-v8",
  glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#dedede",
      },
      interactive: true,
    },
    {
      id: "landuse_overlay_national_park",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse_overlay",
      filter: ["==", "class", "national_park"],
      paint: {
        "fill-color": "#d2edae",
        "fill-opacity": 0.75,
      },
      interactive: true,
    },
    {
      id: "landuse_park",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse",
      filter: ["==", "class", "park"],
      paint: {
        "fill-color": "#d2edae",
      },
      interactive: true,
    },
    {
      id: "waterway",
      type: "line",
      source: "mapbox",
      "source-layer": "waterway",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "river", "canal"],
      ],
      paint: {
        "line-color": "#a0cfdf",
        "line-width": {
          base: 1.4,
          stops: [
            [8, 0.5],
            [20, 15],
          ],
        },
      },
      interactive: true,
    },
    {
      id: "water",
      type: "fill",
      source: "mapbox",
      "source-layer": "water",
      paint: {
        "fill-color": "#a0cfdf",
      },
      interactive: true,
    },
  ],
};

function ConfirmGuess(props: {
  guess: Coordinate;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -73.935242,
          latitude: 40.73061,
          zoom: 9,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle={mapStyle as MapboxStyle}
      >
        <Marker longitude={props.guess[0]} latitude={props.guess[1]} />
      </Map>
      <button onClick={props.onConfirm}>Confirm</button>;
      <button onClick={props.onCancel}>Cancel</button>;
    </div>
  );
}

function ShowGuess(props: {
  guess: Coordinate;
  station: Station;
  onContinue: () => void;
}) {
  return (
    <div>
      <p>Score: {calculateScore(props.guess, props.station)}</p>
      <Map
        initialViewState={{
          longitude: -73.935242,
          latitude: 40.73061,
          zoom: 9,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle={mapStyle as MapboxStyle}
      >
        <Marker longitude={props.guess[0]} latitude={props.guess[1]} />
        <Marker
          color="red"
          longitude={props.station.coordinates[0]![0]}
          latitude={props.station.coordinates[0]![1]}
        />
      </Map>
      <button onClick={props.onContinue}>Continue</button>;
    </div>
  );
}

function MakeGuess(props: {
  turn: number;
  station: Station;
  onGuess: (c: Coordinate) => void;
}) {
  return (
    <div>
      <p>Turn: {props.turn + 1}</p>
      <p>Station: {props.station.name}</p>
      <p>{props.station.lines}</p>
      <Map
        initialViewState={{
          longitude: -73.935242,
          latitude: 40.73061,
          zoom: 9,
        }}
        onClick={(e) => {
          props.onGuess([e.lngLat.lng, e.lngLat.lat]);
        }}
        style={{ width: 600, height: 400 }}
        mapStyle={mapStyle as MapboxStyle}
      />
    </div>
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
    let mainContent = null;

    if (this.state.turn === 5) {
      mainContent = (
        <ReviewGame game={this.state.game} score={this.state.score} />
      );
    } else if (this.state.guess === null) {
      mainContent = (
        <MakeGuess
          turn={this.state.turn}
          station={this.state.game.stations[this.state.turn]}
          onGuess={(coord) => {
            this.setState({ guess: coord, guessConfirmed: false });
          }}
        />
      );
    } else if (!this.state.guessConfirmed) {
      mainContent = (
        <ConfirmGuess
          guess={this.state.guess}
          onConfirm={() => {
            this.setState({
              guessConfirmed: true,
              score:
                this.state.score +
                calculateScore(
                  this.state.guess!,
                  this.state.game.stations[this.state.turn]
                ),
            });
          }}
          onCancel={() => {
            this.setState({
              guessConfirmed: false,
              guess: null,
            });
          }}
        />
      );
    } else {
      mainContent = (
        <ShowGuess
          guess={this.state.guess}
          station={this.state.game.stations[this.state.turn]}
          onContinue={() => {
            this.setState({
              turn: this.state.turn + 1,
              guess: null,
              guessConfirmed: false,
            });
          }}
        />
      );
    }
    return (
      <div className="App">
        <p>Score: {this.state.score}</p>
        {mainContent}
      </div>
    );
  }
}

export default App;
