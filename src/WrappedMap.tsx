import React from "react";
import type { Coordinate } from "./operators/types";
import { Map, Marker, Source, Layer, useMap } from "react-map-gl";
import type { MapboxStyle } from "react-map-gl";
import mapStyle from "./map_style";
import { CameraOptions } from "mapbox-gl";

function GuessDistributionOverlay(props: {
  sourceFile: string;
  geojsonFilter?: any[];
}) {
  const { sourceFile, geojsonFilter } = props;

  const filters = geojsonFilter ?? ["has", "score"];

  return (
    <Source type="geojson" data={sourceFile}>
      <Layer
        id="clusters"
        type="circle"
        filter={filters}
        paint={{
          "circle-color": [
            "rgb",
            ["-", 255, ["*", 0.051, ["get", "score"]]],
            ["*", 0.051, ["get", "score"]],
            0,
          ],
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 3, 13, 10],
          "circle-opacity": 0.5,
        }}
      />
    </Source>
  );
}

export function WrappedMap(props: {
  id: string;
  guessMarker?: Coordinate | null;
  guessesSourceFile?: string | null;
  geojsonFilter?: any[];
  guessScore?: number | null;
  errorMsg?: string | null;
  stationMarker?: Coordinate | null;
  zoomControls?: {
    zoom: number;
    longitude: number;
    latitude: number;
    label: string;
  }[];
  onClick?: (c: Coordinate) => void;
  initialViewState: { zoom: number; longitude: number; latitude: number };
}) {
  const {
    guessesSourceFile,
    geojsonFilter,
    id,
    guessMarker,
    stationMarker,
    onClick,
    guessScore,
    errorMsg,
    initialViewState,
  } = props;

  // this is in-elegant and we should find a way to control *this* map
  const mapRef = useMap();

  let zoomLinks = null;
  console.log(props.zoomControls);
  if (props.zoomControls) {
    zoomLinks = (
      <ul className="zoom-links">
        {props.zoomControls.map((zoomConfig) => {
          return (
            <li>
              <button
                onClick={() => {
                  const stateToJumpTo: CameraOptions = {
                    center: [zoomConfig.longitude, zoomConfig.latitude],
                    zoom: zoomConfig.zoom,
                    pitch: 0,
                  };
                  mapRef?.reviewMap?.jumpTo(stateToJumpTo);
                  mapRef?.gameplayMap?.jumpTo(stateToJumpTo);
                }}
              >
                {zoomConfig.label}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <Map
      id={id}
      initialViewState={initialViewState}
      maxZoom={14}
      minZoom={8.5}
      onClick={(e) => {
        onClick && onClick([e.lngLat.lng, e.lngLat.lat]);
      }}
      style={{ maxWidth: 500, height: 400 }}
      mapStyle={mapStyle as MapboxStyle}
    >
      {!guessScore && zoomLinks}
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
      {guessScore && <div className="score-overlay">Score: {guessScore}</div>}
      {errorMsg && <div className="error-overlay">Error: {errorMsg}</div>}
      {guessesSourceFile && (
        <GuessDistributionOverlay
          geojsonFilter={geojsonFilter}
          sourceFile={guessesSourceFile}
        />
      )}
    </Map>
  );
}
