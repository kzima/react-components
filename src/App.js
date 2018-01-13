import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropertyContainer from "./propertyContainer/PropertyContainer";
import fake from "./propertyAttributes/FakePropertyAttributes";
import PropertyAttributes from "./propertyAttributes/PropertyAttributes";

const fakePropertyAttributes = {
  title: "Address",
  value: "5-11 Kenedy Court, Logan",
  icon: "SomeIcon"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <PropertyContainer property={fakePropertyAttributes} />
        <PropertyAttributes attributes={fake} />
      </div>
    );
  }
}

export default App;
