import React from "react";
import Lottie from "react-lottie";
import animationData from "../media/18123-developer.json";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };

  const coderVariants = {
    hidden: {
      x: "-600px",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: "1500px",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
      },
    },
  };
  return (
    <div className="section hero">
      <div className="row">
        <motion.div variants={coderVariants} initial="hidden" animate="visible" className="col s12 m6 l6">
          <Lottie options={defaultOptions} height={400} />
        </motion.div>
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="col s12 m6 l6 hello">
          <h1>
            <ReactTypingEffect text="Hello World," typingDelay={2000} eraseDelay={100000} />
          </h1>
          <h3 className="name-hero">
            <ReactTypingEffect
              className="String"
              text={["I'm Yathish R", "0x49276d2059617468697368"]}
              typingDelay={4300}
              eraseDelay={2800}
              speed={60}
            />
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
