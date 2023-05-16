import React from "react";
import type { Coordinate } from "./data/stations";
import { Map, Marker, Source, Layer, LayerProps } from "react-map-gl";
import type { MapboxStyle } from "react-map-gl";
import type { FeatureCollection } from "geojson";
import mapStyle from "./map_style";

export const INITIAL_MAP_STATE = {
  longitude: -73.875,
  latitude: 40.73065,
  zoom: 9.25,
};

function GuessDistributionOverlay(props: {
  guessDistribution: { loc: Coordinate; score: number }[];
}) {
  const { guessDistribution } = props;
  const guessGeojson: FeatureCollection = {
    type: "FeatureCollection",
    features: guessDistribution.map((guessData) => {
      return {
        type: "Feature",
        geometry: { type: "Point", coordinates: guessData.loc },
        properties: { score: guessData.score },
      };
    }),
  };

  return (
    <Source type="geojson" data={guessGeojson}>
      <Layer
        id="clusters"
        type="circle"
        filter={["has", "score"]}
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
  guessDistribution?: { loc: Coordinate; score: number }[] | null;
  guessScore?: number | null;
  errorMsg?: string | null;
  stationMarker?: Coordinate | null;
  onClick?: (c: Coordinate) => void;
}) {
  const {
    guessDistribution,
    id,
    guessMarker,
    stationMarker,
    onClick,
    guessScore,
    errorMsg,
  } = props;

  return (
    <Map
      id={id}
      initialViewState={INITIAL_MAP_STATE}
      maxZoom={12}
      minZoom={8.5}
      onClick={(e) => {
        onClick && onClick([e.lngLat.lng, e.lngLat.lat]);
      }}
      style={{ width: 500, height: 400 }}
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
      {guessScore && <div className="score-overlay">Score: {guessScore}</div>}
      {errorMsg && <div className="error-overlay">Error: {errorMsg}</div>}
      {guessDistribution && (
        <GuessDistributionOverlay guessDistribution={guessDistribution} />
      )}
    </Map>
  );
}
