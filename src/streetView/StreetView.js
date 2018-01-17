import React from "react";
import { withStyles } from "material-ui/styles";
import axios from "axios";

import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

// pano id from url which loads the image
// apiKey
// latlng
// pano

// whenMount queries, axios
// heading by arrows + 45

const styles = theme => ({
  root: {
    maxWidth: 360,
    height: "auto",
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
    console.log("Constructor");
    super(props);
    const { items } = props;

    this.state = {
      apiKey: items.apiKey,
      pano: items.pano,
      pitch: items.pitch,
      heading: items.heading,
      url: "",
      img: ""
    };
    console.log("STATE SET");
    console.log(this.state);
  }

  getUrl() {
    console.log("GetUrl");
    return `https://maps.googleapis.com/maps/api/streetview?size=600x300&pano=${
      this.state.pano
    }&heading=${this.state.heading}&pitch=${this.state.pitch}&key=${
      this.state.apiKey
    }`;
  }

  getBase64(url) {
    console.log("GetBase64");
    return axios
      .get(url, {
        responseType: "arraybuffer"
      })
      .then(response => {
        new Buffer(response.data, "binary").toString("base64");
        console.log("axios request");
        console.log(response);
        var image = btoa(String.fromCharCode.apply(null, response.data));

        this.setState({ img: "data:image/png;base64," + image });
      });
  }

  componentWillReceiveProps({ items }) {
    console.log("compWillRecieve");
    console.log(items);

    this.setState({
      pano: items.pano,
      heading: items.heading,
      pitch: items.pitch,
      apiKey: items.apiKey,
      url: this.getUrl()
    });
  }

  handleHeadingChange(direction) {
    const currentPitch = this.state.pitch;
    this.setState({
      pitch: currentPitch + direction * 45
    });
  }

  render() {
    console.log("Render");
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img className={classes.root} src={this.state.img} alt="" />
        <KeyboardArrowLeft className={classes.leftArrow} />
        <KeyboardArrowRight className={classes.rightArrow} />
      </div>
    );
  }
}
export default withStyles(styles)(StreetView);
