import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import fullStackAnimation from "../media/17750-fullstack.json";
import blockchainAnimation from "../media/5638-bitcoin.json";

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: fullStackAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: blockchainAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  return (
    <div className="section skills">
      <div className="container center">
        <h1>What do I do?</h1>
        <p className="about-content text-white">
          Well, currently I am working as a Blockchain Developer in a start-up, but I alternate between Blockchain and
          Full Stack from time to time.
        </p>
        <div className="row skill-cards">
          <div className="col s12 m6">
            <motion.div whileHover={{ scale: 1.1 }} className="card z-depth-3">
              <div className="card-image">
                <Lottie options={defaultOptionsTwo} height={200} />
              </div>
              <div className="card-content">
                <h4>Blockchain Developer</h4>
                <hr />
                <p className="card-text">
                  I research about Blockchain and try to understand the complex stuff. And yeah, I also build Dapps on
                  Ethereum and Hyperledger.{" "}
                </p>
                <h5>What do I know?</h5>
                <hr />
                <p className="card-text">Solidity, Truffle, Hyperledger Fabric, Hyperledger Besu, Docker, Web3.js</p>
              </div>
            </motion.div>
          </div>
          <div className="col s12 m6">
            <motion.div whileHover={{ scale: 1.1 }} className="card z-depth-3">
              <div className="card-image">
                <Lottie options={defaultOptions} height={200} />
              </div>
              <div className="card-content">
                <h4>Full Stack Developer</h4>
                <hr />
                <p className="card-text">
                  I break down applications and figure out how they work and build something around it. I sometimes
                  don’t get CSS.
                </p>
                <h5>What do I know?</h5>
                <hr />
                <p className="card-text">HTML, CSS, JS, ReactJS, Nodejs, MongoDb, Bootstrap, Materialize CSS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
