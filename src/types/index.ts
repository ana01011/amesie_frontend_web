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
export interface Seller {
  id: number;
  name: string;
}
export interface ProductImage {
  id: number;
  image_url: string;
  display_order: number;
  is_primary?: boolean;
  product_id: number;
  created_at: string;
}

// src/types.ts (or inline in data file)
export interface FoodProduct {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  stock_quantity: number;
  category_id: number;
  sku: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  seller?: Seller | null;
  images: ProductImage[];
}

// types/index.ts

export interface UIFoodProduct extends FoodProduct {
  image: string;
  restaurant: string;
  rating: string;
  prepTime: string;
  deliveryFee: number;
  sizes: string[];
  ingredients: string[];
  tags:string[];
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
