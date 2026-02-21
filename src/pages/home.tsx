import React, { useState, useEffect, useRef } from 'react';
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
import { foodProducts } from '../data/foodProduct';
import './styles/home.css';
import MockCarousel from '../components/MockCarousel';
import MockCarousel2 from '../components/MockCarousel2';
import MockCarousel3 from '../components/MockCarousel3';
import MockCarousel4 from '../components/MockCarousel4';
import MockCarousel5 from '../components/MockCarousel5';
import FoodSection from '../components/FoodSection';





type FooterTab = 'shop' | 'food' | 'instamart' | 'cart';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState(() => {
    return localStorage.getItem("selectedLocation") || "Location";
  });


  const [activeFooterTab, setActiveFooterTab] = useState<FooterTab>('food');
  const navigate = useNavigate();


  const hasNavigatedRef = React.useRef(false);
  useEffect(() => {
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);

// ref to FoodSection container so we can scroll to it
  const foodSectionRef = useRef<HTMLDivElement | null>(null);

 // Functions copied/adapted from FoodPage
const getCategoryTitle = () => {
    if (!selectedCategory || selectedCategory === 'all') return 'Popular';
    return `Popular ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`;
  };

  const getPopularFoods = () => {
    if (selectedCategory === 'all') {
      return foodProducts.filter(food => food.tags?.includes('popular')).slice(0, 6);
    }
    return foodProducts
      .filter(food => food.category === selectedCategory)
      .slice(0, 6);
  };

  const handleFoodClick = (foodId: string) => {
    const food = foodProducts.find(f => f.id === foodId);
    navigate('/food-details', { state: { foodItem: food } });
  };
const handleAddFood = (foodId: string) => {
    const food = foodProducts.find(f => f.id === foodId);
    console.log('Added to cart:', food);
    // implement add-to-cart logic
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


  // Category select: set state (no navigation),
  // then scroll food section into view
  // ===========================================
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log('Category selected:', categoryId);

    if (categoryId === 'all') {
      // optional: collapse/hide FoodSection if you want
      // or just show popular items
      return;
    }

    // scroll food section into view after state update
    // requestAnimationFrame helps after DOM updates
    requestAnimationFrame(() => {
      foodSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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



      <div className="scrollable">
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

                {/* --- NEW: FoodSection inserted above Open Restaurants --- */}
        <div ref={foodSectionRef}>
          <FoodSection
            title={getCategoryTitle()}
            foods={getPopularFoods()}
            onFoodClick={handleFoodClick}
            onAddFood={handleAddFood}
          />
        </div>


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
