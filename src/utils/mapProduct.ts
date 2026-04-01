import { FoodProduct, UIFoodProduct } from "../types";

export const mapProductForUI = (p: FoodProduct): UIFoodProduct => {
  return {
    ...p,
    image:
      p.images?.find(i => i.is_primary)?.image_url ||
      p.images?.[0]?.image_url ||
      "/images/placeholder.png",

    restaurant: p.seller?.name || "Spicy Restaurant",
    rating: ((p.id % 5) + 3).toFixed(1),
    prepTime: `${15 + (p.id % 10)} min`,
    deliveryFee: p.id % 2 === 0 ? 0 : 40,
    sizes: ["S", "M", "L"],
    ingredients: ["salt", "chicken", "garlic", "chilli"],
    tags:["popular"]
  };
};