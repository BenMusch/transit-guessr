// eslint-disable-next-line import/no-anonymous-default-export
export default {
  version: 8,
  name: "Basic",
  metadata: {
    "mapbox:autocomposite": true,
  },
  sources: {
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
      id: "water",
      type: "fill",
      source: "mapbox",
      "source-layer": "water",
      paint: {
        "fill-color": "#0f172a",
      },
      interactive: true,
    },
  ],
};
