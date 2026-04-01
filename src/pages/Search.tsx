import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoriesCarousel from '../components/CategoriesCarousel';
import SuggestedRestaurantSection from '../components/SuggestedRestaurantSection';
import FoodSection from '../components/FoodSection';
import { getProducts } from '../services/productService';
import { mapProductForUI } from '../utils/mapProduct';
import { UIFoodProduct } from '../types';
import { useNavigate } from 'react-router-dom';
// everywhere
import { Restaurant } from '../types';
import { restaurants } from '../data/restaurants';
import { Category } from '../types';
import { getCategories } from "../services/categoryService";
import { keywords } from '../data/keywords';
import { locations } from '../data/location';
import './styles/Search.css';





const Search: React.FC = () => {
  const location = useLocation();
  const state = location.state as {
    query?: string;
    selectedLocation?: string;
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  useEffect(() => {
    if (state?.query) {
      handleSearch(state.query);
    }
  }, []);
  const [products, setProducts] = useState<UIFoodProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState(state?.query ?? '');
  const [searchActive, setSearchActive] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number>(9);
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isSearching = searchQuery.trim().length > 0;
  const [selectedLocation, setSelectedLocation] = useState(() => {
    return localStorage.getItem("selectedLocation") || "";
  });
  useEffect(() => {
  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.map(mapProductForUI));
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  loadProducts();
}, []);
  useEffect(() => {
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);

  const getCategory = () => {
    if (!searchQuery.trim()) return categories;
    const filteredKeywords = categories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredKeywords);
    return filteredKeywords;
    // .filter(category => category.super_category === selectedSupCategory);
  };

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    loadCategories();
  }, []);

  const navigate = useNavigate();
  const [showLocationModal, setShowLocationModal] = useState(false);

  // const searchActive = state?.searchActive ?? false;



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
    setSearchQuery(query);
    handleSearch(query);
  };


  // ============================================
  // Search Logic
  // ============================================
  const suggestedRestaurants = restaurants.filter(r =>
    r.tags?.includes('suggested')
  );

  // In Search.tsx - Add this function

  const handleKeywordSelect = (keywordId: number) => {
    setSelectedCategory(keywordId);

    const matchingCategory = categories.find(c => c.id === keywordId);

    if (matchingCategory) {
      // If keyword is also a category → navigate
      navigate('/foodpage', {
        state: { selectedCategory: keywordId }
      });
    } else {
      // If keyword only → search using category/keyword name
      const keyword = keywords.find(k => k.id === keywordId);

      if (keyword) {
        handleSearch(keyword.name);  // pass name instead of id
      }
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

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      handleSearch(category.name);
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

 const handleFoodClick = (foodId: number) => {
  const food = products.find(f => f.id === foodId);
  if (!food) return;

  navigate('/food-details', { state: { foodItem: food } });
};

  const handleAddFood = (foodId: number) => {
  const food = products.find(f => f.id === foodId);
  console.log('Added to cart:', food);
};

  // ============================================
  // Filter Popular Foods by Category
  // ============================================

 const getPopularFoods = () => {
  if (selectedCategory === 0) {
    return products.slice(0, 6);
  }

  return products
    .filter(p => p.category_id === selectedCategory)
    .slice(0, 6);
};

const getCategoryName = (id: number) =>
  categories.find(c => c.id === id)?.name || "";

  const getSearchFoods = () => {
  if (!searchQuery.trim()) return [];

  const q = searchQuery.toLowerCase();

  // 1. name
  let results = products.filter(p =>
    p.name.toLowerCase().includes(q)
  );
  if (results.length) return results;

  // 2. category
  results = products.filter(p =>
  getCategoryName(p.category_id).toLowerCase().includes(q)
);
  if (results.length) return results;

  // 3. ingredients / tags
  return products.filter(p =>
    p.ingredients?.some(i => i.toLowerCase().includes(q))
  );
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
        locationValue={selectedLocation}
        locations={locations}
        onLocationSelect={(loc) => setSelectedLocation(loc)}
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
        keywords={getCategory()}
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
          onRestaurantClick={(restaurant) => handleRestaurantClick(restaurant)}
        />

        {/* RIGHT COLUMN - Food Section */}
        <FoodSection
          title={isSearching ? "Search Results" : "Popular Fast Food"}
          foods={isSearching ? getSearchFoods() : getPopularFoods()}
          onFoodClick={handleFoodClick}
          onAddFood={handleAddFood}
        />
      </div>
    </div>
  );

};

export default Search;
