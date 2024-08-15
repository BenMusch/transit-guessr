import React, { useState } from "react";
import { Map, Source, Layer } from "react-map-gl";
import type { MapboxStyle } from "react-map-gl";
import mapStyle from "./map_style";
import type {
  AnalyzableLine,
  AnalyzableConfig,
  AnalyzableTrunkLine,
} from "./operators/config";
import "./AllGuesses.css";
import { Link } from "react-router-dom";

export const INITIAL_MAP_STATE = {
  longitude: -73.875,
  latitude: 40.73065,
  zoom: 10.25,
};

function LineBadgeControl(props: {
  config: AnalyzableConfig;
  line: AnalyzableLine;
  enabled: boolean;
  onChange: () => void;
}) {
  const { line, enabled, onChange, config } = props;
  return (
    <div className="line-badge-control" onClick={onChange}>
      {config.renderLineForAnalysisMapView(line, { greyscale: !enabled })}
    </div>
  );
}

function LineBadgeControlRow(props: {
  config: AnalyzableConfig;
  lines: AnalyzableLine[];
  enabledLines: Set<AnalyzableLine>;
  onOnlyRow: () => void;
  onHideRow: () => void;
  onAllRow: () => void;
  onChangeLine: (l: AnalyzableLine) => void;
}) {
  const {
    lines,
    enabledLines,
    config,
    onOnlyRow,
    onAllRow,
    onHideRow,
    onChangeLine,
  } = props;
  return (
    <div className="line-badge-control-row">
      <div className="line-badges">
        {lines
          .filter((line) => !line.line.includes("Express"))
          .map((line) => {
            return (
              <LineBadgeControl
                config={config}
                line={line}
                enabled={enabledLines.has(line)}
                onChange={() => onChangeLine(line)}
              />
            );
          })}
      </div>
      <div className="line-badge-toggles">
        {lines.length > 1 && <span onClick={onHideRow}>None</span>}
        <span onClick={onOnlyRow}>Only</span>
        {lines.length > 1 && <span onClick={onAllRow}>All</span>}
      </div>
    </div>
  );
}

function TransitLinesOverlay(props: {
  config: AnalyzableConfig;
  enabledLines: Set<AnalyzableLine>;
}) {
  const { enabledLines, config } = props;
  return (
    <Source
      id="routes"
      type="geojson"
      data={`/${config.operator}/routes.geojson`}
    >
      {Object.entries(config.linesByTrunkLine).map(([trunkLine, lines]) => {
        // dumb way to get the color for the trunk line since it's embedded on
        // the
        const lineFilters = lines
          .filter(
            (line) => !line.line.includes("Express") && enabledLines.has(line),
          )
          .map((line) => {
            return ["==", `${line.displayName}`, ["get", "name"]];
          });
        const filters = [
          "all",
          ["any", ...lineFilters],
          ["!=", "SI", ["get", "rt_symbol"]],
        ];

        return (
          <>
            <Layer
              layout={{ "line-cap": "round" }}
              filter={filters}
              key={`${trunkLine}_route_border`}
              id={`${trunkLine}_route_border`}
              source="routes"
              type="line"
              paint={{
                "line-color": "#1e293b",
                "line-gap-width": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  9,
                  1,
                  13,
                  4,
                ],
                "line-opacity": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  9,
                  0.9,
                  13,
                  0.9,
                ],
                "line-width": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  9,
                  0.5,
                  13,
                  1,
                ],
              }}
            />
            <Layer
              source="routes"
              key={`${trunkLine}_route`}
              id={`${trunkLine}_route`}
              type="line"
              filter={filters}
              layout={{ "line-cap": "round" }}
              paint={{
                "line-color": config.getColor(trunkLine as AnalyzableTrunkLine),
                "line-width": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  9,
                  1,
                  13,
                  4,
                ],
              }}
            />
            <Layer
              source="routes"
              key={`${trunkLine}_route_lighten`}
              id={`${trunkLine}_route_lighten`}
              type="line"
              filter={filters}
              layout={{ "line-cap": "round" }}
              paint={{
                "line-color": "#000000",
                "line-opacity": 0.2,
                "line-width": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  9,
                  1,
                  13,
                  4,
                ],
              }}
            />
          </>
        );
      })}
    </Source>
  );
}

