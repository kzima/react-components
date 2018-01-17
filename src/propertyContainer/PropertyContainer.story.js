import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../../.storybook/MuiDecorator";
import PropertyContainer from "./PropertyContainer";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("PropertyContainer", module).add("default", () => {
  const props = {
    title: "Address",
    value: "5-11 Kenedy Court, Logan",
    icon: "SomeIcon",
    pano: "fnjXC72UNMw9cDeQOpbGWA"
  };

  return <PropertyContainer props={props} />;
});
