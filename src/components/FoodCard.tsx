import React from "react";
import "./styles/FoodCard.css";
import { FoodProduct } from "../types";

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
      
      {/* Image */}
      <div className="food-card__image-wrapper">
        <img
          src={foodproduct.image}
          alt={foodproduct.name}
          className="food-card__image"
        />
      </div>

      {/* Content */}
      <div className="food-card__content">
        
        <div className="food-card__text">
          <h3 className="food-card__name">{foodproduct.name}</h3>
          <p className="food-card__description">
            {foodproduct.restaurant}
          </p>
        </div>

        <div className="food-card__footer">
          <span className="food-card__price">
            Rs.{foodproduct.price}
          </span>

          <div className="food-card__actions">
            
            <button
              className="food-card__icon-btn food-card__icon-btn--filled"
              onClick={handleAddClick}
              aria-label={`Add ${foodproduct.name}`}
            >
              +
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodCard;