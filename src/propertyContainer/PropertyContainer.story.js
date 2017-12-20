import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../../.storybook/MuiDecorator";
import PropertyContainer from "./PropertyContainer";
import { fakeProps } from "./fakeAttr";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("PropertyContainer", module).add("with text", () => {
  return (
    <div>
      <PropertyContainer props={fakeProps[0]} />
    </div>
  );
});
