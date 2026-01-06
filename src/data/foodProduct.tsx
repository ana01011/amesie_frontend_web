// src/data/foodProducts.ts
import { FoodProduct } from '../types';

export const foodProducts: FoodProduct[] = [
  // Compact burger cards [file:28][file:29][file:32]
  {
    id: 'burger-rose-garden',
    name: 'Burger',
    restaurant: 'Rose Garden',
    price: 40,
    image: '/images/burger.png',  // Use your uploaded images
    category: 'burgers',
    tags: ['popular', 'fast-food'],
    rating: 4.5,
    prepTime: '5 min'
  },
  

  // Detailed pizza card [file:31]
  {
    id: 'pizza-prosciutto',
    name: 'Pizza',
    restaurant: 'Coffee House',
    description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
    price: 20,
    image: '/images/pizza-i.png',
    category: 'pizza',
    tags: ['popular','featured'],
    rating: 4.7,
    prepTime: '20 min',
    sizes: ['10"', '14"', '16"'],
    ingredients: ['salt', 'chicken', 'garlic', 'veg']
  },
  {
    id: 'burger-classic',
    name: 'Classic Burger',
    restaurant: 'Burger House',
    price: 45,
    image: '/images/burger.png',
    category: 'burgers',
    tags: ['popular','bestseller'],
    rating: 4.7,
    prepTime: '7 min'
  },

  // Signature coffee from code snippet [file:30]
  {
    id: 'signature-espresso',
    name: 'Signature Espresso',
    description: 'Rich, bold espresso with velvet crema',
    price: 4.5,
    image: 'https://images.unsplash.com/photos/312418962?ixlib=rb-4.0.3&auto=format&fit=crop&w=3148&q=80',
    category: 'coffee',
    tags: ['bestseller'],
    rating: 4.8,
    prepTime: '3 min'
  },

  // More for categories
  {
    id: 'pizza-marghe',
    name: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: 35,
    image: '/images/pizza-i.png',
    category: 'pizza',
    tags: ['popular'],
    rating: 4.6,
    prepTime: '15 min',
    sizes: ['12"', '16"']
  }
];
