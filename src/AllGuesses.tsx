import { Map, Source, Layer } from "react-map-gl";
import type { MapboxStyle } from "react-map-gl";
import mapStyle from "./map_style";
import {B

export const INITIAL_MAP_STATE = {
  longitude: -73.875,
  latitude: 40.73065,
  zoom: 9.25,
};

export default function AllGuesses() {
  const basePaintProperties = {
    "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
    "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
  };
  return (
    <Map
      initialViewState={INITIAL_MAP_STATE}
      maxZoom={12}
      style={{ width: 500, height: 400 }}
      mapStyle={mapStyle as MapboxStyle}
    >
      <Source type="geojson" data="/public/guesses.geojson">
        <Layer
          id="green"
          type="circle"
          filter={["any", ["has", "4"], ["has", "5"], ["has", "6"]]}
          paint={{
            "circle-color": "#00933c",
          }}
        />
        <Layer
          id="jz"
          type="circle"
          filter={["any", ["has", "J"], ["has", "Z"]]}
          paint={{
            "circle-color": "#996633",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="s"
          type="circle"
          filter={["any", ["has", "S"]]}
          paint={{
            "circle-color": "#808183",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="l"
          type="circle"
          filter={["any", ["has", "L"]]}
          paint={{
            "circle-color": "#a7a9ac",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="g"
          type="circle"
          filter={["any", ["has", "G"]]}
          paint={{
            "circle-color": "#6cbe45",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="yellow"
          type="circle"
          filter={[
            "any",
            ["has", "N"],
            ["has", "Q"],
            ["has", "W"],
            ["has", "R"],
          ]}
          paint={{
            "circle-color": "#fccc0a",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="orange"
          type="circle"
          filter={[
            "any",
            ["has", "B"],
            ["has", "D"],
            ["has", "F"],
            ["has", "M"],
            ["has", "FExp"],
          ]}
          paint={{
            "circle-color": "#ff6319",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="blue"
          type="circle"
          filter={["any", ["has", "A"], ["has", "C"], ["has", "E"]]}
          paint={{
            "circle-color": "#0039a6",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="red"
          type="circle"
          filter={["any", ["has", "1"], ["has", "2"], ["has", "3"]]}
          paint={{
            "circle-color": "#ee352e",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
        <Layer
          id="purple"
          type="circle"
          filter={["any", ["has", "7"], ["has", "7Exp"]]}
          paint={{
            "circle-color": "#b933ad",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2],
            "circle-opacity": ["*", 1 / 40000, ["get", "score"]],
          }}
        />
      </Source>
    </Map>
  );
}
