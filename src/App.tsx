import React from "react";
import "./App.css";
import Game from "./Game";
import Analysis from "./Analysis";
import * as Sentry from "@sentry/react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

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
        <Route path="data" element={<Analysis />} />
        <Route path="data/:selectedIndex" element={<Analysis />} />
        <Route index element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
