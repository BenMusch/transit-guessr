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
      id: "road",
      type: "line",
      source: "mapbox",
      "source-layer": "road",
      paint: {
        "line-width": 2,
        "line-color": "#334155",
      },
      filter: ["==", "class", "motorway"],
      interactive: true,
    },
    {
      id: "landuse_park",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse",
      filter: ["==", "class", "park"],
      paint: {
        "fill-color": "#1e293b",
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
