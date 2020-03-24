import React, { Component } from 'react';
import cards from "./Cards";
import { Link } from "react-router-dom";
import "./Dashboard.css"

class Dashboard extends Component {
  componentDidMount() {
    document.body.style.overflow = "visible"
  }

  componentWillUnmount(){
    document.body.style.overflow = "hidden"
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
            
            
                {
					cards.CardData.map((data, i) => {
						return (
              
							<div key={i}>
								<div className="cardphoto">
										<img src={data.img_url}/>
                    <div>
                    <h2 className="title">{data.name}</h2>
													<li className="cardinfo">{data.stage}</li>
													<li className="cardinfo">{data.type_1}</li>
                          <li className="cardinfo">{data.type_2}</li>
													<li className="cardinfo">{data.series}</li>
                          <li className="cardinfo">{data.rarity}</li>
													<li className="cardinfo">{data.year_released}</li>
												</div>
                        </div>
								</div>
						);
					})
				}
            </div>
            </div>
        );
    }
} 
export default Dashboard;