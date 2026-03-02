import React from "react";
import FoodCard from "./FoodCard";
import { FoodProduct } from "../types";
import { useNavigate } from "react-router-dom";
import "./styles/FoodSectionCarousel.css";

interface Props {
  title?: string;
  foods: FoodProduct[];
  onFoodClick?: (foodId: string) => void;
  onAddFood?: (foodId: string) => void;
}

const FoodSectionCarousel: React.FC<Props> = ({
  title,
  foods,
  onFoodClick,
  onAddFood,
}) => {
  const navigate = useNavigate();

  const handleFoodClick = (foodId: string) => {
    const foodItem = foods.find((f) => f.id === foodId);
    navigate("/food-details", { state: { foodItem } });
    onFoodClick?.(foodId);
  };

  //  Convert flat array into pairs (2 per column)
  const groupedFoods: FoodProduct[][] = [];
  for (let i = 0; i < foods.length; i += 2) {
    groupedFoods.push(foods.slice(i, i + 2));
  }

  return (
    <div className="food-carousel">
      {title && <h2 className="food-carousel__title">{title}</h2>}

      <div className="food-carousel__track">
        {groupedFoods.map((group, index) => (
          <div className="food-carousel__column" key={index}>
            {group.map((food) => (
              <FoodCard
                key={food.id}
                foodproduct={food}
                onClick={() => handleFoodClick(food.id)}
                onAddClick={() => onAddFood?.(food.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodSectionCarousel;