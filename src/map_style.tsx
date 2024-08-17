// eslint-disable-next-line import/no-anonymous-default-export
export default {
  version: 8,
  name: "Basic",
  metadata: {
    "mapbox:autocomposite": true,
  },
  sources: {
    transit: {
      url: "mapbox://mapbox.transit-v2",
      type: "vector",
    },
    mapbox: {
      url: "mapbox://mapbox.mapbox-streets-v7",
      type: "vector",
    },
  },
  sprite: "mapbox://sprites/mapbox/basic-v8",
  glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#475569",
      },
      interactive: true,
    },
    {
      id: "landuse_park",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse",
      filter: ["==", "class", "park"],
      paint: {
        "fill-color": "#334155",
      },
      interactive: true,
    },
    {
      id: "grass",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse",
      filter: ["==", "class", "grass"],
      paint: {
        "fill-color": "#3a4a5f",
      },
      interactive: true,
    },
    {
      id: "cemetery",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse",
      filter: ["==", "class", "cemetery"],
      paint: {
        "fill-color": "#415164",
      },
      interactive: true,
    },
    {
      id: "industrial",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse",
      filter: ["==", "class", "industrial"],
      paint: {
        "fill-color": "#415164",
      },
      interactive: true,
    },
    {
      id: "landuse_national_park",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse_overlay",
      filter: ["==", "class", "national_park"],
      paint: {
        "fill-color": "#334155",
      },
      interactive: true,
    },
    {
      id: "water",
      type: "fill",
      source: "mapbox",
      "source-layer": "water",
      paint: {
        "fill-color": "#0f172a",
      },
      interactive: true,
    },
    {
      id: "transit_line_line",
      type: "line",
      source: "transit",
      "source-layer": "transit_line",
      filter: ["==", "$type", "LineString"],
      paint: {
        "line-width": 2,
        "line-color": "rgba(66,100,251, 0.3)",
      },
    },
  ],
};
