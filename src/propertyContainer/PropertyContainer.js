import React from "react";
import { withStyles } from "material-ui/styles";
import deepOrange from "material-ui/colors/deepOrange";
import blueGrey from "material-ui/colors/blueGrey";

import AddressHeader from "../addressHeader/AddressHeader";
import StreetView from "../streetView/StreetView";
import Tabs, { Tab } from "material-ui/Tabs";
import Button from "material-ui/Button";
import PropertyAttributes from "../propertyAttributes/PropertyAttributes";
import fakedata from "../propertyAttributes/FakePropertyAttributes";

import Home from "material-ui-icons/Home";
import Star from "material-ui-icons/Star";
// Star for favourite instead of add

const styles = theme => ({
  root: {
    height: "100%",
    width: "25%",
    position: "relative"
  },
  headerIcon: {
    color: "white",
    width: "2.4em",
    height: "2.4em",
    display: "inline-block",
    marginLeft: "15px"
  },
  fabIcon: {
    color: "white",
    width: "2.2em",
    height: "2.2em"
  },
  fab: {
    backgroundColor: deepOrange[500],
    position: "absolute",
    width: 45,
    height: 45,
    top: 240,
    right: 20
  },
  tabs: {
    backgroundColor: blueGrey[500]
  }
});

class PropertyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: props.property,
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { property, value } = this.state;

    return (
      <div className={classes.root}>
        <AddressHeader
          title={property.value}
          icon={<Home className={classes.headerIcon} />}
        />
        <StreetView />
        <Button
          fab
          className={classes.fab}
          onClick={() => {
            console.log("FAB");
          }}
        >
          <Star className={classes.fabIcon} />
        </Button>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={this.handleChange}
        >
          <Tab label="Details" />
          <Tab label="Constraints" />
        </Tabs>
        {value === 0 && <PropertyAttributes attributes={[property]} />}
        {value === 1 && <PropertyAttributes attributes={fakedata} />}
        {/* <Chart /> */}
      </div>
    );
  }
}
export default withStyles(styles)(PropertyContainer);
