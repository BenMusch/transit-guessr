import React from "react";
import "./App.css";
import Game from "./Game";
import Analysis from "./Analysis";
import * as Sentry from "@sentry/react";

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
  if (window.location.host.split(".")[0] === "data") {
    return <Analysis />;
  } else {
    return <Game />;
  }
}

export default App;
