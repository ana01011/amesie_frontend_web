import React from 'react';
import './styles/FoodCard.css';
import { FoodProduct } from '../types';

interface FoodCardProps {
  foodproduct: FoodProduct;
  onClick?: () => void;
  onAddClick?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  foodproduct,
  onClick,
  onAddClick,
}) => {
  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddClick?.();
  };

  return (
    <div className="food-card" onClick={onClick}>
      {/* Food Image - Rounded with dark background */}
      <div className="food-card__image-wrapper">
        <img 
          src={foodproduct.image} 
          alt={foodproduct.name} 
          className="food-card__image"
        />
      </div>

      {/* Card Content */}
      <div className="food-card__content">
        {/* Name */}
        <h3 className="food-card__name">{foodproduct.name}</h3>
        
        {/* Restaurant */}
        <p className="food-card__restaurant">{foodproduct.restaurant}</p>
        
        {/* Footer: Price + Add Button */}
        <div className="food-card__footer">
          <span className="food-card__price">₹{foodproduct.price}</span>
          {onAddClick && (
            <button
              className="food-card__add-btn"
              onClick={handleAddClick}
              aria-label={`Add ${foodproduct.name} to cart`}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
