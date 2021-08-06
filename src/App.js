import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import Messenger from "./pages/messenger";

function App() {
  return (
    <div className="App">
      <Messenger />
    </div>
  );
}

export default App;
