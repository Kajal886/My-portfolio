import React, { Component } from "react";
import Intro from "./Intro";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <header className="Home" id="home">
        
        <div className="background-image">
          {/* Add your background image here */}
        </div>
        <div className="container">
          <div className="header" style={{ opacity: "0.9" }}>
            <span className="subheading">Hey! I am </span>
            <h1 className="myName">Kajal Singh!</h1>
            <h2>
              <Intro />
            </h2>
            <br />
            <h4 className="introduction">
              I'm a dedicated software engineer committed to delivering high-quality solutions that meet client requirements and exceed expectations. I thrive on challenges and am passionate about continuously improving my skills to contribute effectively to projects and teams.
            </h4>
            {/* <button className="contact-me"> Contact Me</button> */}
          </div>
          <div className="container">
            <div className="hero-shape custom-animation">
              <img
                src="images/dot.svg"
                alt="Circle Animation"
                height="50"
                width="50"
                style={{ opacity: "0.5" }}
              />
            </div>
            {/* <div className="image image-fluid">
              <img
                src="images/witch.svg"
                alt="Masudha"
                height="300"
                width="300"
              />
            </div> */}
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
