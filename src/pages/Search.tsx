import React, { useState } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoriesCarousel from '../components/CategoriesCarousel';
import SuggestedRestaurantSection from '../components/SuggestedRestaurantSection';
import FoodSection from '../components/FoodSection';
import { foodProducts } from '../data/foodProduct';
import { useNavigate } from 'react-router-dom';
// everywhere
import { Restaurant } from '../types';
import { restaurants } from '../data/restaurants';
import { Category } from '../types';
import { categories } from '../data/category';
import { Keyword } from '../types';
import { keywords } from '../data/keywords';
import './styles/Search.css';





const Search: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState<string>('Varanasi, UP');
  const navigate = useNavigate();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const location = useLocation();
  const state = location.state as { searchActive?: boolean };

  const [searchQuery, setSearchQuery] = useState('');
  const searchActive = state?.searchActive ?? false;

const locations = [
    'Varanasi, UP',
    'Lucknow, UP',
    'Delhi',
    'Bangalore'
  ];


  const defaultRestaurants: Restaurant[] = restaurants.slice(0, 4);


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
  const suggestedRestaurants = restaurants.filter(r =>
    r.tags?.includes('suggested')
  );

  // In Search.tsx - Add this function

  const handleKeywordSelect = (keywordId: string) => {
    setSelectedCategory(keywordId);
    console.log('Keyword selected:', keywordId);

    // SMART LOGIC: Check if keyword exists in categories
    const matchingCategory = categories.find(c => c.id === keywordId);

    if (matchingCategory) {
      // If keyword is ALSO a category, navigate to FoodPage with selectedCategory
      console.log('Keyword matches a category, passing to FoodPage:', keywordId);
      navigate('/foodpage', {
        state: { selectedCategory: keywordId }
      });
    } else {
      // If keyword is ONLY a keyword (not a category), just search but don't navigate
      // Trigger search without navigation
      handleSearch(keywordId);
      console.log('Keyword-only, searching:', keywordId);
    }
  };



  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();

      const results = restaurants.filter((restaurant) =>
        restaurant.cuisine.some((cuisine) =>
          cuisine.toLowerCase().includes(lowerQuery)
        ) ||

        restaurant.tags?.some((tag) =>
          tag.toLowerCase().includes(lowerQuery)
        )
      );

      setSearchResults(results);
      setIsLoading(false);
    }, 200);

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

 const getSearchFoods = () => {
  const lowerQuery = searchQuery.toLowerCase();
    console.log('🔍 Searching for:', lowerQuery);
  const results = foodProducts.filter(food => {
    const matches =
      food.category?.toLowerCase().includes(lowerQuery) ||
      food.tags?.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      food.name.toLowerCase().includes(lowerQuery) ||
      food.restaurant?.toLowerCase().includes(lowerQuery) ||
      // ✅ FIXED: NOW IN matches!
      food.ingredients?.some(ingredient => 
        ingredient.toLowerCase().includes(lowerQuery)
      );

    if (matches) {
      console.log('✅ MATCH:', food.name);
    }
    return matches;
  });

  console.log('Total results:', results.length);
  return results;
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
        cartCount={1}
        onBackClick={() => navigate(-1)}
        locationValue={userAddress}
        locations={locations}
        onLocationSelect={(loc) => setUserAddress(loc)}
        onSearchClick={() => navigate('/search')}
        onCartClick={() => navigate('/cart')}
      />


      {/* Hero Component */}
      <Hero
        greeting="Good Afternoon!"
        userName="Abc"
        searchQuery={searchQuery}
        onSearchChange={handleHeaderSearchChange}
        active={searchActive}
      />

      {/* Categories Carousel Component */}
      <CategoriesCarousel
        variant="keyword"
        keywords={keywords}
        selectedCategory={selectedCategory}
        onCategorySelect={handleKeywordSelect}  // ← NEW HANDLER
      />

      {/* Main Content Wrapper - GRID LAYOUT */}
      <div className="search-wrapper">
        {/* LEFT COLUMN - Restaurant Section */}
        <SuggestedRestaurantSection
          title={'Suggested Restaurants'}
          restaurants={searchResults.length ? searchResults : suggestedRestaurants}
          isLoading={isLoading}
          onRestaurantClick={(restaurant) => handleRestaurantClick(restaurant.id)}
        />

        {/* RIGHT COLUMN - Food Section */}
        <FoodSection
          title="Popular Fast Food"
          foods={getSearchFoods()}
          onFoodClick={handleFoodClick}
          onAddFood={handleAddFood}
        />
      </div>
    </div>
  );

};

export default Search;
