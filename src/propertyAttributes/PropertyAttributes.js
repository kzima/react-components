import React from "react";

import { withStyles } from "material-ui/styles";
import { ListItem, ListItemText } from "material-ui/List";

import Avatar from "material-ui/Avatar";

const styles = theme => ({
  root: {
    background: "rgba(255,255,255,0.54)",
    boxShadow: "none",
    width: "100%",
    margin: 0,
    "&:before": {
      background: 0
    }
  }
});

const PropertyAttributes = props => {
  const { classes, details } = props;
  return (
    <div className={classes.root}>
      {details.map(item => (
        <div key={item.title} className={classes.root}>
          <ListItem button dense>
            <Avatar>{item.icon}</Avatar>
            <ListItemText primary={item.value} secondary={item.title} />
          </ListItem>
        </div>
      ))}
    </div>
  );
};
export default withStyles(styles)(PropertyAttributes);
