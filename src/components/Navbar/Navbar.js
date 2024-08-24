import React, { Component } from "react";
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-scroll";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <Link to="top" spy={true} smooth={true}>
            <img
              src="images/m.svg"
              alt="logo"
              height="40" weight="70" 
              width="200"
              className="logo"
            />
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.url}
                  spy={true}
                  smooth={true}
                  className={item.cName}
                  style={{ textDecoration: "none" }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
