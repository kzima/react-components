import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../../.storybook/MuiDecorator";
import StreetView from "./StreetView";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("StreetView", module).add("default", () => {
  const items = {
    apiKey: "AIzaSyA6-yDFJf37v4WPOTtq9fiwU_DitxSzg6I",
    pano: "fnjXC72UNMw9cDeQOpbGWA",
    heading: "-45",
    pitch: "42"
  };

  return <StreetView items={items} />;
});
