import React from "react";
import insta from "../media/instagram.svg";
import linkedIn from "../media/linkedin.svg";
import github from "../media/github.svg";
import mail from "../media/email.svg";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer finally">
        <div className="container center">
          <h3>You made it to the end!</h3>
          <p className="footer-content">
            Psst, not to brag but did you know I co-authored a Blockchain book? Buy my co-author and me coffee by buying
            the book <a href="https://www.shroffpublishers.com/books/9789352138852/">here!</a>
          </p>
          <p className="footer-content">Connect with me on</p>
          <div className="container center icons">
            <div className="row">
              <div className="col s6 m3">
                <a href="https://www.instagram.com/yathish_ram/">
                  <img src={insta} style={{ height: "30px" }} alt="insta" />
                </a>
              </div>
              <div className="col s6 m3">
                <a href="https://www.linkedin.com/in/yathish-r-1b6040165">
                  <img src={linkedIn} style={{ height: "30px" }} alt="linkedin" />
                </a>
              </div>
              <div className="col s6 m3">
                <a href="https://github.com/yathishram?tab=repositories">
                  <img src={github} style={{ height: "30px" }} alt="github" />
                </a>
              </div>
              <div className="col s6 m3">
                <a href="mailto:123yathish.r@gmail.com">
                  <img src={mail} style={{ height: "30px" }} alt="github" />
                </a>
              </div>
            </div>
          </div>
          <p className="footer-content">&#169; Yathish R</p>
          <span className="footer-content">
            Made with <i className="material-icons">favorite</i> Materialize CSS{" "}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
