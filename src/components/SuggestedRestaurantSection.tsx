import React from 'react';
import SuggestedRestaurantCard from './SuggestedRestaurantCard';
import './styles/SuggestedRestaurantSection.css';
import { Restaurant } from '../types';
import { useNavigate } from 'react-router-dom';
// interface Restaurant {
//   id: string;
//   image: string;
//   name: string;
//   rating: number;
// }

interface RestaurantSectionProps {
  title: string;
  restaurants: Restaurant[];
  isLoading?: boolean;
  onRestaurantClick?: (id: string) => void;
}

const SuggestedRestaurantSection: React.FC<RestaurantSectionProps> = ({
  title,
  restaurants,
  isLoading = false,
  onRestaurantClick,
}) => {

  const navigate = useNavigate();
const  handleRestaurantClick = (Id: string) => {
  // 1. Find restaurant data
    const Item = restaurants.find(r => r.id === Id);
    
    // 2. Send to details page
    navigate('/restaurant-details', { 
      state: { Item }  // Full data passed here
    });
    
    // 3. Call parent callback (optional)
    onRestaurantClick?.(Id);
};




  if (isLoading) {
    return <div className="restaurant-section__loading">Loading restaurants...</div>;
  }

  return (
    <section className="restaurant-section">
      <div className= "restaurant-section__container">
      <div className="restaurant-section__header">
        <h2 className="restaurant-section__title">{title}</h2>
      </div>

      <div className="restaurant-section__list">
        {restaurants.map((restaurant) => (
          <SuggestedRestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            rating={restaurant.rating}
            onClick={() => handleRestaurantClick(restaurant.id)}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default SuggestedRestaurantSection;
