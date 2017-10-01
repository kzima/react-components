import React from "react";

const WalkInThePark = () => {

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
  const sortLocations = listOfLocations => {
    return listOfLocations.sort(function(a, b) {
      return a.value - b.value;
    });
  };
  const closestLocations = sortLocations(parkLocations);

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

/*
create 'WalkInThePark.story.js' file
create a demo in storybook.
improve on the UI.
User a list component from Mui.

Note: read through addins/knobs -> array
*/
export default WalkInThePark;
