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
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

   setUsername(username) {
    console.log(username)
    this.setState({username: username})
  }
  
  setPassword(password) {
    this.setState({password: password})
  }

  handleSubmit(e) {
    e.preventDefault()
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    axios.post('http://127.0.0.1:8000/api/login/', {
      'username': this.state.username,
      'password': this.state.password
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

                        <form className="form" onSubmit={this.handleSubmit}>
                          <Input
                            type="username"
                            id="username"
                            name="username"
                            placeholder="Username"
			    onChange={this.setUsername}
                          />
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                          />
                          <div className="loginbutton">
                            <Button type="submit" text="Log In" />
                          </div>
                        </form>
                        <div className="switchpage">
                            <Link to="/signup" className="navbar__link">
                              Need to sign up? Click here
                            </Link>
                            </div>

                        <div className="switchpage">
                            <Link to="/signup" className="navbar__link">
                              Forgot password?
                            </Link>
                            </div>
                      </div>
                  </div>

                                <div className="landing-left">
                      <img src={landingLeft} alt="" />
                    </div>
                    
                    <div className="landing-right">
                      <img src={landingRight} alt="" />
                    </div>
                  </div>




    );
  }
}

export default LogIn;