function GuessMap(props: {
  config: AnalyzableConfig;
  enabledLines: Set<AnalyzableLine>;
  showLines: boolean;
}) {
  const { enabledLines, showLines, config } = props;

  const enabledTrunkLines = new Set();
  for (const line of enabledLines) {
    enabledTrunkLines.add(line.trunkLine);
  }

  return (
    <Map
      initialViewState={config.initialMapState}
      maxZoom={12}
      style={{ height: 800, width: 800 }}
      mapStyle={mapStyle as MapboxStyle}
    >
      <Source type="geojson" data={`/${config.operator}/guesses.geojson`}>
        {Object.entries(config.linesByTrunkLine).map(([trunkLine, lines]) => {
          const filters = lines
            .filter(
              (line) =>
                !line.line.includes("Express") && enabledLines.has(line),
            )
            .map((line) => [
              "any",
              ["has", line.line],
              ["has", line.displayName],
            ]);

          // When fewer lines are enabled, there's less color conflict, so
          // higher opacity is better
          const minOpacity = 0.5 - 0.04 * enabledTrunkLines.size;
          let maxOpacity = 0.8 - 0.02 * enabledTrunkLines.size;

          return (
            <Layer
              key={`${trunkLine}_guesses`}
              id={`${trunkLine}_guesses`}
              type="circle"
              filter={["any", ...filters]}
              paint={{
                "circle-color": config.getColor(
                  trunkLine as AnalyzableTrunkLine,
                ),
                "circle-radius": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  8,
                  1,
                  13,
                  1.5,
                ],
                "circle-opacity": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  9,
                  minOpacity,
                  13,
                  maxOpacity,
                ],
              }}
            />
          );
        })}
      </Source>
      {showLines && (
        <TransitLinesOverlay config={config} enabledLines={enabledLines} />
      )}
    </Map>
  );
}

export default function AllGuesses(props: { config: AnalyzableConfig }) {
  const { config } = props;
  const [showLines, setShowLines] = useState(true);
  const [enabledLines, setEnabledLines] = useState(new Set(config.lines));

  return (
    <div className="main-container-map">
      <div className="inner-container-map clearfix">
        <div className="map-container">
          <GuessMap
            config={config}
            showLines={showLines}
            enabledLines={enabledLines}
          />
        </div>

        <div className="controls-container">
          <div className="controls-header">
            <h1>{config.appName} Map</h1>
            <span>
              The {config.operatorName} map according to your guesses in{" "}
              <Link to="/">{config.appName}</Link>.
              <br />
              Haven't played yet? <Link to="/">Check it out now!</Link>
              <br />
              Or go <Link to="/data">here</Link> to see this broken down by
              station.
            </span>
          </div>
          <div className="controls">
            {Object.entries(config.linesByTrunkLine).map(
              ([trunkLine, lines]) => {
                return (
                  <LineBadgeControlRow
                    config={config}
                    lines={lines}
                    enabledLines={enabledLines}
                    onAllRow={() => {
                      for (const line of lines) {
                        enabledLines.add(line);
                      }
                      setEnabledLines(new Set([...enabledLines]));
                    }}
                    onHideRow={() => {
                      for (const line of lines) {
                        enabledLines.delete(line);
                      }
                      setEnabledLines(new Set([...enabledLines]));
                    }}
                    onOnlyRow={() => {
                      setEnabledLines(new Set([...lines]));
                    }}
                    onChangeLine={(line) => {
                      if (enabledLines.has(line)) {
                        enabledLines.delete(line);
                      } else {
                        enabledLines.add(line);
                      }
                      setEnabledLines(new Set([...enabledLines]));
                    }}
                  />
                );
              },
            )}
          </div>
          <div className="show-lines-control">
            <label>
              <input
                type="checkbox"
                checked={showLines}
                onChange={() => setShowLines(!showLines)}
              />
              Show Official Routes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
