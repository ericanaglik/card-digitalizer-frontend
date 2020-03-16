import React from "react";
import "./Landing.css";
import landingRight from "./landing-right.png";
import landingLeft from "./landing-left.png";

function Landing(props) {
  return (
    <div>

      <div class="landing-left">
        <img src={landingLeft} alt="" />
      </div>
      
      <div class="landing-right">
        <img src={landingRight} alt="" />
      </div>
    </div>
  );
}

export default Landing;