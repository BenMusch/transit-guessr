import React from "react";
import "./App.css";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <div className="App">
      <Map
        initialViewState={{
          longitude: -73.935242,
          latitude: 40.73061,
          zoom: 9,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default App;
