import React from "react";
import FoodCard from "./FoodCard";
import { UIFoodProduct } from "../types";
import "./styles/FoodSectionCarousel.css";


interface Props {
  title?: string;
  foods: UIFoodProduct[];
  onFoodClick?: (foodId: number) => void;
  onAddFood?: (foodId: number) => void;
}

const FoodSectionCarousel: React.FC<Props> = ({
  title,
  foods,
  onFoodClick,
  onAddFood,
}) => {

  //  Convert flat array into pairs (2 per column)
const groupedFoods: UIFoodProduct[][] = Array.from(
  { length: Math.ceil(foods.length / 2) },
  (_, i) => foods.slice(i * 2, i * 2 + 2)
);

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
                onClick={() => onFoodClick?.(food.id)}
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