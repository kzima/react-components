import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Divider from "./divider/Divider";
import ListItem from "./listItem/ListItem";
import PropertyContainer from "./propertyContainer/PropertyContainer";

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
        <Divider light={true} />
        <Divider />
        <Divider light={true} />
        <ListItem hover={true}>
          <p>anything!</p>
        </ListItem>
        <PropertyContainer />
      </div>
    );
  }
}

export default App;
