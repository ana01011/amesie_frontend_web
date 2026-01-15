import React from 'react';
import FoodCard from './FoodCard';
import { FoodProduct } from '../types';
// import { foodProducts } from '../data/foodProduct';
import './styles/FoodSection.css';
import { useNavigate } from 'react-router-dom';

interface FoodSectionProps {
  title?: string;
  foods: FoodProduct[];
  onFoodClick?: (foodId: string) => void;
  onAddFood?: (foodId: string) => void;
  isLoading?: boolean;
}

const FoodSection: React.FC<FoodSectionProps> = ({
  title,
  foods,
  onFoodClick,
  onAddFood,
  isLoading = false,
}) => {
const navigate = useNavigate();
const handleFoodClick = (foodId: string) => {
  // 1. Find food data
    const foodItem = foods.find(f => f.id === foodId);
    
    // 2. Send to details page
    navigate('/food-details', { 
      state: { foodItem }  // Full data passed here
    });
    
    // 3. Call parent callback (optional)
    onFoodClick?.(foodId);
};



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
      <div className="food-section__container">
      <div className="food-section__title-wrapper">
        <h2 className="food-section__title">{title}</h2>
      </div>

      <div className="food-section__grid">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
             foodproduct ={food}
            onClick={() => handleFoodClick(food.id)}
            onAddClick={() => onAddFood?.(food.id)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default FoodSection;
