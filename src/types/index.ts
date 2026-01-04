export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'snacks' | 'juices' | 'beverages' | 'salads';
  tags: string[];
  rating: number;
  prepTime: string;
}

export interface CartItem extends Product {
  quantity: number;
}

// src/types.ts (or inline in data file)
export interface FoodProduct {
  id: string;
  name: string;
  restaurant?: string;  // Optional for detailed views
  description?: string;
  price: number;  // ₹40 → 40
  image: string;
  category: string;  // "burgers", "pizza", "coffee"
  tags: string[];  // "popular", "bestseller", "new"
  rating?: number;  // 4.7
  prepTime?: string;  // "20 min"
  sizes?: string[];  // ["10\"", "14\"", "16\""]
  ingredients?: string[];  // Icons for toppings
}
