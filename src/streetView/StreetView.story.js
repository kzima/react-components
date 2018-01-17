import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../../.storybook/MuiDecorator";
import StreetView from "./StreetView";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("StreetView", module).add("default", () => {
  const location = {
    apiKey: "AIzaSyA6-yDFJf37v4WPOTtq9fiwU_DitxSzg6I",
    pano: "fnjXC72UNMw9cDeQOpbGWA",
    heading: -45,
    pitch: 10
  };

  return <StreetView location={location} />;
});
