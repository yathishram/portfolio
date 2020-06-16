import React from "react";
import Lottie from "react-lottie";
import animationData from "../media/21472-code-debugging.json";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  return (
    <div className="section hero">
      <div className="row">
        <div className="col s12 m6 l6">
          <Lottie options={defaultOptions} height={400} />
        </div>
        <div className="col s12 m6 l6 white-text hello">
          <h1>
            <ReactTypingEffect text="Hello World," typingDelay={1000} eraseDelay={100000} />
          </h1>
          <h3>
            <ReactTypingEffect
              className="String"
              text={[
                "01001001 00100111 01101101 00100000 01011001 01100001 01110100 01101000 01101001 01110011 01101000",
                "I'm Yathish",
              ]}
              typingDelay={2500}
              eraseDelay={2500}
              speed={60}
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
