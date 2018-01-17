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
    location: "-27.694572061615098,153.07980671525004",
    heading: -45,
    pitch: 10
  };

  return <StreetView location={location} />;
});
