import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoriesCarousel from '../components/CategoriesCarousel';
import SuggestedRestaurantSection from '../components/SuggestedRestaurantSection';
import FoodSection from '../components/FoodSection';
import { foodProducts } from '../data/foodProduct';
import { useNavigate } from 'react-router-dom';

import './Search.css';



interface Restaurant {
  id: string;
  image: string;
  name: string;
  rating: number;
}


interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
}


const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState<string>('Varanasi, UP');
  const navigate = useNavigate();
  const [showLocationModal, setShowLocationModal] = useState(false);




  // ============================================
  // Data - Mock Restaurants
  // ============================================

  const mockRestaurants: Restaurant[] = [
    {
      id: '1',
      image: '/images/restro-1.png',
      name: 'Burger King',
      rating: 4.7,
    },
    {
      id: '2',
      image: '/images/restro-2.png',
      name: 'Pizza Hut',
      rating: 4.5,
    },
    {
      id: '3',
      image: '/images/restro-1.png',
      name: 'KFC',
      rating: 4.6,
    },
    {
      id: '4',
      image: '/images/restro-2.png',
      name: 'Subway',
      rating: 4.4,
    },
  ];

  const categories: Category[] = [
    {
      id: 'all',
      label: 'All',
      icon: '/images/all-foods-i.png',
      description: 'Explore all',
    },
    {
      id: 'burgers',
      label: 'Burger',
      icon: '/images/burger-i.png',
      description: 'Delicious burgers',
    },
    {
      id: 'pizza',
      label: 'Pizza',
      icon: '/images/pizza-i.png',
      description: 'Fresh pizzas',
    },
    {
      id: 'coffee',
      label: 'Coffee',
      icon: '/images/coffee-i.png',
      description: 'Premium coffee',
    },
    {
      id: 'snacks',
      label: 'Snacks',
      icon: '/images/food-i.png',
      description: 'Gourmet snacks',
    },
  ];

  const defaultRestaurants: Restaurant[] = mockRestaurants.slice(0, 4);


  // ============================================
  // Header Callbacks
  // ============================================

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
  };

  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  const handleHeaderSearchChange = (query: string) => {
    handleSearch(query);
  };


  // ============================================
  // Search Logic
  // ============================================

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const results = mockRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };


  // ============================================
  // Category Callbacks
  // ============================================

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'all') {
      handleSearch(categoryId);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  };


  // ============================================
  // Restaurant & Food Callbacks
  // ============================================

  const handleRestaurantClick = (restaurantId: string) => {
    console.log('Restaurant clicked:', restaurantId);
    // Navigate to restaurant details page
  };

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

  // ============================================
  // Filter Popular Foods by Category
  // ============================================

  const getPopularFoods = () => {
    if (selectedCategory === 'all') {
      return foodProducts.filter(food => food.tags.includes('popular')).slice(0, 6);
    }
    return foodProducts
      .filter(food => food.category === selectedCategory && food.tags.includes('popular'))
      .slice(0, 6);
  };


  // ============================================
  // Render
  // ============================================

  // Search.tsx - Updated JSX Structure

return (
  <div className="search-page">
    {/* Header Component */}
    <Header
  variant="search"
  locationValue= {userAddress}
  cartCount={1}
  onBackClick={() => navigate(-1)}
  onLocationClick={() => setShowLocationModal(true)}
  onSearchClick={() => navigate('/search')}
  onCartClick={() => navigate('/cart')}
/>


    {/* Hero Component */}
    <Hero
      greeting="Good Afternoon!"
      userName="Abc"
      searchQuery={searchQuery}
      onSearchChange={handleHeaderSearchChange}
    />

    {/* Categories Carousel Component */}
    <CategoriesCarousel
      categories={categories}
      selectedCategory={selectedCategory}
      onCategorySelect={handleCategorySelect}
    />

    {/* Main Content Wrapper - GRID LAYOUT */}
    <div className="search-wrapper">
      {/* LEFT COLUMN - Restaurant Section */}
      <SuggestedRestaurantSection
        title={searchQuery.trim() !== '' ? "Suggested Restaurants" : "Suggested Restaurants"}
        restaurants={searchQuery.trim() !== '' ? searchResults : defaultRestaurants}
        isLoading={isLoading}
        onRestaurantClick={(restaurant) => handleRestaurantClick(restaurant.id)}
      />

      {/* RIGHT COLUMN - Food Section */}
      <FoodSection
        title="Popular Fast Food"
        foods={getPopularFoods()}
        emoji="✨"
        onFoodClick={handleFoodClick}
        onAddFood={handleAddFood}
      />
    </div>
  </div>
);

};

export default Search;
