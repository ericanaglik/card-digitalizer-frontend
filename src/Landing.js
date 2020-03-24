import React from "react";
import "./Landing.css";
import landingRight from "./landing-right.png";
import landingLeft from "./landing-left.png";
import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div className="landing">
      <div class="landing-text">
      <div class="maintext">
        <h1>Track your card</h1>
        <h1>collection online</h1>
      </div>
      <div class="subtext">
        <p>Find out how much your collection is worth,
          easily sort your cards on your terms, all from
          taking a picture of your cards
        </p>
      </div>
      <Link to="/signup">
      <button class="upload-button">Start Uploading</button>
      </Link>
      </div>

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