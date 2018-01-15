import React, { Component } from "react";
import "./App.css";
import PropertyContainer from "./propertyContainer/PropertyContainer";

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
          <h2>OrbMaps - React Components</h2>
        </div>
        <PropertyContainer property={fakePropertyAttributes} />
      </div>
    );
  }
}

export default App;
