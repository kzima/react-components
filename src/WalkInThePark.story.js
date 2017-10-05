import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { array } from '@storybook/addon-knobs';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import WalkInThePark from "./WalkInThePark";


storiesOf("ParkArray", module).add("Closest Locations", () => {
    const locations = array('Locations', [
        { name: "bench", value: 14 },
        { name: "lake", value: 17 },
        { name: "tree", value: 45 },
        { name: "swing", value: 2 },
        { name: "sign", value: 10 },
        { name: "toilets", value: 37 }
      ]);
    //const locations = array("locations", closestLocations);
    return (
      <div className="helloClass"> {
        locations.map(({name, value}) => (
          <div key={name}> 
            <div>{`The ${name} is ${value}m away from you.`}</div>
          </div>
        ))}
    </div>
    );
  });



export default WalkInThePark;
