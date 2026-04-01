import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RestaurantDetailsCard from '../components/RestaurantDetailsCard';
import Header from '../components/Header';
// import AddToCartBar from '../components/AddToCartBar';
import { Restaurant } from '../types';
import './styles/RestaurantDetailsPage.css';
import CategoriesCarousel from '../components/CategoriesCarousel';
import { keywords } from '../data/keywords';
// import { categories } from '../data/category';
// import { foodProducts } from '../data/foodProduct';

import { Category } from '../types';
import { getCategories } from "../services/categoryService";

import { getProducts } from '../services/productService';
import { mapProductForUI } from '../utils/mapProduct';
import { UIFoodProduct } from '../types';

import FoodSection from '../components/FoodSection';

const RestaurantDetailsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Item = location.state?.Item as Restaurant | undefined;
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<UIFoodProduct[]>([]);

  //   const [quantity, setQuantity] = useState(1);
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
}, []);
  const handleBack = () => navigate(-1);
  const [selectedCategory, setSelectedCategory] = useState<number>(0); // 0 = all
  //   const handleFavorite = () => console.log('Favorited:', Item?.name);
  //   const handleSizeSelect = (size: string) => console.log('Size:', size);

  //   const handleAddToCart = () => {
  //     console.log('Added to cart:', {
  //       ...Item,
  //       quantity,
  //     });
  //   };

  const handleCategorySelect = (categoryId: number) => {
  setSelectedCategory(categoryId);
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



  if (!Item) {
    return (
      <div>
        <Header onBackClick={handleBack} title="Food Details" />
        <div>No food item selected</div>
      </div>
    );
  }

  const getFoods = () => {
  if (!Item) return [];

  return products.filter((p) => {
    const matchRestaurant = p.restaurant === Item.name;

    if (selectedCategory === 0) {
      return matchRestaurant;
    }

    return matchRestaurant && p.category_id === selectedCategory;
  });
};
const foods = getFoods();

  const getCategoryCount = () => {
  return getFoods().length;
};


 const getCategoryTitle = () => {
  if (selectedCategory === 0) return "All";

  const name = categories.find(c => c.id === selectedCategory)?.name;

  return name ? `${name} (${getCategoryCount()})` : "Food";
};
  return (
    <div className="food-details-page">
      <Header
        variant="restaurant"
        onBackClick={handleBack}
        title="Restaurant View"
        cartCount={0}
      />

      <div className="restaurant-detail-layout">

      <div className="restaurant-card-column">
      <RestaurantDetailsCard
        Item={Item}
      />
      </div>

      <div className="right-side-wrapper">
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
        foods={foods}
        onFoodClick={handleFoodClick}
        onAddFood={handleAddFood}
      />
      </div>


      {/* <AddToCartBar
        price={foodItem.price}
        quantity={quantity}
        onIncrease={() => setQuantity(q => q + 1)}
        onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
        onAddToCart={handleAddToCart}
      /> */}
    </div>
    </div>
  );
};

export default RestaurantDetailsPage;



