import React from "react";
import { withStyles } from "material-ui/styles";

// pano id from url which loads the image
// apiKey
// latlng
// pano

// whenMount queries, axios
// heading by arrows + 45

const styles = theme => ({
  root: {
    width: "100%",
    height: "200px"
    //height: "auto" // this height value needs to relate to the fab button
  }
});
const StreetView = props => {
  const { classes, latLng, apiKey, pano } = props;
  console.log(props);
  console.log(latLng);
  const url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&pano=${pano}&heading=151.78&pitch=-0.76&key=${apiKey}`;
  return (
    <div className={classes.root}>
      <img className={classes.root} src={url} alt="" />
    </div>
  );
};
export default withStyles(styles)(StreetView);
