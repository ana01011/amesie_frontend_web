
import React from 'react';
import './styles/RestaurantCard.css';
import { Restaurant } from '../types';
import { HeartIcon, ClockIcon, StarIcon, FreeDeliveryIcon } from '../icons';



interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: (id: string) => void;
}


const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onClick,
}) => {
  // console.log('RestaurantCard received restaurant:', restaurant);
  // if (!restaurant) {
  //   console.log(' RESTAURANT IS UNDEFINED!');
  //   return null;
  // }

  return (

    <div
      className="restaurant-card"
      onClick={() => onClick?.(restaurant.id)}
    >
      <div className="restaurant-card__image-wrapper">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-card__image" />
        <div className="restaurant-card__overlay">
          <span className="restaurant-card__rating">
            <StarIcon /> 
            {restaurant.rating}
          </span>
        </div>
      </div>

      <div className="restaurant-card__info">
        <h3>{restaurant.name}</h3>
        <p className="restaurant-card__cuisine">{restaurant.cuisine.join(' · ')}</p>

        <div className="restaurant-card__meta">
          <div className="restaurant-card__meta-item">
            <FreeDeliveryIcon/>  
            <span>
              {restaurant.deliveryFee === 0 ? 'Free' : `₹${restaurant.deliveryFee}`}
            </span>
          </div>
          <div className="restaurant-card__meta-item">
            <ClockIcon />  
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
