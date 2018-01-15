import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import FolderIcon from "material-ui-icons/Folder";
import InfoOutline from "material-ui-icons/InfoOutline";
import ListItemIcon from "material-ui/List/ListItemIcon";

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
      <div className={classes.root}>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary={item.value} secondary={item.title} />
          <ListItemIcon>
            <InfoOutline />
          </ListItemIcon>
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
