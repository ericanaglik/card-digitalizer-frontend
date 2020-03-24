import React from "react";
import logo from "./logo-cs.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <ul>
        <div>
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
        </div>
        <div>
          <li>About</li>
          <li>FAQ</li>
          <Link to="/login">
            <li className="login-button">Log in</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
