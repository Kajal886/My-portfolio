import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { WebIcons } from "./WebDetails";
import "../Resume.scss";

class SkillsIcons extends Component {
  render() {
    return (
      <Row className="justify-content-center">
        <Col>
          <h3 className="text-center mb-4 light-gray">Web Technologies</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {WebIcons.map((item, index) => (
              <div className="skills-card m-3 text-center" key={index}>
                <img
                  src={item.imgurl}
                  alt={item.alt}
                  height="40"
                  width="40"
                  className="icon"
                />
                <div className="icon-name">{item.name}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    );
  }
}

export default SkillsIcons;
