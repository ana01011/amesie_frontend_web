// src/data/restaurants.ts
import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  // Detailed restaurant view [file:107]
  {
    id: 'spicy-restaurant',
    name: 'Spicy Restaurant',
    rating: 4.7,
    image: '/images/restro-1.png',  // Hero image
    cuisine: ['Burger', 'Sandwich', 'Pizza'],
    deliveryTime: '30 min',
    deliveryFee: 0,  // Free delivery
    isOpen: true,
    itemCount: 10,
    description: 'Haciendo del Ogle Ruis Viverra Elit',
    tags: ['featured']
  },

  // Compact suggested/open restaurants [file:108][file:109]
  {
    id: 'rose-garden',
    name: 'Rose Garden',
    rating: 4.7,
    image: '/images/restro-2.png',  // Restaurant photo
    cuisine: ['Burger'],
    deliveryTime: '20 min',
    deliveryFee: 20,
    isOpen: true,
    tags: ['suggested']
  },
  {
    id: 'burger-house',
    name: 'Burger House',
    rating: 4.7,
    image: '/images/restaurants/burger-house.jpg',
    cuisine: ['Burger', 'Fast Food'],
    deliveryTime: '25 min',
    deliveryFee: 15,
    isOpen: true,
    tags: ['open']
  },
  {
    id: 'pizza-palace',
    name: 'Pizza Palace',
    rating: 4.6,
    image: '/images/restaurants/pizza-palace.jpg',
    cuisine: ['Pizza'],
    deliveryTime: '35 min',
    deliveryFee: 0,
    isOpen: true,
    tags: ['suggested', 'open']
  },
  // Add 5-10 more for "See All"
  {
    id: 'chicken-rich',
    name: 'Chicken Riche',
    rating: 4.7,
    image: '/images/restaurants/chicken-riche.jpg',  // Indian platter [file:109]
    cuisine: ['Chicken', 'Rice', 'Wings'],
    deliveryTime: '20 min',
    deliveryFee: 0,
    isOpen: true,
    tags: ['open']
  }
];
