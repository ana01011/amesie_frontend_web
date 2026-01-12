import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RestaurantDetailsCard from '../components/RestaurantDetailsCard';
import Header from '../components/Header';
// import AddToCartBar from '../components/AddToCartBar';
import { Restaurant } from '../types';
import './RestaurantDetailsPage.css';
import CategoriesCarousel from '../components/CategoriesCarousel';
import { keywords } from '../data/keywords';
import { categories } from '../data/category';
import { foodProducts } from '../data/foodProduct';
import FoodSection from '../components/FoodSection';

const RestaurantDetailsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Item = location.state?.Item as Restaurant | undefined;

  //   const [quantity, setQuantity] = useState(1);

  const handleBack = () => navigate(-1);
  const [selectedCategory, setSelectedCategory] = useState<string>('burger');
  //   const handleFavorite = () => console.log('Favorited:', Item?.name);
  //   const handleSizeSelect = (size: string) => console.log('Size:', size);

  //   const handleAddToCart = () => {
  //     console.log('Added to cart:', {
  //       ...Item,
  //       quantity,
  //     });
  //   };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log('Category selected:', categoryId);
    // navigate('/foodpage', { 
    //   state: { selectedCategory: categoryId }  
    // });
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



  if (!Item) {
    return (
      <div>
        <Header onBackClick={handleBack} title="Food Details" />
        <div>No food item selected</div>
      </div>
    );
  }

  const getPopularFoods = () => {
    if (selectedCategory === 'all') {
      return foodProducts.filter(food => food.tags.includes('popular')).slice(0, 6);
    }
    return foodProducts
      .filter(food => food.category === selectedCategory && food.restaurant === Item.name)
      .slice(0, );
  };

  const getCategoryCount = () => {
    
  if (selectedCategory === 'all') {
    return foodProducts.filter(food => 
      food.restaurant === Item.name
    ).length; // ← NO slice()
  }
  return foodProducts.filter(food => 
    food.category === selectedCategory && 
    food.restaurant === Item.name
  ).length; // ← NO slice()
};


  const getCategoryTitle = () => {
    const count = getCategoryCount();
    return `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}  (${count})`;
  };

  return (
    <div className="food-details-page">
      <Header
        variant="restaurant"
        onBackClick={handleBack}
        title="Restaurant View"
        cartCount={0}
      />

      <RestaurantDetailsCard
        Item={Item}
      />

      {/* Categories Carousel Component */}
      <CategoriesCarousel
        variant="restro-category"
        keywords={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}  // ← NEW HANDLER
      />

      {/* FOOD SECTION */}
      <FoodSection
        title={getCategoryTitle()}
        foods={getPopularFoods()}
        onFoodClick={handleFoodClick}
        onAddFood={handleAddFood}
      />


      {/* <AddToCartBar
        price={foodItem.price}
        quantity={quantity}
        onIncrease={() => setQuantity(q => q + 1)}
        onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
        onAddToCart={handleAddToCart}
      /> */}
    </div>
  );
};

export default RestaurantDetailsPage;



