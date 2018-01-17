import React from "react";
import { withStyles } from "material-ui/styles";
// import axios from "axios";

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
    color: "black",
    width: "2.5em",
    height: "2.5em",
    left: 8,
    top: 80
  },
  rightArrow: {
    cursor: "pointer",
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

    this.state = {
      ...props.location,
      url: this.getUrl(props.location)
    };
  }

  getUrl({ pano, heading, pitch, apiKey }) {
    return `https://maps.googleapis.com/maps/api/streetview?size=600x300&pano=${pano}&heading=${heading}&pitch=${pitch}&key=${apiKey}`;
  }

  componentWillReceiveProps(nextProps) {
    const url = this.getUrl(nextProps.location);
    this.setState({
      ...nextProps.location,
      url
    });
    // axios.get(url).then(response => {
    //   this.setState({
    //     url: response.request.responseUrl
    //   });
    // });
  }

  handleArrowClick(direction) {
    // console.log(direction);
    this.setState(prevState => {
      return { heading: prevState.heading + direction * 45 };
    });
  }

  render() {
    const { classes } = this.props;
    const url = this.getUrl(this.state);
    // console.log(this.state.heading);

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
