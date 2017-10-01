import React from "react";
import { MuiThemeProvider } from "material-ui/styles";

import theme from "../src/theme";

const MuiDecorator = story => (
  <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
);
export default MuiDecorator;
