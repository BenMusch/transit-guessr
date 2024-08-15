import React from "react";

import _ from "lodash";
import "./Analysis.css";
import type { AnalyzableStation, AnalyzableConfig } from "./operators/config";
import { WrappedMap } from "./WrappedMap";
import { useParams, useNavigate, Link } from "react-router-dom";

function StationGuessAnalysis(props: {
  config: AnalyzableConfig;
  station: AnalyzableStation;
  avgScore: number;
  first?: boolean;
  last?: boolean;
  onNext: () => void;
  onPrev: () => void;
  onBack: () => void;
}) {
  const { config, station, avgScore, first, last, onNext, onPrev, onBack } =
    props;

  const geojsonFilter = [
    "==",
    config.uniqueNameForStation(station),
    ["get", "station_name"],
  ];

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
      {config.renderStationHeading(station)}
      <WrappedMap
        id="analysis"
        geojsonFilter={geojsonFilter}
        initialViewState={config.initialMapState}
        guessesSourceFile={`/${config.operator}/guesses.geojson`}
        stationMarker={station.coordinates[0]!}
      />
    </>
  );
}

function Analysis(props: { config: AnalyzableConfig }) {
  const { config } = props;
  const guessData = config.stationGuessData!;
  const { selectedIndex } = useParams();
  const navigate = useNavigate();

  const stationsByFirebaseName = _.fromPairs(
    config.stations.map((station) => [
      config.uniqueNameForStation(station),
      station,
    ]),
  );

  if (selectedIndex === null || selectedIndex === undefined) {
    return (
      <div className="main-container">
        <div className="inner-container inner-container-large">
          <div className="analysis-prelude">
            <h1>{config.appName} Data</h1>
            <span>
              View all of the guesses made in{" "}
              <Link to="/">{config.appName}</Link> by their station and score.
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
                {guessData.map((stationGuessData, i) => {
                  const station =
                    stationsByFirebaseName[stationGuessData.station];

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
                        {config.renderLinesForDataView(station.lines)}
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
    const stationGuessData = guessData[stationIndex]!;
    const station = stationsByFirebaseName[stationGuessData.station];
    return (
      <div className="main-container">
        <div className="inner-container">
          <StationGuessAnalysis
            config={config}
            station={station}
            avgScore={Math.round(stationGuessData.avgScore)}
            first={stationIndex === 0}
            last={stationIndex === guessData.length - 1}
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
