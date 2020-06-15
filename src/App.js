import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./media/16957-comming-soon.json";

class App extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="container center homeDiv">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default App;
