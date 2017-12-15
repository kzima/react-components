import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../../.storybook/MuiDecorator";
import CustomDivider from "./Divider"

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("Divider", module).add("with text", () => {
  const light = boolean("light", true);
  return (
    <div>
      <CustomDivider light={light} />
      <CustomDivider />
      <CustomDivider light={light} />
    </div>
  );
});
