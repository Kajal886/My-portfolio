import React, { Component } from "react";
import "./About.css";
import { Details } from "./Details.js";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          {/* <div className="about-image">
            <img
              src="https://i.pinimg.com/originals/31/0c/fa/310cfac3d064ea29c2401793496f06ac.png"
              alt="Masudha"
              height="300"
              width="300"
            />
          </div> */}
          <div className="about-section">
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
            <p>
      I'm a passionate software engineer with a love for problem-solving and
      innovation. My journey in the world of technology began with a curiosity
      to understand how things work under the hood. With years of experience,
      I've honed my skills in full-stack development, specializing in building
      robust and scalable web applications.
      <br />
      As a software engineer, I thrive on tackling complex challenges and
      transforming ideas into reality through elegant code. Whether it's
      crafting intuitive user interfaces or optimizing backend systems for
      performance, I'm dedicated to delivering high-quality solutions that
      exceed expectations.
      <br />
      Outside of coding, you can find me exploring the latest tech trends,
      contributing to open-source projects, or indulging in a good book on
      software architecture. I'm passionate about continuous learning and
      staying updated with emerging technologies to stay at the forefront of
      innovation.
    </p>
            </h3>
            <br />
            <ul className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
