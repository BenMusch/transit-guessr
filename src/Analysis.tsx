import React, { useState } from "react";

import _ from "lodash";
import { STATION_GUESS_DATA } from "./data/guesses";
import "./Analysis.css";
import type { Station, Coordinate } from "./data/stations";
import { STATIONS } from "./data/stations";
import { firebaseNameForStation } from "./firebase";
import { StationHeader } from "./StationHeader";
import { WrappedMap } from "./WrappedMap";

const STATIONS_BY_FIREBASE_NAME = _.fromPairs(
  STATIONS.map((station) => [firebaseNameForStation(station), station])
);

function StationGuessAnalysis(props: {
  station: Station;
  avgScore: number;
  first?: boolean;
  last?: boolean;
  onNext: () => void;
  onPrev: () => void;
  onBack: () => void;
}) {
  const { station, avgScore, first, last, onNext, onPrev, onBack } = props;

  return (
    <>
      <header className="analysis-nav">
        <div className="analysis-nav-container">
          <div className="analysis-nav-left">
            <button className="analysis-nav-link" onClick={onBack}>
              Back
            </button>
          </div>
          <div className="analysis-nav-center">
            <span className="analysis-nav-info">Average score: {avgScore}</span>
          </div>
          <div className="analysis-nav-right">
            <button
              disabled={last}
              className="analysis-nav-link"
              onClick={onNext}
            >
              Next
            </button>
            <button
              disabled={first}
              className="analysis-nav-link"
              onClick={onPrev}
            >
              Prev
            </button>
          </div>
        </div>
      </header>
      <StationHeader station={station} />
      <WrappedMap
        id="analysis"
        guessesSourceFile={`geojson/${firebaseNameForStation(station).replace(
          /[^\w\d]/g,
          ""
        )}.geojson`}
        stationMarker={station.coordinates[0]!}
      />
    </>
  );
}

function Analysis() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (selectedIndex === null) {
    return (
      <div className="main-container">
        <div className="inner-container inner-container-large">
          <table>
            <thead>
              <th>Station</th>
              <th>Lines</th>
              <th>Avg. Guess Score (max 5000)</th>
            </thead>
            <tbody>
              {STATION_GUESS_DATA.map((stationGuessData, i) => {
                const station =
                  STATIONS_BY_FIREBASE_NAME[stationGuessData.station];

                return (
                  <tr
                    key={i}
                    onClick={() => {
                      setSelectedIndex(i);
                    }}
                  >
                    <td
                      onClick={() => {
                        setSelectedIndex(i);
                      }}
                    >
                      {station.name.split("/")[0]}
                    </td>
                    <td
                      className="station-lines station-lines-small"
                      onClick={() => {
                        setSelectedIndex(i);
                      }}
                    >
                      {station.lines.map((line, i) => {
                        return (
                          <div
                            key={i}
                            className={`station-line station-line-small ${
                              line.lineGroup
                            } ${line.express ? "express" : "local"}`}
                          >
                            <span className="station-line-name">
                              {line.name}
                            </span>
                          </div>
                        );
                      })}
                    </td>
                    <td
                      onClick={() => {
                        setSelectedIndex(i);
                      }}
                    >
                      {Math.round(stationGuessData.avgScore)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    const stationGuessData = STATION_GUESS_DATA[selectedIndex]!;
    const station = STATIONS_BY_FIREBASE_NAME[stationGuessData.station];
    return (
      <div className="main-container">
        <div className="inner-container">
          <StationGuessAnalysis
            station={station}
            avgScore={Math.round(stationGuessData.avgScore)}
            first={selectedIndex === 0}
            last={selectedIndex === STATION_GUESS_DATA.length - 1}
            onBack={() => setSelectedIndex(null)}
            onNext={() => setSelectedIndex(selectedIndex + 1)}
            onPrev={() => setSelectedIndex(selectedIndex - 1)}
          />
        </div>
      </div>
    );
  }
}

export default Analysis;
