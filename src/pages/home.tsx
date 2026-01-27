import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoriesCarousel from '../components/CategoriesCarousel';
import RestaurantsSection from '../components/RestaurantsSection';
import FooterNav from '../components/FooterNav';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { Category } from '../types';
import { categories } from '../data/category';
import './styles/home.css';





type FooterTab = 'shop' | 'food' | 'instamart' | 'cart';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('123 Oak Street');
  const [activeFooterTab, setActiveFooterTab] = useState<FooterTab>('food');
  const navigate = useNavigate();
  // Data
  const locations = [
    'Varanasi, UP',
    'Lucknow, UP',
    'Delhi',
    'Bangalore'
  ];




  // ============================================
  // Header Callbacks
  // ============================================
  const handleHeroSearchClick = () => {
  navigate('/search', { state: { searchActive: true } });
};


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
  const getOpenRestaurants = () =>
    restaurants.filter(r => r.isOpen).slice(0, 6);
  const openRestaurants = getOpenRestaurants();

  // console.log('Home getOpenRestaurants():', openRestaurants);
  // console.log('Home restaurants length:', openRestaurants.length);


  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log('Category selected:', categoryId);
     if (categoryId === 'all') return;
    navigate('/foodpage', {
      state: { selectedCategory: categoryId }  // ← Pass category here
    });
  };


  const handleRestaurantClick = (restaurantId: string) => {
    console.log('Restaurant clicked:', restaurantId);
    navigate(`/restaurant/${restaurantId}`);
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
        variant="home"
        cartCount={3}
        locationValue={userAddress}
        locations={locations}
        onLocationSelect={(loc) => setUserAddress(loc)}
        onMenuClick={() => navigate("/menu")}
        onSearchClick={() => console.log('Search')}
        onCartClick={() => console.log('Cart')}
      />



      {/* Hero Component */}
      <Hero
        greeting="Good Afternoon!"
        userName="Abc"
        searchQuery={searchQuery}
        onSearchChange={handleHeaderSearchChange}
        onSearchClick={handleHeroSearchClick}
        active={false}
      />

      {/* Categories Carousel Component */}
      <CategoriesCarousel
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      {/* Restaurants Section Component */}
      <RestaurantsSection
        title="Open Restaurants"
        restaurants={getOpenRestaurants()}
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
