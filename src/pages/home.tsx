import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoriesCarousel from '../components/CategoriesCarousel';
import RestaurantsSection from '../components/RestaurantsSection';
import FooterNav from '../components/FooterNav';
import './home.css';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  delivery: string;
  time: string;
  image: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
}

type FooterTab = 'shop' | 'food' | 'instamart' | 'cart';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('123 Oak Street');
  const [activeFooterTab, setActiveFooterTab] = useState<FooterTab>('food');

  // Data
  const categories: Category[] = [
    {
      id: 'all',
      label: 'All',
      icon: '/images/all-foods-i.png',
      description: 'Explore all',
    },
    {
      id: 'burger',
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
      id: 'snacks',
      label: 'Snacks',
      icon: '/images/burger-i.png',
      description: 'Gourmet snacks',
    },
  ];

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Restaurant Name',
      cuisine: 'Burger · Chicken · Riche · Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 Min',
      image: '/images/restro-1.png',
    },
    {
      id: 2,
      name: 'Restaurant Name',
      cuisine: 'Burger · Chicken · Riche · Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 Min',
      image: '/images/restro-2.png',
    },
    {
      id: 3,
      name: 'Restaurant Name',
      cuisine: 'Burger · Chicken · Riche · Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 Min',
      image: '/images/restro-1.png',
    },
    {
      id: 4,
      name: 'Restaurant Name',
      cuisine: 'Burger · Chicken · Riche · Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 Min',
      image: '/images/restro-2.png',
    },
  ];

  // ============================================
  // Header Callbacks
  // ============================================

  const handleMenuClick = () => {
    console.log('Menu clicked');
    // Open sidebar
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
    // Open cart
  };

  const handleSearchClick = () => {
    console.log('Search clicked');
    // Open search modal
  };

  const handleHeaderSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // ============================================
  // Component Callbacks
  // ============================================

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log('Category selected:', categoryId);
  };

  const handleRestaurantClick = (restaurantId: number) => {
    console.log('Restaurant clicked:', restaurantId);
    // Navigate to restaurant details page
    // navigate(`/restaurant/${restaurantId}`);
  };

  const handleFooterTabChange = (tab: FooterTab) => {
    setActiveFooterTab(tab);
    console.log('Footer tab changed:', tab);
  };

  // ============================================
  // Render
  // ============================================

  return (
    <div className="home">
      {/* Header Component */}
      <Header
        userAddress={userAddress}
        cartCount={2}
        onMenuClick={handleMenuClick}
        onCartClick={handleCartClick}
        onSearchClick={handleSearchClick}
        onSearchChange={handleHeaderSearchChange}
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

      {/* Restaurants Section Component */}
      <RestaurantsSection
        restaurants={restaurants}
        title="Open Restaurants"
        onRestaurantClick={handleRestaurantClick}
      />

      {/* Footer Navigation Component */}
      <FooterNav
        activeTab={activeFooterTab}
        onTabChange={handleFooterTabChange}
      />
    </div>
  );
};

export default Home;
