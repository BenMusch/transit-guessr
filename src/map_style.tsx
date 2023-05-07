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
        "background-color": "#dedede",
      },
      interactive: true,
    },
    {
      id: "landuse_overlay_national_park",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse_overlay",
      filter: ["==", "class", "national_park"],
      paint: {
        "fill-color": "#d2edae",
        "fill-opacity": 0.75,
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
        "fill-color": "#d2edae",
      },
      interactive: true,
    },
    {
      id: "waterway",
      type: "line",
      source: "mapbox",
      "source-layer": "waterway",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "river", "canal"],
      ],
      paint: {
        "line-color": "#a0cfdf",
        "line-width": {
          base: 1.4,
          stops: [
            [8, 0.5],
            [20, 15],
          ],
        },
      },
      interactive: true,
    },
    {
      id: "water",
      type: "fill",
      source: "mapbox",
      "source-layer": "water",
      paint: {
        "fill-color": "#a0cfdf",
      },
      interactive: true,
    },
  ],
};
