import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoriesCarousel from '../components/CategoriesCarousel';
import RestaurantsSection from '../components/RestaurantsSection';
import FooterNav from '../components/FooterNav';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { Category } from '../types';
import { categories } from '../data/category';
import { locations } from '../data/location';
import './styles/home.css';
import MockCarousel from '../components/MockCarousel';
import MockCarousel2 from '../components/MockCarousel2';
import MockCarousel3 from '../components/MockCarousel3';
import MockCarousel4 from '../components/MockCarousel4';
import MockCarousel5 from '../components/MockCarousel5';





type FooterTab = 'shop' | 'food' | 'instamart' | 'cart';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
 const [selectedLocation, setSelectedLocation] = useState(() => {
  return localStorage.getItem("selectedLocation") || "Location";
});


  const [activeFooterTab, setActiveFooterTab] = useState<FooterTab>('food');
  const navigate = useNavigate();
  // Data
  // const locations = [
  //   'Varanasi, UP',
  //   'Lucknow, UP',
  //   'Delhi',
  //   'Bangalore'
  // ];

const hasNavigatedRef = React.useRef(false);
useEffect(() => {
  localStorage.setItem("selectedLocation", selectedLocation);
}, [selectedLocation]);



  // ============================================
  // Header Callbacks
  // ============================================
//  const handleHeroSearchClick = () => {
//   navigate('/search', {
//     state: {
//       searchActive: true,
//       selectedLocation: userAddress, //pass location
//     },
//   });
// };



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

  if (
    query.trim().length >= 1 &&
    !hasNavigatedRef.current
  ) {
    hasNavigatedRef.current = true;

    navigate('/search', {
  state: { query, selectedLocation: selectedLocation },
});

  }
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
        locationValue={selectedLocation}
        locations={locations}
        onLocationSelect={(loc) => setSelectedLocation(loc)}
        onMenuClick={() => navigate("/menu")}
        onSearchClick={() => console.log('Search')}
        onCartClick={() => console.log('Cart')}
      />

     

<div className ="scrollable">
      {/* Hero Component */}
      <Hero
        greeting="Good Afternoon!"
        userName="Abc"
        searchQuery={searchQuery}
        onSearchChange={handleHeaderSearchChange}
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
      <MockCarousel
        title="Mock Carousel 1"
        restaurants={getOpenRestaurants()}
      />
      <MockCarousel2
        title="Mock Carousel 2"
        restaurants={getOpenRestaurants()}
      />
      <MockCarousel3
        title="Mock Carousel 3"
        restaurants={getOpenRestaurants()}
      />
      <MockCarousel4
        title="Mock Carousel 4"
        restaurants={getOpenRestaurants()}
      />
       <MockCarousel5
        title="Mock Carousel 5"
        restaurants={getOpenRestaurants()}
      />
    </div>




      {/* Footer Navigation Component */}
      <FooterNav
        activeTab={activeFooterTab}
        onTabChange={handleFooterTabChange}
      />
    </div>
  );
};

export default Home;
