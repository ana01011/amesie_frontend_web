import React from 'react';
import './styles/AddToCartBar.css';

interface AddToCartBarProps {
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onAddToCart: () => void;
}

const AddToCartBar: React.FC<AddToCartBarProps> = ({
  price,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  return (
    <div className="add-to-cart-bar">
  <div className="top-row">
    <div className="price">₹{price}</div>

    <div className="quantity-control">
      <button onClick={onDecrease}>−</button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  </div>

  <button className="add-to-cart-btn" onClick={onAddToCart}>
    ADD TO CART
  </button>
</div>

  );
};

export default AddToCartBar;
