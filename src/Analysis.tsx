import React, { useState } from "react";

import _ from "lodash";
import { STATION_GUESS_DATA } from "./data/guesses";
import "./Analysis.css";
import type { Station } from "./data/stations";
import { STATIONS } from "./data/stations";
import { firebaseNameForStation } from "./firebase";
import { StationHeader } from "./StationHeader";

const STATIONS_BY_FIREBASE_NAME = _.fromPairs(
  STATIONS.map((station) => [firebaseNameForStation(station), station])
);

function StationGuessAnalysis(props: { station: Station }) {
  const { station } = props;
  return <StationHeader station={station} />;
}

function Analysis() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!selectedIndex) {
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1>Analysis!</h1>

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
                    onClick={() => {
                      setSelectedIndex(i);
                    }}
                  >
                    <td>{station.name.split("/")[0]}</td>
                    <td className="station-lines station-lines-small">
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
                    <td>{Math.round(stationGuessData.avgScore)}</td>
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
          <StationGuessAnalysis station={station} />
        </div>
      </div>
    );
  }
}

export default Analysis;
