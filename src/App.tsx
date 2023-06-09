import React from "react";
import "./App.css";
import Game from "./Game";
import Analysis from "./Analysis";
import AllGuesses from "./AllGuesses";
import * as Sentry from "@sentry/react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import config from "./operators/config";
import { STATION_GUESS_DATA } from "./data/guesses";

declare global {
  interface Window {
    sentryDsn?: string;
  }
}

if (window.sentryDsn) {
  Sentry.init({
    dsn: window.sentryDsn,
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="map" element={<AllGuesses config={config.mta} />} />
        <Route
          path="data"
          element={
            <Analysis config={config.mta} guessData={STATION_GUESS_DATA} />
          }
        />
        <Route
          path="data/:selectedIndex"
          element={
            <Analysis config={config.mta} guessData={STATION_GUESS_DATA} />
          }
        />
        <Route index element={<Game config={config.mbta} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
