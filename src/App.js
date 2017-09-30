import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonBarney from "./ButtonBarney";
import HelloWorld from "./HelloWorld";
import WalkInThePark from "./WalkInThePark";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>Presenting, the button...</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonBarney />
        <HelloWorld />
        <WalkInThePark />
      </div>
    );
  }
}

export default App;
