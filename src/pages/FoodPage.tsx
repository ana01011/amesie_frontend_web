import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import RestaurantsSection from '../components/RestaurantsSection';
import './styles/FoodPage.css';
import { foodProducts } from '../data/foodProduct';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import FoodSection from '../components/FoodSection';
import { useLocation } from 'react-router-dom';
import { Restaurant } from '../types';
import { Category } from '../types';
import { getCategories } from "../services/categoryService";
const FoodPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
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
  const [searchQuery, setSearchQuery] = useState('');
  const [userAddress] = useState('123 Oak Street');

  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const state = location.state as any;

  const [selectedCategory, setSelectedCategory] = useState<number>(
    state?.selectedCategory || 0
  );

  useEffect(() => {
    if (state?.selectedCategory) {
      setSelectedCategory(state.selectedCategory);
    }
  }, [state]);

 const category = categories.find(cat => cat.id === selectedCategory);
 const name = category?.name;

 const getCategoryTitle = () => {
  if (!selectedCategory || selectedCategory === 0) return "Popular";

  const category = categories.find(cat => cat.id === selectedCategory);

  if (!category) return "Popular";

  const name = category.name;
    return `Popular ${name.charAt(0).toUpperCase() + name.slice(1)}`;
  };


  const getOpenRestaurants = () => {
    const category = categories.find(cat => cat.id === selectedCategory);
     const name = category?.name ?? "";
    if (selectedCategory === 0) {
      return restaurants.filter(r => r.isOpen).slice(0, 6);
    }

    return restaurants.filter((restaurant) => {
      const isOpen = restaurant.isOpen;
      const hasCuisine = restaurant.cuisine.some((cuisine) =>
        cuisine.toLowerCase().includes(name.toLowerCase())
      );
      return isOpen && hasCuisine;
    }).slice(0, 6);
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

  const getPopularFoods = () => {
    // if (selectedCategory === 'all') {
    //   return foodProducts.filter(food => food.tags.includes('popular')).slice(0, );
    // }
    return foodProducts
      .filter(food => food.category === selectedCategory)
      .slice(0, 6);
  };
  console.log(selectedCategory);
  return (

    <div className="food-page">
      {/* Header */}
      <Header
        variant="category"
        title={name}
        titleType="pill"
        cartCount={2}
        onBackClick={() => navigate(-1)}
        onTitleClick={() => setShowFilters(!showFilters)}
        onSearchClick={() => setShowSearch(true)}
        selectedCategory={selectedCategory}
        onCategorySelect={(cat) => { setSelectedCategory(cat); }}
        categories={categories}

      />


      {/* FOOD SECTION */}
      <FoodSection
        title={getCategoryTitle()}
        foods={getPopularFoods()}
        onFoodClick={handleFoodClick}
        onAddFood={handleAddFood}
      />

      {/* OPEN RESTAURANTS */}
      <RestaurantsSection
        title="Open Restaurants"
        restaurants={getOpenRestaurants()}
      />

    </div>
  );
};

export default FoodPage;
