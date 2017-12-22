import React from "react";
import { withStyles } from "material-ui/styles";
import deepOrange from "material-ui/colors/deepOrange";

import AddressHeader from "../addressHeader/AddressHeader";
import StreetView from "../streetView/StreetView";
import Tabs from "material-ui/Tabs";
import Button from "material-ui/Button";

import Place from "material-ui-icons/Place";
import Add from "material-ui-icons/Add";

const styles = theme => ({
  root: {
    height: "100%",
    width: "35%"
  },
  icon: {
    color: "white",
    width: "2.5em",
    height: "2.5em",
    display: "inline-block"
  },
  fab: {
    backgroundColor: deepOrange[500]
  }
});

class PropertyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { property: this.props.property };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AddressHeader
          title={this.props.property.value}
          icon={<Place className={this.props.classes.icon} />}
        />
        <Button
          fab
          className={this.props.classes.fab}
          onClick={() => {
            console.log("FAB");
          }}
        >
          <Add className={this.props.classes.icon} />
        </Button>
        <StreetView />
        <Tabs />
        {/* <PropertyAttributes /> */}
        {/* <Chart /> */}
      </div>
    );
  }
}
export default withStyles(styles)(PropertyContainer);
