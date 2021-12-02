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
            href="https://docs.google.com/document/d/1JygaO5lKEff38jUe1GSxgsFz-wxgF_gP_r0JLH0CNC4/edit?usp=sharing"
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
