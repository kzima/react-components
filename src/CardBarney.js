import React from "react";
import "./CardBarney.css";

class CardBarney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullWidth: props.fullWidth
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <card style={{ width: this.state.fullWidth ? "100%" : "200px" }}>
          This is a card
        </card>
      </div>
    );
  }
}

export default CardBarney;
