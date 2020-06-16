import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="section experience">
      <div className="container center">
        <h1 className="">Where have I worked?</h1>
        <p className="about-content">
          People say things don't come easy to people who haven't studied in IITs and NITs and top colleges. Well things
          change. I have worked with start-ups that have given a better outlook and helped me grow better.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card horizontal">
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h5>QTC Plus</h5>
                  <p className="card-text">Role: Intern</p>
                  <p>Jan 2018 - May 2018</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card horizontal">
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h5>IoTracx</h5>
                  <p className="card-text">Role: Blockchain Intern</p>
                  <p>Aug 2018 - Nov 2018</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card horizontal">
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h5>IIIT, Allahabad</h5>
                  <p className="card-text">Role: Summer Intern</p>
                  <p>Jul 2019 - Aug 2019</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card horizontal">
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h5>Curl Analytics</h5>
                  <p className="card-text">Role: Blockchain Developer Intern</p>
                  <p>Aug 2019 - May 2020</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col s12 m6 l4">
            <motion.div whileHover={{ scale: 1.1 }} className="card horizontal">
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h5>Consenso Labs</h5>
                  <p className="card-text">Role: Blockchain Developer</p>
                  <p>Jun 2020 - Present</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
