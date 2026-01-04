import React from 'react';
import './styles/RestaurantCard.css';

interface RestaurantCardProps {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  delivery: string;
  time: string;
  image: string;
  onClick?: (id: number) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  cuisine,
  rating,
  delivery,
  time,
  image,
  onClick,
}) => {
  return (
    <div 
      className="restaurant-card"
      onClick={() => onClick?.(id)}
    >
      <div className="restaurant-card__image-wrapper">
        <img src={image} alt={name} className="restaurant-card__image" />
        <div className="restaurant-card__overlay">
          <span className="restaurant-card__rating">
            <img src="/images/star-i.png" alt="Rating" />
            {rating}
          </span>
        </div>
      </div>

      <div className="restaurant-card__info">
        <h3>{name}</h3>
        <p className="restaurant-card__cuisine">{cuisine}</p>

        <div className="restaurant-card__meta">
          <div className="restaurant-card__meta-item">
            <img src="/images/free-i.png" alt="Delivery" />
            <span>{delivery}</span>
          </div>
          <div className="restaurant-card__meta-item">
            <img src="/images/timer-i.png" alt="Time" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
