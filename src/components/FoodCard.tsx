import React from 'react';
import './styles/FoodCard.css';

interface FoodCardProps {
  id: string;
  image: string;
  name: string;
  restaurant: string;
  price: number;
  onClick?: () => void;
  onAddClick?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  image,
  name,
  restaurant,
  price,
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
          src={image} 
          alt={name} 
          className="food-card__image"
        />
      </div>

      {/* Card Content */}
      <div className="food-card__content">
        {/* Name */}
        <h3 className="food-card__name">{name}</h3>
        
        {/* Restaurant */}
        <p className="food-card__restaurant">{restaurant}</p>
        
        {/* Footer: Price + Add Button */}
        <div className="food-card__footer">
          <span className="food-card__price">₹{price}</span>
          {onAddClick && (
            <button
              className="food-card__add-btn"
              onClick={handleAddClick}
              aria-label={`Add ${name} to cart`}
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
