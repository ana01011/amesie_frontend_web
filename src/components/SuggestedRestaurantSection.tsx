import React from 'react';
import SuggestedRestaurantCard from './SuggestedRestaurantCard';
import './styles/SuggestedRestaurantSection.css';

interface Restaurant {
  id: string;
  image: string;
  name: string;
  rating: number;
}

interface RestaurantSectionProps {
  title: string;
  restaurants: Restaurant[];
  isLoading?: boolean;
  onRestaurantClick?: (restaurant: Restaurant) => void;
}

const SuggestedRestaurantSection: React.FC<RestaurantSectionProps> = ({
  title,
  restaurants,
  isLoading = false,
  onRestaurantClick,
}) => {
  if (isLoading) {
    return <div className="restaurant-section__loading">Loading restaurants...</div>;
  }

  return (
    <section className="restaurant-section">
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
            onClick={() => onRestaurantClick?.(restaurant)}
          />
        ))}
      </div>
    </section>
  );
};

export default SuggestedRestaurantSection;
