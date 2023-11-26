import React, { Component } from "react";
import woman_developer from "./woman-developer.png";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <img src={woman_developer} width="100%" height="100%" />
      </>
    );
  }
}

export default FeelingProud;
