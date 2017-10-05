import React from "react";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemText } from "material-ui/List";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.primary[500]
  }
});

const ParkItem = props => {
  if(!props.item){
    return null;
  }
  
  const { classes, item } = props;
  const { name, value } = item;

  return (
    <ListItem className={classes.root} button>
      <ListItemText
        primary={`The ${name} is `}
        secondary={`${value} metres away`}
      />
    </ListItem>
  );

};


export default withStyles(styles)(ParkItem);




