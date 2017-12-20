import React from "react";
import { withStyles } from "material-ui/styles";
// Need to pass icon as prop
const styles = theme => ({
  root: {
    background: "#FF6E40",
    width: "100%",
    height: "50px"
  }
});

const AddressHeader = ({ classes, title, icon }) => {
  return <div className={classes.root}>{title}</div>;
};
export default withStyles(styles)(AddressHeader);
