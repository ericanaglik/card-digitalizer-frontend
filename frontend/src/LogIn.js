import React, { Component } from "react";
import landingRight from "./landing-right.png";
import landingLeft from "./landing-left.png";
import "./LogIn.css";
import { Link } from "react-router-dom";
import axios from "axios";


const Input = props => (
  <input
    className="c-input"
    type={props.type}
    placeholder={props.placeholder}
    onKeyUp={props.onKeyUp}
  />
);

const Button = props => (
  <button className="c-button" onClick={props.onClick}>
    {props.text}
  </button>
);

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: { value: "" },
      password: { value: "" }
    };
  }

  handleInput = (param, e) => {

    if (param === "name") {
    }
  };

  handleSubmit() {
    axios.post('http://127.0.0.1:8000/api/login/', {
      'username': 'erica',
      'password': 'baby2605'
    }, {
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className='page-wrap'> 
        <div className='login'>
                        <h2>Log In</h2>
                        <img alt=""
                      src="https://www.shorecakesupply.com/wp-content/uploads/2016/10/poke-3.png"
                      className="pokeball"
                      width="50px"
                    />

                        <form className="form">
                          <Input
                            type="username"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={this.state.username.value}
                            onKeyUp={e => this.handleInput("username", e)}
                          />
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password.value}
                            onKeyUp={e => this.handleInput("password", e)}
                          />
                          <div class="loginbutton">
                            <Button text="Log In" onClick={this.handleSubmit()} />
                          </div>
                        </form>
                        <div class="switchpage">
                            <Link to="/signup" className="navbar__link">
                              Need to sign up? Click here
                            </Link>
                            </div>

                        <div class="switchpage">
                            <Link to="/signup" className="navbar__link">
                              Forgot password?
                            </Link>
                            </div>
                      </div>
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
}

export default LogIn;
