import React, { Component } from "react";
import "./SubmitCard.css";
import Types from "./Types"
import stageOptions from "./Stages"

import Select from "react-select"

const pokemon = require('pokemontcgsdk')

const Button = props => (
  <button className="c-button" onClick={props.onClick}>
    {props.text}
  </button>
);


class SubmitCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hp: "",
      subtype: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange(selected, e) {
    this.setState({
      [e.name]: selected.value
    })
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    let cardList = pokemon.card.where(this.state)

    // axios.post("127.0.0.1:5000/api/card/create/")
  }

  render() {
    return (
      <div>

        <div className='page-wrap'> 
          <div className='signup'>
            <h2>Add Your Card</h2>
            <img alt=""
            src="https://www.shorecakesupply.com/wp-content/uploads/2016/10/poke-3.png"
            className="pokeball"
            width="50px"
            />

            <form className="form-submit-card">
              <input className="c-input"
              type="text"
              id="name"
              name="name"
              placeholder="Name of Card"
              value={this.state.name}
              onChange={this.handleChange}
              />

              <input className="c-input"
              type="text"
              id="hp"
              name="hp"
              placeholder="HP of Pokemon"
              value={this.state.hp}
              onChange={this.handleChange}
              />

              <div className="types">
                <Types/>
              </div>
              <div className="stages">
                <Select options={stageOptions}
                  name='subtype'
                  placeholder='Select stage.'
                  value={this.state.subtype}
                  onChange={this.handleSelectChange}
                  searchable={false}
                />
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
