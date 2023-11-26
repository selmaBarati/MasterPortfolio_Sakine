import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";
import sakine_gif from "./sakine-barati-frontend.gif";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        {/* <LoaderLogo id="logo" theme={props.theme} /> */}
        <img width={200} height={200} src={sakine_gif} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      // <AnimatedSplash theme={this.props.theme} />
      <div style={{ paddingTop: "20px" }}>
        <img
          width="100%"
          style={{ borderRadius: "20px", marginTop: "100px" }}
          height="100%"
          src={sakine_gif}
        />
      </div>
    );
  }
}

export default Splash;
