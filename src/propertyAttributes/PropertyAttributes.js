import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import InfoOutline from "material-ui-icons/InfoOutline";
import ListItemIcon from "material-ui/List/ListItemIcon";
import Tooltip from "material-ui/Tooltip";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function FolderList(props) {
  const { classes, attributes } = props;
  const items = attributes.map(item => {
    return (
      <div key={item.title} className={classes.root}>
        <ListItem button>
          <Avatar>{item.icon}</Avatar>
          <ListItemText primary={item.value} secondary={item.title} />
          <Tooltip id="tooltip-info" title={item.tooltip}>
            <ListItemIcon>
              <InfoOutline />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </div>
    );
  });
  return <div>{items}</div>;
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
