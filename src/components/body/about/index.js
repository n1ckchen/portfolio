import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <a
            className="resume-a"
            href="https://docs.google.com/document/d/1j5TCl8QMSmEnc2XjkQqJhqs_EKSJYGCHyM8E9DQvL2g/edit?usp=sharing"
          >
            <span className="info-name">Weiyu (Nick) Chen</span>.<br />{" "}
          </a>
          Software Engineer. React Developer.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            className="picture"
            alt="coding"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
