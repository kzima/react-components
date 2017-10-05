import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { text, number } from "@storybook/addon-knobs";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import ParkItem from "./ParkItem";
import withMuiTheme from "../.storybook/MuiDecorator";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("ParkItem", module).add("Item With Params", () => {
  const item = null;//{ name: text("name", "bench"), value: number("value", 14) };

  if(!!item > 0){
    return <ParkItem item={item} />;
  } else {
    return <div><h1> Where Is The Park Items?</h1></div>
  }
});

//conditional rendering -- facebook react
