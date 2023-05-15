import React, { useState } from "react";
import "./App.css";
import Game from "./Game"
import Analysis from "./Analysis"

function App() {
    if (window.location.host.split(".")[0] === "data") {
        return <Analysis />
    } else {
        return <Game />
    }
}

export default App;
