import React, { useState } from 'react';
import Header from '../components/Header';
import RestaurantsSection from '../components/RestaurantsSection';
import './FoodPage.css';
import { foodProducts } from '../data/foodProduct';
import FoodSection from '../components/FoodSection';

// interface FoodItem {
//   id: number;
//   name: string;
//   restaurant: string;
//   price: number;
//   image: string;
// }

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  delivery: string;
  time: string;
  image: string;
}

const FoodPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userAddress] = useState('123 Oak Street');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Food items (Popular Burgers section)
  // const foodItems: FoodItem[] = [
  //   {
  //     id: 1,
  //     name: 'Burger',
  //     restaurant: 'Rose Garden',
  //     price: 40,
  //     image: '/images/burger.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Burger',
  //     restaurant: 'Rose Garden',
  //     price: 40,
  //     image: '/images/burger.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Burger',
  //     restaurant: 'Rose Garden',
  //     price: 40,
  //     image: '/images/burger.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Burger',
  //     restaurant: 'Rose Garden',
  //     price: 40,
  //     image: '/images/burger.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Burger',
  //     restaurant: 'Rose Garden',
  //     price: 40,
  //     image: '/images/burger.png',
  //   },
  //   {
  //     id: 6,
  //     name: 'Burger',
  //     restaurant: 'Rose Garden',
  //     price: 40,
  //     image: '/images/burger.png',
  //   },
  // ];

  // 🍽 Open restaurants (same shape as Home.tsx)
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Restaurant Name',
      cuisine: 'Burger · Chicken · Rice · Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 Min',
      image: '/images/restro-1.png',
    },
    {
      id: 2,
      name: 'Restaurant Name',
      cuisine: 'Burger · Chicken · Rice · Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 Min',
      image: '/images/restro-1.png',
    },
    {
      id: 3,
      name: 'Restaurant Name',
      cuisine: 'Burger · Chicken · Rice · Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 Min',
      image: '/images/restro-1.png',
    },
  ];

  const handleFoodClick = (foodId: string) => {
      console.log('Food clicked:', foodId);
      const food = foodProducts.find(f => f.id === foodId);
      console.log('Food details:', food);
      // Navigate to food details or add to cart
    };
  
    const handleAddFood = (foodId: string) => {
      console.log('Add to cart:', foodId);
      const food = foodProducts.find(f => f.id === foodId);
      console.log('Added to cart:', food);
      // Add to cart logic
    };

    const getPopularFoods = () => {
        if (selectedCategory === 'all') {
          return foodProducts.filter(food => food.tags.includes('popular')).slice(0, );
        }
        return foodProducts
          .filter(food => food.category === selectedCategory && food.tags.includes('popular'))
          .slice(0, 6);
      };

  return (
    <div className="food-page">
      {/* Header */}
      <Header
        userAddress={userAddress}
        cartCount={2}
        onMenuClick={() => console.log('menu')}
        onCartClick={() => console.log('cart')}
        onSearchClick={() => console.log('search')}
        onSearchChange={setSearchQuery}
      />

      {/* FOOD SECTION */}
      <FoodSection
        title="Popular Burgers"
        foods={getPopularFoods()}
        emoji="✨"
        onFoodClick={handleFoodClick}
        onAddFood={handleAddFood}
      />

      {/* OPEN RESTAURANTS */}
      <RestaurantsSection
        restaurants={restaurants}
        title="Open Restaurants"
        // onRestaurantClick={handleRestaurantClick}
      />

    </div>
  );
};

export default FoodPage;
