import React, { useState, useEffect } from "react";
import "./styles/FoodCard.css";
import { UIFoodProduct } from "../types";
import { Category } from '../types';
import { getCategories } from "../services/categoryService";

interface FoodCardProps {
  foodproduct: UIFoodProduct;
  onClick?: () => void;
  onAddClick?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  foodproduct,
  onClick,
  onAddClick,
}) => {
  
  const imageUrl = foodproduct.image || "/images/placeholder.png";
  const [added, setAdded] = React.useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    loadCategories();
  }, []);
  const getCategoryName = (id: number) =>
  categories.find(c => c.id === id)?.name || "";
React.useEffect(() => {
  if (!added) return;

  const timer = setTimeout(() => {
    setAdded(false);
  }, 900);
  

  return () => clearTimeout(timer);
}, [added]);

  return (
    <div
      className="food-card"
      onClick={(e) => {
        // ignore clicks coming from button
        if ((e.target as HTMLElement).closest("button")) return;
        onClick?.();
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick?.();
      }}
    >

      {/* Image */}
      <div className="food-card__image-wrapper">
        <img
          src={imageUrl}
          alt={foodproduct.name || "Food item"}
          className="food-card__image"
        />
      </div>

      {/* Content */}
      <div className="food-card__content">

        <div className="food-card__text">
          <h3 className="food-card__name">{foodproduct.name}</h3>
          <p className="food-card__description">
            {getCategoryName(foodproduct.category_id) || "Delicious food"}
          </p>
        </div>

        <div className="food-card__footer">
          <span className="food-card__price">
            ₹{foodproduct.price}
          </span>

          <div className="food-card__actions">

            <button
  type="button"
  className={`food-card__icon-btn ${
    added ? "food-card__icon-btn--added" : "food-card__icon-btn--filled"
  }`}
  onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();

  setAdded(true);
  onAddClick?.();
}}
  onMouseDown={(e) => {
    e.stopPropagation(); 
  }}
  aria-label={`Add ${foodproduct.name}`}
>
  {added ? "✔" : "+"}
</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodCard;