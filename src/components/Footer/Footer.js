import React from "react";
import { MDBIcon } from "mdbreact";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <h2>Let's Connect and Spark Ideas Together!</h2>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/kajal-singh-6411a7257" target="blank"
            className="social-logo"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>
          <a href="https://github.com/Kajal886" target="blank" className="social-logo">
            <MDBIcon fab icon="github" />
          </a>
         
        </div>
        <p className="footer-text">
          Crafted with ❤ by{" "}
          <a
            className="my-name"
            href="https://github.com/Kajal886" target="blank"
          >
            Kajal Singh
          </a>
        </p>
      </div>
      {/* <Link
        id="scrollUp"
        to="/home"
        smooth={true}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      > */}
    <a href="/home"   style={{ position: "fixed", bottom: "20px", right: "20px" }}>  <i className="fas fa-angle-up"></i></a>
  
      {/* </Link> */}
     
    </footer>
  );
};

export default Footer;
