export interface SupCategory {
  id: number;
  label: string;
  icon: string;
  description: string;
}
export interface Category {
  id: number;
  name: string;
  parent_id: string;
  is_active: boolean;
  super_category: number;
  image_url: string;
}

export interface Keyword {
  id: number;
  name: string;
  parent_id: string;
  is_active: boolean;
  super_category: number;
  image_url: string;
}

// src/types.ts (or inline in data file)
export interface FoodProduct {
  id: string;
  name: string;
  restaurant?: string;  // Optional for detailed views
  description?: string;
  price: number;  // ₹40 → 40
  image: string;
  category: number;  // "burgers", "pizza", "coffee"
  tags: string[];  // "popular", "bestseller", "new"
  rating?: number;  // 4.7
  prepTime?: string;  // "20 min"
  sizes?: string[];  // ["10\"", "14\"", "16\""]
  ingredients: string[];  // Icons for toppings
  deliveryFee?: number; // 0 = Free

}

// src/types/index.ts (add to existing)
export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  image: string;  // Hero banner or logo
  cuisine: string[];  // ["Burger", "Sandwich", "Pizza"]
  deliveryTime: string;  // "30 min"
  deliveryFee: number;  // 0 for free
  isOpen: boolean;
  itemCount?: number;  // "Burger (10)"
  description?: string;
  tags?: string[];  // "Suggested", "Open"
}
