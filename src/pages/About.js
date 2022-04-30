import React from "react";
import JumbotronAbout from "../assets/jumbotron-about.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${JumbotronAbout})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Me</h1>
        <p>
          This website is created by Wilbert Chen, an active student in
          President University majoring in Information Technology. It's a mean
          to practice building website using react library, guided by{" "}
          <a
            href="https://youtu.be/QwarZBtFoFA"
            target="_blank"
            rel="noreferrer"
          >
            youtube video
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
