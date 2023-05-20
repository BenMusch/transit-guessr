import React, { useState } from "react";
import { Map, Source, Layer } from "react-map-gl";
import type { MapboxStyle } from "react-map-gl";
import mapStyle from "./map_style";
import type { Line } from "./data/lines";
import {
  LINES_BY_TRUNK_LINE,
  LINES,
  BACKGROUND_COLOR_BY_TRUNK_LINE,
  TrunkLine,
} from "./data/lines";
import { LineBadge } from "./LineBadge";
import "./AllGuesses.css";

export const INITIAL_MAP_STATE = {
  longitude: -73.875,
  latitude: 40.73065,
  zoom: 10,
};

function LineBadgeControl(props: {
  line: Line;
  enabled: boolean;
  onChange: () => void;
}) {
  const { line, enabled, onChange } = props;
  return (
    <div className="line-badge-control" onClick={onChange}>
      <LineBadge line={line} medium greyscale={!enabled} />
    </div>
  );
}

function LineBadgeControlRow(props: {
  lines: Line[];
  enabledLines: Set<Line>;
  onOnlyRow: () => void;
  onHideRow: () => void;
  onAllRow: () => void;
  onChangeLine: (l: Line) => void;
}) {
  const { lines, enabledLines, onOnlyRow, onAllRow, onHideRow, onChangeLine } =
    props;
  return (
    <div className="line-badge-control-row">
      <div className="line-badges">
        {lines
          .filter((line) => !line.express)
          .map((line) => {
            return (
              <LineBadgeControl
                line={line}
                enabled={enabledLines.has(line)}
                onChange={() => onChangeLine(line)}
              />
            );
          })}
      </div>
      <div className="line-badge-toggles">
        <span onClick={onHideRow}>None</span>
        <span onClick={onOnlyRow}>Only</span>
        <span onClick={onAllRow}>All</span>
      </div>
    </div>
  );
}

function TransitLinesOverlay(props: { enabledLines: Set<Line> }) {
  const { enabledLines } = props;
  return (
    <Source id="routes" type="geojson" data="/geojson/routes.geojson">
      {Object.entries(LINES_BY_TRUNK_LINE).map(([trunkLine, lines]) => {
        const lineFilters = lines
          .filter((line) => !line.express && enabledLines.has(line))
          .map((line) => {
            return ["in", `${line.name}`, ["get", "name"]];
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
                "line-color":
                  BACKGROUND_COLOR_BY_TRUNK_LINE[
                    trunkLine as unknown as TrunkLine
                  ],
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

function GuessMap(props: { enabledLines: Set<Line>; showLines: boolean }) {
  const { enabledLines, showLines } = props;

  const enabledTrunkLines = new Set();
  for (const line of enabledLines) {
    enabledTrunkLines.add(line.trunkLine);
  }

  return (
    <Map
      initialViewState={INITIAL_MAP_STATE}
      maxZoom={12}
      style={{ height: 800 }}
      mapStyle={mapStyle as MapboxStyle}
    >
      <Source type="geojson" data="/geojson/guesses.geojson">
        {Object.entries(LINES_BY_TRUNK_LINE).map(([trunkLine, lines]) => {
          const filters = lines
            .filter((line) => !line.express && enabledLines.has(line))
            .map((line) => ["has", `${line.name}`]);

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
                "circle-color":
                  BACKGROUND_COLOR_BY_TRUNK_LINE[
                    trunkLine as unknown as TrunkLine
                  ],
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
      {showLines && <TransitLinesOverlay enabledLines={enabledLines} />}
    </Map>
  );
}

export default function AllGuesses() {
  const [showLines, setShowLines] = useState(true);
  const [enabledLines, setEnabledLines] = useState(
    new Set(Object.values(LINES))
  );

  return (
    <div className="main-container-map">
      <div className="inner-container-map">
        <div className="map-container">
          <GuessMap showLines={showLines} enabledLines={enabledLines} />
        </div>

        <div className="controls-container">
          <div className="controls">
            {Object.entries(LINES_BY_TRUNK_LINE).map(([trunkLine, lines]) => {
              return (
                <LineBadgeControlRow
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
            })}
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
