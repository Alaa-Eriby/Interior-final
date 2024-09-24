import React, { useState } from 'react';
import useStore from '../store/useStore'; 

const ProductCard = ({ product }) => {
  const { addToCart, getQuantityInCart, cartMessage, setCartMessage, clearCartMessage } = useStore(); 
  const [showMessage, setShowMessage] = useState(false);

 
  const handleAddToCart = (product) => {
    addToCart(product); 
    setCartMessage(`Added 1 ${product.title} to the cart`); 
    setShowMessage(true); 
    setTimeout(() => {
      setShowMessage(false); 
      clearCartMessage();
    }, 3000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button> 
      {getQuantityInCart(product.id) > 0 && (
        <div className="cart-quantity">
          {getQuantityInCart(product.id)}
        </div>
      )}
      {showMessage && cartMessage && (
        <div className="cart-message">
          {cartMessage}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
