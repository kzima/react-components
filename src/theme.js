import { createMuiTheme } from "material-ui/styles";

import deepOrange500 from "material-ui/colors/deepOrange";
import blueGrey from "material-ui/colors/blueGrey";
import red from "material-ui/colors/red";
import spacing from "material-ui/styles/spacing";

const brandPrimary = deepOrange500; //#ff5722
const brandSecondary = blueGrey[500]; //#ff5722

const constants = {
  spacing,
  fontFamily: "Roboto, sans-serif",
  brandPrimary,
  brandSecondary,
  palette: {
    primary: { ...deepOrange500, ...brandPrimary }, // Purple and green play nicely together.
    secondary: {
      ...blueGrey,
      ...{
        A100: brandSecondary,
        A200: brandSecondary,
        A400: brandSecondary,
        A700: brandSecondary
      }
    },
    error: red
  }
};

export { constants };
export default createMuiTheme(constants);
