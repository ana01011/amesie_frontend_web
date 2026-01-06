import React from 'react';
import './styles/SuggestedRestaurantCard.css';

interface SuggestedRestaurantCardProps {
  id: string;
  image: string;
  name: string;
  rating: number;
  onClick?: () => void;
}

const SuggestedRestaurantCard: React.FC<SuggestedRestaurantCardProps> = ({
  id,
  image,
  name,
  rating,
  onClick,
}) => {
  return (
    <div className="suggested-restaurant-card" onClick={onClick}>
      {/* Thumbnail Image */}
      <div className="card-image-container">
        <img 
          src={image} 
          alt={name} 
          className="card-image"
        />
      </div>

      {/* Card Content - Name & Rating Stacked */}
      <div className="card-content">
        <h4 className="card-name">{name}</h4>
        
        {/* Rating - Below Name */}
        <div className="card-rating">
          <span className="star">★</span>

          <span className="rating-value">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedRestaurantCard;
