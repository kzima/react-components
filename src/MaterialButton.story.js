import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import withMuiTheme from "../.storybook/MuiDecorator";
import MaterialButton from "./MaterialButton";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("Button", module).add("with text", () => {
  const primary = boolean("Primary", true);
  return (
    <MaterialButton onClick={action("clicked")} primary={primary}>
      Hello Button
    </MaterialButton>
  );
});
