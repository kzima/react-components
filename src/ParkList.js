import React from "react";
import List from "material-ui/List";

import ParkItem from "./ParkItem";

const WalkInThePark = ({ locations }) => {

  //function to sort array based on distance values
  const sortLocations = listOfLocations => {
    return listOfLocations.sort(function(a, b) {
      return a.value - b.value;
    });
  };
  const closestLocations = sortLocations(locations);

  return (
    <List>
      {closestLocations.map(item => <ParkItem key={item.name} item={item} />)}
    </List>
  );
};



export default WalkInThePark;
