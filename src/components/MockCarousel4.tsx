import React from 'react';
import RestaurantCard from './RestaurantCard';
import './styles/RestaurantsSection.css';
import { Restaurant } from '../types';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';




interface MockCarousel4Props {
  restaurants: Restaurant[];
  title?: string;
  onRestaurantClick?: (id: string) => void;
}

const MockCarousel4: React.FC<MockCarousel4Props> = ({
  restaurants,
  title = 'Open Restaurants',
  onRestaurantClick,
}) => {
  const navigate = useNavigate();
  const handleRestaurantClick = (Id: string) => {
    // 1. Find restaurant data
    const Item = restaurants.find(r => r.id === Id);

    // 2. Send to details page
    navigate('/restaurant-details', {
      state: { Item }  // Full data passed here
    });

    // 3. Call parent callback (optional)
    onRestaurantClick?.(Id);
  };
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleSeeAllClick = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollWidth,
      behavior: 'smooth',
    });
  };





  //   console.log('RestaurantsSection received:', restaurants);
  // console.log('Restaurants length:', restaurants?.length);
  // console.log('First restaurant:', restaurants[0]);

  return (

    <section className="restaurants-section">
      <div className="restaurants-section__container">
        <div className="restaurants-section__header">
          <h2>{title}</h2>
          <button
            className="restaurants-section__see-all-btn"
            onClick={handleSeeAllClick}
          >
            See All &gt;
          </button>
        </div>


        <div
          ref={scrollRef}
          className="restaurants-section__carousel">

          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => handleRestaurantClick(restaurant.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MockCarousel4;