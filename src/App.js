import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardBarney from "./CardBarney";
import Divider from "./Divider";

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
        <CardBarney fullWidth={true} />
        <Divider light={true}/>
        <Divider/>
        <CardBarney fullWidth={true} />
      </div>
    );
  }
}

export default App;
