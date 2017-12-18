import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../../.storybook/MuiDecorator";
import ListItem from "./ListItem";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("ListItem", module).add("default", () => {
  const hover = boolean("hover", true);
  return (
    <div>
      <ListItem hover={hover}>
        <p>anything!</p>
      </ListItem>
    </div>
  );
});
