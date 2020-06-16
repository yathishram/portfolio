import React from "react";
import { motion } from "framer-motion";
import pragmaLogo from "../media/project.svg";
import monsterLogo from "../media/monsters.svg";
import foodLogo from "../media/healthy-food.svg";

const Projects = () => {
  return (
    <div className="section projects">
      <div className="container ">
        <h1 className="center">What have I built?</h1>
        <div className="row">
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={pragmaLogo} alt="" style={{ height: "120px", marginTop: "10px" }} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Project Pragma<i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Project Pragma <i className="material-icons right">close</i>
                </span>
                <p>
                  A million-dollar idea for Final year project. It is a simple P2P file sharing application built using
                  Ethereum and IPFS. Watch out here for decentralised tinder under the same project.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={monsterLogo} alt="" style={{ height: "120px", marginTop: "10px" }} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Monster Tokens<i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Monster Tokens<i className="material-icons right">close</i>
                </span>
                <p>
                  A Dapp that mints ERC721 tokens called Monster Tokens each unique character. Maybe you can own some.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={foodLogo} alt="" style={{ height: "120px", marginTop: "10px" }} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Hangry<i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Hangry<i className="material-icons right">close</i>
                </span>
                <p>A recipe search app and personal cookbook built using React, Redux and Firebase.</p>
              </div>
            </motion.div>
          </div>
        </div>
        <p className="about-content center">
          {" "}
          These are 3 of the many projects built when I was jobless and as well as on the job.{" "}
          <a href="https://github.com/yathishram?tab=repositories">Click here</a> to check out my Github for more
        </p>
      </div>
    </div>
  );
};

export default Projects;
