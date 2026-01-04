import React from 'react';
import RestaurantCard from './RestaurantCard';
import './styles/RestaurantsSection.css';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  delivery: string;
  time: string;
  image: string;
}

interface RestaurantsSectionProps {
  restaurants: Restaurant[];
  title?: string;
  onRestaurantClick?: (restaurantId: number) => void;
}

const RestaurantsSection: React.FC<RestaurantsSectionProps> = ({
  restaurants,
  title = 'Open Restaurants',
  onRestaurantClick,
}) => {
  return (
    <section className="restaurants-section">
      <div className="restaurants-section__container">
        <div className="restaurants-section__header">
          <h2>{title}</h2>
        </div>

        <div className="restaurants-section__grid">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
              onClick={onRestaurantClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
