import React from "react";
import { withStyles } from "material-ui/styles";
import axios from "axios";

import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

var fs = require("fs");

// pano id from url which loads the image
// apiKey
// latlng
// pano

// whenMount queries, axios
// heading by arrows + 45

const styles = theme => ({
  root: {
    width: "100%",
    height: "200px",
    position: "relative"
    //height: "auto" // this height value needs to relate to the fab button
  },
  leftArrow: {
    position: "absolute",
    color: "black",
    width: "2.5em",
    height: "2.5em",
    left: 8,
    top: 80
  },
  rightArrow: {
    position: "absolute",
    color: "black",
    width: "2.5em",
    height: "2.5em",
    right: 8,
    top: 80
  }
});
class StreetView extends React.Component {
  constructor(props) {
    super(props);
    const url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&pano=${
      props.pano
    }&heading=151.78&pitch=-0.76&key=${props.apiKey}`;
    this.state = {
      classes: props.classes,
      latLng: props.latLng,
      apiKey: props.apiKey,
      pano: props.pano,
      img: "",
      url
    };
  }

  getBase64(url) {
    return axios
      .get(url, {
        responseType: "arraybuffer"
      })
      .then(response => new Buffer(response.data, "binary").toString("base64"));
  }

  componentWillReceiveProps(event) {
    this.setState({
      latLng: event.value,
      img: this.getBase64(this.state.url)
    });
  }

  render() {
    const classes = this.props.classes;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <img className={classes.root} src={this.state.url} alt="" />
        <KeyboardArrowLeft className={classes.leftArrow} />
        <KeyboardArrowRight className={classes.rightArrow} />
      </div>
    );
  }
}
export default withStyles(styles)(StreetView);
