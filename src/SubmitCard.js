import React, { Component } from "react";
import "./SubmitCard.css";
import Types from "./Types"
import Stages from "./Stages"
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

class SubmitCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: "" },
      hp: { value: "" }
    };
  }

  handleInput = (param, e) => {
    let value = e.target.value;

    console.log(param);

    if (param === "name") {
    }
  };

  render() {
    return (
      <div>
        
        <div className='page-wrap'> 
        <div className='signup'>
                        <h2>Add Your Card</h2>
                        <img
                      src="https://www.shorecakesupply.com/wp-content/uploads/2016/10/poke-3.png"
                      className="pokeball"
                      width="50px"
                    />

                        <form className="form-submit-card">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name of Card"
                            value={this.state.name.value}
                            onKeyUp={e => this.handleInput("name", e)}
                          />
                          <Input
                            type="text"
                            id="hp"
                            name="hp"
                            placeholder="HP of Pokemon"
                            value={this.state.hp.value}
                            onKeyUp={e => this.handleInput("hp", e)}
                          />
                          <div className="types">
                          <Types/>
                          </div>
                          <div className="stages">
                          <Stages/>
                          </div>

                          <div class="loginbutton">
                            <Button text="Submit" onClick={this.handleSubmit} />
                          </div>
                        </form>
                        
                  </div>
      </div>
      </div>
        





    );
  }
}

export default SubmitCard;