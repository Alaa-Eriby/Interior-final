import React from 'react';
import { useCartStore } from '../store/useStore'; 

const CartButton = () => {
  const { toggleCart } = useCartStore();

  return (
    <button onClick={toggleCart} className="cart-btn">
      Open Cart
    </button>
  );
};

export default CartButton;
