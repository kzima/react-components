import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../../.storybook/MuiDecorator";
import PropertyContainer from "./PropertyContainer";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("PropertyContainer", module).add("with text", () => {
  return (
    <div>
      <PropertyContainer props="" />
    </div>
  );
});
