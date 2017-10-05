import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { text, number } from "@storybook/addon-knobs";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import ParkItem from "./ParkItem";
import withMuiTheme from "../.storybook/MuiDecorator";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("ParkItem", module).add("Item With Params", () => {
  const item = { name: text("name", "bench"), value: number("value", 14) };
  return <ParkItem item={item} />;
});

//conditional rendering -- facebook react
