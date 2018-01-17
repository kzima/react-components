import React from "react";
import { withStyles } from "material-ui/styles";
import axios from "axios";

import IconKeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import IconKeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

const styles = theme => ({
  root: {
    maxWidth: 360,
    height: "auto",
    position: "relative"
    //height: "auto" // this height value needs to relate to the fab button
  },
  leftArrow: {
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.6,
    color: "white",
    width: "2.3em",
    height: "2.3em",
    borderRadius: 10,
    left: 7,
    top: 80
  },
  rightArrow: {
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.6,
    borderRadius: 10,
    color: "white",
    width: "2.3em",
    height: "2.3em",
    right: 7,
    top: 80
  },
  iconContainer: {
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.7
  }
});

class StreetView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.location,
      url: this.getImageUrl(props.location)
    };
  }

  getImageUrl({ location, pano, heading, pitch, apiKey }) {
    if (pano) {
      return `https://maps.googleapis.com/maps/api/streetview?size=600x300&pano=${pano}&heading=${heading}&pitch=${pitch}&key=${apiKey}`;
    } else {
      return `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${location}&heading=${heading}&pitch=${pitch}&key=${apiKey}`;
    }
  }

  componentWillReceiveProps(nextProps) {
    const metaUrl = `maps.googleapis.com/maps/api/streetview/metadata?location=${
      nextProps.location.location
    }&key=${nextProps.location.apiKey}`;

    https: this.setState({
      ...nextProps.location,
      url: this.getImageUrl(nextProps.location)
    });
    axios.get(metaUrl).then(response => {
      // console.log(response);
      // console.log(response.headers);
      // console.log(response.request);
      // console.log(response.config);
      console.log(response.pano_id);
      // this.setState({
      //   url: response.request.responseUrl
      // });
    });
  }

  handleArrowClick(direction) {
    // console.log(direction);
    this.setState(prevState => {
      return { heading: prevState.heading + direction * 45 };
    });
  }

  render() {
    const { classes } = this.props;
    const url = this.getImageUrl(this.state);
    console.log(url);

    return (
      <div className={classes.root}>
        <img className={classes.root} src={url} alt="" />
        <div onClick={this.handleArrowClick.bind(this, -1)}>
          <IconKeyboardArrowLeft className={classes.leftArrow} />
        </div>
        <div onClick={this.handleArrowClick.bind(this, 1)}>
          <IconKeyboardArrowRight className={classes.rightArrow} />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(StreetView);
