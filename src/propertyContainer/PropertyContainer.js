// react always at the top
import React from "react";

// selective imports (with brackets)
import { withStyles } from "material-ui/styles";
import Tabs, { Tab } from "material-ui/Tabs";

// default (no brackets) imports
import deepOrange from "material-ui/colors/deepOrange";
import blueGrey from "material-ui/colors/blueGrey";
import Button from "material-ui/Button";

// icons
import HomeIcon from "material-ui-icons/Home";
import StarIcon from "material-ui-icons/Star";
import PlaceIcon from "material-ui-icons/Place";
import AreaIcon from "material-ui-icons/Texture";
import ZoneIcon from "material-ui-icons/CropFree";

// relative imports
import PropertyAttributes from "../propertyAttributes/PropertyAttributes";
import AddressHeader from "../addressHeader/AddressHeader";
import StreetView from "../streetView/StreetView";

const fakeDetails = [
  {
    title: "Address",
    value: "5-11 Kenedy Court",
    icon: <PlaceIcon />
  },
  {
    title: "Lot/Plan",
    value: "Lot 1234 RP 12345",
    icon: <PlaceIcon />
  },
  {
    title: "Property Area",
    value: "12345 Sq.m",
    icon: <AreaIcon />
  },
  {
    title: "Zone",
    value: "Center",
    icon: <ZoneIcon />
  }
];

const fakeLocation = {
  apiKey: "AIzaSyA6-yDFJf37v4WPOTtq9fiwU_DitxSzg6I",
  pano: "fnjXC72UNMw9cDeQOpbGWA",
  heading: -45,
  pitch: 10
};

const styles = theme => ({
  root: {
    height: "100%",
    maxWidth: 360,
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
    top: 220,
    right: 20,
    zIndex: 30
  },
  tabs: {
    backgroundColor: blueGrey[500],
    marginTop: -5
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
          icon={<HomeIcon className={classes.headerIcon} />}
        />
        <StreetView location={fakeLocation} />
        <Button
          fab
          className={classes.fab}
          onClick={() => {
            console.log("FAB");
          }}
        >
          <StarIcon className={classes.fabIcon} />
        </Button>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={this.handleChange}
        >
          <Tab label="Details" />
          <Tab label="Constraints" />
        </Tabs>
        {value === 0 && <PropertyAttributes details={fakeDetails} />}
        {value === 1 && <PropertyAttributes details={fakeDetails} />}
        {/* <Chart /> */}
      </div>
    );
  }
}
export default withStyles(styles)(PropertyContainer);
