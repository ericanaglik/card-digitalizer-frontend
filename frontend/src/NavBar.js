import React from "react";
import logo from "./logo-cs.png";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div>
      
        <ul>
          <div>
          <img src={logo} alt=""/>
          </div>
          <div>
          <li>About</li>
          <li>FAQ</li>
          <li className="login">Log in</li>
          </div>

      </ul>
    </div>
  );
};

export default NavBar;