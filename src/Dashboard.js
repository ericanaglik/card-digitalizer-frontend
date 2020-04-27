import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import axios from "axios"

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {cards: []}
  }
  componentDidMount() {
    document.body.style.overflow = "visible";
    axios.get(
      "https://card-digitalizer.appspot.com/api/card/list",
      {'headers': {'Accept': 'application/json'}})
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({ cards: data })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  componentWillUnmount() {
    document.body.style.overflow = "hidden";
  }
  render() {
    return (
      <div>
        <div className="upload-card">
          <Link to="/submit">
            <button class="upload">Upload New Card</button>
          </Link>
        </div>
        <div className="please">

          {this.state.cards.map((data, i) => {
            return (
              <div key={i}>
                <div className="cardphoto">
                  <img src={data.img_url} />
                  <div>
                    <h2 className="title">{data.name}</h2>
                    <li className="cardinfo">Stage: {data.stage}</li>
                    <li className="cardinfo">Type 1: {data.type_1}</li>
                    <li className="cardinfo">Type 2: {data.type_2}</li>
                    <li className="cardinfo">Series: {data.series}</li>
                    <li className="cardinfo">Rarity: {data.rarity}</li>
                    <li className="cardinfo">
                      Year Released: {data.year_released}
                    </li>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Dashboard;