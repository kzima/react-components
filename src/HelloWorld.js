import React from "react";

const HelloWorld = ({ name = "World" }) => {
  return <div className="helloClass">Hello {name}</div>;
};

export default HelloWorld;
