import React from "react";

const HelloWorld = props => {
  return <div className="helloClass">Hello {props.name}</div>;
};

//it's red border and grey inside, and text is red

HelloWorld.defaultProps = {
  name: "World"
};

HelloWorld.props = {
  name: HelloWorld.name
};

export default HelloWorld;
