import React from "react";
import { withStyles } from "material-ui/styles";
const styles = theme => ({
  view: {
    height: 200 + "px",
    width: "100%",
    background: "gray"
  }
});
const StreetView = props => {
  const { classes } = props;
  return <div className={classes.view} />;
};
export default withStyles(styles)(StreetView);
