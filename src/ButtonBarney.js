import React from "react";
import "./ButtonBarney.css";
const handleClick = name => {
  console.log(`hello ${name}`);
};

const ButtonBarney = () => {
  return (
    <div>
      <button className="btn" onClick={() => handleClick("joe")}>
        Button words here!
      </button>
    </div>
  );
};

export default ButtonBarney;
