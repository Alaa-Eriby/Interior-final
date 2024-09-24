import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import '../CartMenu/CartMenu.css'; 

const CartMenu = ({ onClose }) => {
  const navigate = useNavigate();
  const cart = useStore((state) => state.cart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

 
  const goToCheckout = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    document.body.classList.add('cart-open');

   
    return () => {
      document.body.classList.remove('cart-open');
    };
  }, []);

  return (
    <div className="cart-lightbox">
      <div className="cart-overlay" onClick={onClose}></div> 
      <div className="cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
  
        <div className="cart-items-container">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <p>{item.title}</p>
                <p>{item.quantity} x {item.price}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
  
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className='sub'>
            <h1>Subtotal </h1>
            <h3>{total}</h3>
          </div>
          <div>
          <button className="go-to-cart-button" onClick={goToCheckout}>Cart</button>
          </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default CartMenu;
