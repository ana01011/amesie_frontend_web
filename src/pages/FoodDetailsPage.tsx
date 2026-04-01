import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FoodDetailsCard from '../components/FoodDetailsCard';
import Header from '../components/Header';
import AddToCartBar from '../components/AddToCartBar';
import './styles/FoodDetailsPage.css';
import { mapProductForUI } from '../utils/mapProduct';
import { UIFoodProduct, FoodProduct } from '../types';

const FoodDetailsPage: React.FC = () => {
   const navigate = useNavigate();
const handleBack = () => navigate(-1);
 useEffect(() => {
  window.scrollTo(0, 0);
}, []); 
  const location = useLocation();
  const rawFoodItem = location.state?.foodItem as FoodProduct | undefined;

const foodItem: UIFoodProduct | undefined = rawFoodItem
  ? mapProductForUI(rawFoodItem)
  : undefined;

  const [quantity, setQuantity] = useState(1);

 
  const handleFavorite = () => console.log('Favorited:', foodItem?.name);
  const handleSizeSelect = (size: string) => console.log('Size:', size);

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      ...foodItem,
      quantity,
    });
  };

  if (!foodItem) {
    return (
      <div>
        <Header onBackClick={handleBack} title="Food Details" />
        <div>No food item selected</div>
      </div>
    );
  }

  return (
    <div className="food-details-page">
      <Header
        variant="details"
        onBackClick={handleBack}
        title="Details"
        cartCount={0}
      />
      <div className="foodCard">
        <FoodDetailsCard
          foodItem={foodItem}
          onFavorite={handleFavorite}
          onSizeSelect={handleSizeSelect}
        />


        <AddToCartBar
          price={foodItem.price}
          quantity={quantity}
          onIncrease={() => setQuantity(q => q + 1)}
          onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default FoodDetailsPage;


