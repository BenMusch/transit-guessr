import React from "react";

import _ from "lodash";
import { STATION_GUESS_DATA } from "./data/guesses";
import { LinesRow } from "./LinesRow";
import "./Analysis.css";
import type { Station } from "./data/stations";
import { STATIONS } from "./data/stations";
import { firebaseNameForStation } from "./firebase";
import { StationHeader } from "./StationHeader";
import { WrappedMap } from "./WrappedMap";
import { useParams, useNavigate, Link } from "react-router-dom";

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
        guessesSourceFile={`/geojson/${firebaseNameForStation(station).replace(
          /[^\w\d]/g,
          ""
        )}.geojson`}
        stationMarker={station.coordinates[0]!}
      />
    </>
  );
}

function Analysis() {
  const { selectedIndex } = useParams();
  const navigate = useNavigate();

  if (selectedIndex === null || selectedIndex === undefined) {
    return (
      <div className="main-container">
        <div className="inner-container inner-container-large">
          <div className="analysis-prelude">
            <h1>NYCGuessr Data</h1>
            <span>
              View all of the guesses made in <Link to="/">nycguessr</Link> by
              their station and score.
              <br />
              Haven't played yet? <Link to="/">Check it out now!</Link>
              <br />
              Or go <Link to="/map">here</Link> for a map of all guesses
              regardless of station.
            </span>
          </div>
          <center className="table-container">
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
                        navigate(`/data/${i}`);
                      }}
                    >
                      <td
                        onClick={() => {
                          navigate(`/data/${i}`);
                        }}
                      >
                        {station.name.split("/")[0]}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/data/${i}`);
                        }}
                      >
                        <LinesRow lines={station.lines} small={true} />
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/data/${i}`);
                        }}
                      >
                        {Math.round(stationGuessData.avgScore)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </center>
        </div>
      </div>
    );
  } else {
    const stationIndex = parseInt(selectedIndex.toString());
    const stationGuessData = STATION_GUESS_DATA[stationIndex]!;
    const station = STATIONS_BY_FIREBASE_NAME[stationGuessData.station];
    return (
      <div className="main-container">
        <div className="inner-container">
          <StationGuessAnalysis
            station={station}
            avgScore={Math.round(stationGuessData.avgScore)}
            first={stationIndex === 0}
            last={stationIndex === STATION_GUESS_DATA.length - 1}
            onBack={() => navigate("/data")}
            onNext={() => navigate(`/data/${stationIndex + 1}`)}
            onPrev={() => navigate(`/data/${stationIndex - 1}`)}
          />
        </div>
      </div>
    );
  }
}

export default Analysis;
