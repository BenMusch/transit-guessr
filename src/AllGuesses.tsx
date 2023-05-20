import React, { useState } from "react";
import { Map, Source, Layer } from "react-map-gl";
import type { MapboxStyle } from "react-map-gl";
import mapStyle from "./map_style";
import {
  LINES_BY_TRUNK_LINE,
  LINES,
  BACKGROUND_COLOR_BY_TRUNK_LINE,
  TrunkLine,
} from "./data/lines";

export const INITIAL_MAP_STATE = {
  longitude: -73.875,
  latitude: 40.73065,
  zoom: 9.25,
};

export default function AllGuesses() {
  const [showLines, setShowLines] = useState(true);
  const [enabledLines, setEnabledLines] = useState(
    new Set(Object.values(LINES))
  );

  const enabledTrunkLines = new Set();
  for (const line of enabledLines) {
    enabledTrunkLines.add(line.trunkLine);
  }

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showLines}
            onChange={() => setShowLines(!showLines)}
          />
          Show Official Routes
        </label>
        <br />
        {Object.entries(LINES_BY_TRUNK_LINE).map(([trunkLine, lines]) => {
          return (
            <>
              {lines.map((line) => {
                return (
                  <label>
                    <input
                      type="checkbox"
                      checked={enabledLines.has(line)}
                      onChange={() => {
                        if (enabledLines.has(line)) {
                          enabledLines.delete(line);
                        } else {
                          enabledLines.add(line);
                        }
                        setEnabledLines(new Set([...enabledLines]));
                      }}
                    />
                    {line.name}
                    {line.express ? " Express" : ""}
                  </label>
                );
              })}
              <br />
            </>
          );
        })}
      </div>
      <Map
        initialViewState={INITIAL_MAP_STATE}
        maxZoom={12}
        style={{ width: 800, height: 800 }}
        mapStyle={mapStyle as MapboxStyle}
      >
        <Source type="geojson" data="/geojson/guesses.geojson">
          {Object.entries(LINES_BY_TRUNK_LINE).map(([trunkLine, lines]) => {
            const filters = lines
              .filter((line) => enabledLines.has(line))
              .map((line) => [
                "has",
                `${line.name}${line.express ? "Exp" : ""}`,
              ]);

            // When fewer lines are enabled, there's less color conflict, so
            // higher opacity is better
            const minOpacity = 0.5 - 0.04 * enabledTrunkLines.size;
            let maxOpacity = 0.9 - 0.02 * enabledTrunkLines.size;

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
        {showLines && (
          <Source id="routes" type="geojson" data="/geojson/routes.geojson">
            {Object.entries(LINES_BY_TRUNK_LINE).map(([trunkLine, lines]) => {
              const filters = lines
                .filter((line) => enabledLines.has(line))
                .map((line) => {
                  return ["in", `${line.name}`, ["get", "name"]];
                });
              return (
                <>
                  <Layer
                    source="routes"
                    key={`${trunkLine}_route_border`}
                    id={`${trunkLine}_route_border`}
                    type="line"
                    filter={["any", ...filters]}
                    layout={{ "line-cap": "round" }}
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
                    filter={["any", ...filters]}
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
                    filter={["any", ...filters]}
                    layout={{ "line-cap": "round" }}
                    paint={{
                      "line-color": "#ffffff",
                      "line-opacity": 0.1,
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
        )}
      </Map>
    </>
  );
}
