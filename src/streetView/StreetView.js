import React from "react";
import { withStyles } from "material-ui/styles";
import { CircularProgress } from "material-ui/Progress";
import axios from "axios";

import IconKeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import IconKeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

const styles = theme => ({
  root: {
    width: "100%",
    height: "auto",
    minHeight: 235,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
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
    top: 100
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
    top: 100
  },
  iconContainer: {
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.7
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class StreetView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      loading: true
    };
    this.pano = null;
    this.heading = 0;
  }

  componentWillReceiveProps(nextProps) {
    const { latLng, apiKey } = nextProps;
    if (latLng && latLng !== this.props.latLng) {
      this.loadData(latLng, apiKey);
    }
  }

  componentWillMount() {
    const { latLng, apiKey } = this.props;
    this.loadData(latLng, apiKey);
  }

  loadData = (latLng, apiKey) => {
    const metaUrl = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${latLng}&key=${apiKey}`;
    this.setState({
      loading: true
    });
    axios
      .get(metaUrl)
      .then(response => {
        this.pano = response.data.pano_id;
        this.setState({
          loading: false,
          url: `https://maps.googleapis.com/maps/api/streetview?size=500x300&pano=${
            this.pano
          }&heading=${this.heading}&pitch=0&key=${apiKey}`
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  };

  handleArrowClick(direction) {
    const { apiKey } = this.props;
    this.heading = (this.heading + direction * 45 + 360) % 360;
    this.setState({
      url: `https://maps.googleapis.com/maps/api/streetview?size=500x300&pano=${
        this.pano
      }&heading=${this.heading}&pitch=0&key=${apiKey}`
    });
  }

  render() {
    const { classes } = this.props;
    const { url, loading } = this.state;
    return (
      <div className={classes.root}>
        {loading ? (
          <CircularProgress
            size={80}
            className={classes.progress}
            color="accent"
          />
        ) : (
          <div>
            <img className={classes.root} src={url} alt="" />
            <div onClick={this.handleArrowClick.bind(this, -1)}>
              <IconKeyboardArrowLeft className={classes.leftArrow} />
            </div>
            <div onClick={this.handleArrowClick.bind(this, 1)}>
              <IconKeyboardArrowRight className={classes.rightArrow} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(StreetView);
