import React from 'react';
import useStore from '../store/useStore';
import './CheckoutPage.css'; 
const CheckoutPage = () => {
  const cart = useStore((state) => state.cart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="order-summary-wrapper">
          <div className="first-part">
            <div className="summary-header">
              <div className="header-product">Product</div>
              <div className="header-price">Price</div>
              <div className="header-quantity">Quantity</div>
              <div className="header-subtotal">Subtotal</div>
            </div>

            {cart.map((item, index) => (
              <div className="summary-item" key={index}>
                <img src={item.image} alt={item.title} className="product-image" />
                <div className="item-details">
                  <p>{item.title}</p>
                  <p>Rs. {item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => increaseQuantity(item)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => item.quantity > 1 ? decreaseQuantity(item) : null}>-</button>
                </div>
                <div className="item-total">
                  <p>Rs. {(item.quantity * item.price).toFixed(2)}</p>
                  <button className="cancel-button" onClick={() => removeFromCart(item)}>
                    <img src="../../../public/images/trach.png" alt="trash" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-footer">
            <h1 className="checkout-title">Cart Totals</h1>
            <div className="summary-total">
              <p>Total</p>
              <p>Rs. {total.toFixed(2)}</p>
            </div>
            <button className="checkout-button">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;



