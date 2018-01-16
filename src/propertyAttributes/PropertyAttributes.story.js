import React from "react";

import { storiesOf } from "@storybook/react";
import PropertyAttributs from "./PropertyAttributes";

import fake from "./FakePropertyAttributes";

storiesOf("PropertyAttributs", module).add("default", () => {
  return (
    <div>
      <PropertyAttributs attributes={fake} />
    </div>
  );
});
