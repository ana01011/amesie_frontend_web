import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/RestaurantDetailsCard.css';
// import { FoodProduct } from '../types';
// import { useState } from 'react'; 
import {
    ClockIcon, StarIcon, FreeDeliveryIcon,
    
} from '../icons';
import { Restaurant } from '../types';

interface RestaurantDetailsCardProps {
    Item?: Restaurant;
}

const RestaurantDetailsCard: React.FC<RestaurantDetailsCardProps> = ({
    Item,
}) => {
    const location = useLocation();
    const stateRestaurantItem = location.state?.Item as Restaurant | undefined;
    const item = Item || stateRestaurantItem;

    if (!item) {
        return <div>No restaurant item selected</div>;
    }
    // const [isFavorited, setIsFavorited] = useState(false);
    // const [selectedSize, setSelectedSize] = useState('');

    // INLINE ICONS
    // Your HeartIcon is CORRECT:
    // const getIngredientIcon = (ingredient: string): React.FC<any> => {
    //     const icons: Record<string, React.FC<any>> = {
    //         salt: SaltIcon,
    //         chicken: ChickenIcon,
    //         garlic: GarlicIcon,
    //         veg: VegIcon,
    //     };
    //     return icons[ingredient] || SaltIcon; // Default fallback
    // };



    return (
        <div className="restro-details-card">
            <div className='restro-details-card__container'>



            {/* Image + Favorite */}
            <div className="restro-details-card__header">
                <div className='restro-details-card__image__wrapper'>
                <img
                    src={item.image}
                    alt={item.name}
                    className="restro-details-card__image"
                />
                </div>
                {/* <button
                    type="button"
                    className={`restro-details-card__favorite ${isFavorited ? 'favorited' : ''}`}
                    onClick={() => {
                        setIsFavorited(prev => !prev);
                        onFavorite?.();
                    }}
                    title={isFavorited ? "Remove from favorites" : "Add to favorites"}
                >
                    <HeartIcon isFavorited={isFavorited} />
                </button> */}



            </div>



            {/* Restaurant - FIXED: Generate logo from restaurant name */}
            {/* Restaurant Name - PILL ONLY */}
            {/* {item.restaurant && (
                <div className="restro-details-card__restaurant">
                    <span className="restaurant-pill">{item.restaurant}</span>
                </div>
            )} */}



            {/* Name */}
            <h1 className="restro-details-card__name">{item.name}</h1>

            {/* Description - Only if exists */}
            {item.description && (
                <p className="restro-details-card__description">{item.description}</p>
            )}

            {/* Rating + Delivery - Only if exists */}
            {(item.rating || item.deliveryTime) && (
                <div className="restro-details-card__meta">
                    {item.rating !== undefined && (
                        <div className="restro-details-card__rating">
                            <StarIcon />
                            <span>{item.rating}</span>
                        </div>
                    )}

                    {item.deliveryFee !== undefined && (
                        <div className="restro-details-card__delivery">
                            <FreeDeliveryIcon />
                            <span>
                                {item.deliveryFee === 0 ? 'Free' : `₹${item.deliveryFee}`}
                            </span>
                        </div>
                    )}

                    {item.deliveryTime && (
                        <div className="restro-details-card__delivery">
                            <ClockIcon />
                            <span>{item.deliveryTime}</span>
                        </div>
                    )}
                </div>
            )}

            {/* Sizes - Only if exists */}
            {/* {item.sizes && item.sizes.length > 0 && (
                <div className="food-details-card__sizes">
                    <span className="restro-details-card__label">Size:</span>
                    {item.sizes.map((size, index) => (
                        <button
                            key={index}
                            className={`restro-details-card__size-btn ${selectedSize === size ? 'selected' : ''}`}  // ← ADD selected class logic
                            onClick={() => {
                                setSelectedSize(size);       // ADD: Track selection
                                onSizeSelect?.(size);        // Keep parent callback
                            }}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            )} */}

            {/* Ingredients - Only if exists */}
            {/* {item.ingredients && item.ingredients.length > 0 && (
                <div className="restro-details-card__ingredients">
                    <span className="restro-details-card__label">INGREDIENTS</span>
                    <div className="restro-details-card__ingredient-icons">
                        {item.ingredients.map((ingredient, index) => {
                            const IconComponent = getIngredientIcon(ingredient);
                            return (
                                <IconComponent
                                    key={index}
                                    className="restro-details-card__ingredient-icon"
                                />
                            );
                        })}
                    </div>
                </div>
            )} */}
            </div>
        </div>
    );
};

export default RestaurantDetailsCard;
