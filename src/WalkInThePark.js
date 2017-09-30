import React from "react";

const WalkInThePark = () => {
  // String to print locations
  let locationsString;

  //list out park locations and distances
  const parkLocations = [
    { name: "bench", value: 14 },
    { name: "lake", value: 17 },
    { name: "tree", value: 45 },
    { name: "swing", value: 2 },
    { name: "sign", value: 10 },
    { name: "toilets", value: 37 }
  ];

  //function to sort array based on distance values
  const sortLocations = array => {
    return parkLocations.sort(function(a, b) {
      return a.value - b.value;
    });
  };

  //Loops through and concatenates location Strings
  const displayLocations = array => {
    const closestLocations = sortLocations(array);
    closestLocations.forEach(
      ({ name, value }) =>
        (locationsString += `\nThe ${name} is ${value}m away from you.\n`)
    );
  };

  //Button that prinnts locations to console
  const handleClick = () => {
    displayLocations(parkLocations);
    console.log(locationsString);
  };

  return (
    <div className="helloClass">
      <button className="btnClass" onClick={() => handleClick()}>
        Show Me Closest Park Locations
      </button>
    </div>
  );
};

export default WalkInThePark;
