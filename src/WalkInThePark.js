import React from "react";

const WalkInThePark =  ({ locations }) => {

  //list out park locations and distances
  /*const parkLocations = [
    { id: 1, name: "bench", value: 14 },
    { id: 2, name: "lake", value: 17 },
    { id: 3, name: "tree", value: 45 },
    { id: 4, name: "swing", value: 2 },
    { id: 5, name: "sign", value: 10 },
    { id: 6, name: "toilets", value: 37 }
  ]; */

  //function to sort array based on distance values
  const sortLocations = listOfLocations => {
    return listOfLocations.sort(function(a, b) {
      return a.value - b.value;
    });
  };
  const closestLocations = sortLocations(locations);

  return (
    <div className="helloClass"> {
        closestLocations.map(({name, value}) => (
          <div key={name}> 
            <div>{`The ${name} is ${value}m away from you.`}</div>
          </div>
        ))}
    </div>
  );
};


export default WalkInThePark;
