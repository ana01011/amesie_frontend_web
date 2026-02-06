import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/FoodDetailsCard.css';
import { FoodProduct } from '../types';
import { useState } from 'react';  // ← ADD useState
import {
    HeartIcon, ClockIcon, StarIcon, FreeDeliveryIcon,
    SaltIcon, ChickenIcon, GarlicIcon, VegIcon, ChilliIcon,
} from '../icons';


interface FoodDetailsCardProps {
    foodItem?: FoodProduct;
    onFavorite?: () => void;
    onSizeSelect?: (size: string) => void;
}

const FoodDetailsCard: React.FC<FoodDetailsCardProps> = ({
    foodItem,
    onFavorite,
    onSizeSelect
}) => {
    const location = useLocation();
    const stateFoodItem = location.state?.foodItem as FoodProduct | undefined;
    const food = foodItem || stateFoodItem;

    if (!food) {
        return <div>No food item selected</div>;
    }
    const [isFavorited, setIsFavorited] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');

    // INLINE ICONS
    // Your HeartIcon is CORRECT:
    const getIngredientIcon = (ingredient: string): React.FC<any> => {
        const icons: Record<string, React.FC<any>> = {
            salt: SaltIcon,
            chicken: ChickenIcon,
            garlic: GarlicIcon,
            veg: VegIcon,
            chilli: ChilliIcon,
        };
        return icons[ingredient] || SaltIcon; // Default fallback
    };



    return (
        <div className="food-details-card">



            {/* Image + Favorite */}
            <div className="food-details-card__header">
                <img
                    src={food.image}
                    alt={food.name}
                    className="food-details-card__image"
                />
                <button
                    type="button"
                    className={`food-details-card__favorite ${isFavorited ? 'favorited' : ''}`}
                    onClick={() => {
                        setIsFavorited(prev => !prev);
                        onFavorite?.();
                    }}
                    title={isFavorited ? "Remove from favorites" : "Add to favorites"}
                >
                    <HeartIcon isFavorited={isFavorited} />
                </button>



            </div>



            {/* Restaurant - FIXED: Generate logo from restaurant name */}
            {/* Restaurant Name - PILL ONLY */}
            {food.restaurant && (
                <div className="food-details-card__restaurant">
                    <span className="restaurant-pill">{food.restaurant}</span>
                </div>
            )}



            {/* Name */}
            <h1 className="food-details-card__name">{food.name}</h1>

            {/* Description - Only if exists */}
            {food.description && (
                <p className="food-details-card__description">{food.description}</p>
            )}

            {/* Rating + Delivery - Only if exists */}
            {(food.rating || food.prepTime) && (
                <div className="food-details-card__meta">
                    {food.rating !== undefined && (
                        <div className="food-details-card__rating">
                            <StarIcon />
                            <span>{food.rating}</span>
                        </div>
                    )}

                    {food.deliveryFee !== undefined && (
                        <div className="food-details-card__delivery">
                            <FreeDeliveryIcon />
                            <span>
                                {food.deliveryFee === 0 ? 'Free' : `₹${food.deliveryFee}`}
                            </span>
                        </div>
                    )}

                    {food.prepTime && (
                        <div className="food-details-card__delivery">
                            <ClockIcon />
                            <span>{food.prepTime}</span>
                        </div>
                    )}
                </div>
            )}

            {/* Sizes - Only if exists */}
            {food.sizes && food.sizes.length > 0 && (
                <div className="food-details-card__sizes">
                    <span className="food-details-card__label">Size:</span>
                    {food.sizes.map((size, index) => (
                        <button
                            key={index}
                            className={`food-details-card__size-btn ${selectedSize === size ? 'selected' : ''}`}  // ← ADD selected class logic
                            onClick={() => {
                                setSelectedSize(size);       // ADD: Track selection
                                onSizeSelect?.(size);        // Keep parent callback
                            }}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            )}

            {/* Ingredients - Only if exists */}
            {food.ingredients && food.ingredients.length > 0 && (
                <div className="food-details-card__ingredients">
                    <span className="food-details-card__label">INGREDIENTS</span>
                    <div className="food-details-card__ingredient-icons">
                        {food.ingredients.map((ingredient, index) => {
                            const IconComponent = getIngredientIcon(ingredient);
                            return (
                                <div key={index} className="ingredient-circle">
                                    <IconComponent className="ingredient-icon" />
                                </div>
                            );
                        })}
                    </div>


                </div>
            )}
        </div>
    );
};

export default FoodDetailsCard;
