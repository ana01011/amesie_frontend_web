import React from 'react';
import FoodCard from './FoodCard';
import { FoodProduct } from '../types';
import './styles/FoodSection.css';

interface FoodSectionProps {
  title?: string;
  foods: FoodProduct[];
  emoji?: string;
  onFoodClick?: (foodId: string) => void;
  onAddFood?: (foodId: string) => void;
  isLoading?: boolean;
}

const FoodSection: React.FC<FoodSectionProps> = ({
  title = 'Popular Burgers',
  foods,
  emoji,
  onFoodClick,
  onAddFood,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="food-section">
        <div className="food-section__title-wrapper">
          <h2 className="food-section__title">{title}</h2>
        </div>
        <div className="food-section__grid">
          <div className="food-section__loading">Loading foods...</div>
        </div>
      </div>
    );
  }

  if (!foods || foods.length === 0) {
    return (
      <div className="food-section">
        <div className="food-section__title-wrapper">
          <h2 className="food-section__title">{title}</h2>
        </div>
        <div className="food-section__grid">
          <div className="food-section__empty">No foods available</div>
        </div>
      </div>
    );
  }

  return (
    <div className="food-section">
      <div className="food-section__title-wrapper">
        <h2 className="food-section__title">{title}</h2>
      </div>

      <div className="food-section__grid">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            image={food.image}
            name={food.name}
            restaurant={food.restaurant || 'Restaurant'}
            price={food.price}
            onClick={() => onFoodClick?.(food.id)}
            onAddClick={() => onAddFood?.(food.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
