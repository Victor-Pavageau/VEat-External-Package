import * as React from "react";
import "./styles/Card.css";

const Card = ({
  restaurantDescription,
  restaurantName,
  restaurantPhotoLink,
}) => (
  <div className="background-gradient-yellow-orange">
    <div className="white-container">
      <img src={restaurantPhotoLink} alt={`${restaurantName} logo`} />
      <div className="text-container">
        <div className="title">{restaurantName}</div>
        <div className="description">{restaurantDescription}</div>
      </div>
    </div>
  </div>
);

export default Card;
