import React from "react";
import { withStyles } from "material-ui/styles";
import deepOrange from "material-ui/colors/deepOrange";

const styles = theme => ({
  root: {
    background: deepOrange[500],
    width: "100%",
    textAlign: "left",
    padding: "10px 0px",
    display: "block"
    // margin: "auto"
  },
  title: {
    color: "white",
    display: "inline-block",
    fontSize: "18px",
    verticalAlign: "top",
    marginTop: "12px"
  }
});

const AddressHeader = ({ classes, title, icon }) => {
  return (
    <div className={classes.root}>
      {icon}
      <div className={classes.title}>{title}</div>
    </div>
  );
};
export default withStyles(styles)(AddressHeader);
