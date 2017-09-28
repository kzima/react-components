import React from "react";
import "./ButtonJames.css";

const handleClick = name => {
  console.log(`Hello ${name}`);
};

const ButtonJames = () => {
  return (
    <div>
      <button className="btnClass" onClick={() => handleClick("starlight")}>
        Hello Starlight
      </button>
    </div>
  );
};

export default ButtonJames;
