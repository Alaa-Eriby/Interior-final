import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import '../ShopPage/ShopPage.css';

const ShopPage = () => {
  const { products, setProducts, selectedCategory, addToCart } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
  
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [setProducts]);


  const filteredProducts = selectedCategory
    ? products.filter((product) => {
        if (selectedCategory === 'Dining') return product.category === "women's clothing";
        if (selectedCategory === 'Living') return product.category === "men's clothing";
        if (selectedCategory === 'Bedroom') return product.category === 'electronics';
        return false;
      })
    : products;

  const handleAddToCart = (product) => {
    addToCart(product);
  };


  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="shop">
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              onClick={() => handleImageClick(product.id)}
            />
            <div className="cart-button-container">
              <div
                className="cart-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </div>
            </div>
            <div className="productcard">
              <h3>{product.title}</h3>
              <p>${parseFloat(product.price).toFixed(2)}</p> 
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ShopPage;
