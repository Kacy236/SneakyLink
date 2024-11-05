import React from 'react';
import './PropertyCard.css';
import { AiFillHeart } from 'react-icons/ai';
import { truncate } from 'lodash';
import { useNavigate } from 'react-router-dom';


const PropertyCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      
      <img src={card.image} alt="home" className="property-image" />
      <span className="secondaryText r-price">
        <span className="price-symbol">₦</span>
        <span className="price-value">{card.price}</span>
      </span>
      <span className="primaryText property-name">{truncate(card.title, { length: 15 })}</span>
      <span className="secondaryText property-description">{truncate(card.description, { length: 80 })}</span>
    </div>
  );
};

export default PropertyCard;
