import React from "react";
import "./App.css";
import Game from "./Game";
import Analysis from "./Analysis";
import AllGuesses from "./AllGuesses";
import * as Sentry from "@sentry/react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import type { AnalyzableConfig } from "./operators/config";
import config from "./operators/config";
import type { FirebaseOptions } from "firebase/app";

declare global {
  interface Window {
    sentryDsn?: string;
    firebaseConfig?: FirebaseOptions;
    operator: "mbta" | "mta";
  }
}

if (window.sentryDsn) {
  try {
    Sentry.init({
      dsn: window.sentryDsn,
      integrations: [new Sentry.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  } catch (err) {
    // For the most part, this will happen because sentry isn't set-up for local
    // development. But if for some reason we error on prod, it shouldn't cause
    // the entire app to crash
    console.error(err);
  }
}

const configToPlay = config[window.operator];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {configToPlay.hasAnalysisPage && (
          <Route
            path="map"
            element={<AllGuesses config={configToPlay as AnalyzableConfig} />}
          />
        )}
        {configToPlay.hasAnalysisPage && (
          <Route
            path="data"
            element={<Analysis config={configToPlay as AnalyzableConfig} />}
          />
        )}
        {configToPlay.hasAnalysisPage && (
          <Route
            path="data/:selectedIndex"
            element={<Analysis config={configToPlay as AnalyzableConfig} />}
          />
        )}
        <Route index element={<Game config={configToPlay} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
