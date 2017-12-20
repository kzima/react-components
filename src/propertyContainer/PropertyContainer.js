import React from "react";
import { withStyles } from "material-ui/styles";

import AddressHeader from "../addressHeader/AddressHeader";
import StreetView from "../streetView/StreetView";

// import PlaceIcon from "material-ui/svg-icons/maps/place";

const styles = theme => ({
  root: {
    background: "#FAFAFA",
    height: "100%",
    width: "100%"
  }
});

const data = [
  { title: "Address", value: "5-11 Kenedy Court, Logan", icon: "SomeIcon" },
  { title: "Address", value: "2 Paul St, Logan", icon: "SomeIcon" },
  { title: "Address", value: "65 Lidcombe Ave, Logan", icon: "SomeIcon" }
];

const PropertyContainer = props => {
  return (
    <div className={props.classes.root}>
      <AddressHeader title={data[0].value} />
      <StreetView />
    </div>
  );
};
export default withStyles(styles)(PropertyContainer);
