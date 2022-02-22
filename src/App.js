import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
let nothingImportant = ["firstFood", "secondFood", "thirdFood"];

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <div className="elena">
        <input type="email"></input>
      </div>
      <div className="elena">
        <input type="password"></input>
      </div>
      <div className="flex">
        <button>Reset</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
