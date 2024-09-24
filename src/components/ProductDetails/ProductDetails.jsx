
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store/useStore';
import './ProductDetails.css'; 

const ProductDetails = () => {
  const { id } = useParams();
  const { selectedProduct, fetchProductById, addToCart } = useStore();
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0) {
      addToCart({
        id: selectedProduct.id,
        title: selectedProduct.title,
        size: selectedSize,
        quantity,
        price: selectedProduct.price,
        image: selectedProduct.image,
      });
    } else {
      alert('Please select a valid size and quantity');
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (!selectedProduct) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details">
      <div className="breadcrumb">
        <span>Home {'>'} Shop {'>'} {selectedProduct.title}</span>
      </div>

      <div className="product-main">
        <div className="main-image">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>

        <div className="product-info">
          <h1>{selectedProduct.title}</h1>
          <p className="product-price">${selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>

          <div className="size-selection">
            <p> Size:</p>
            <div className="size-options">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
<div className="quantity-div">
          <div className="quantity-control">
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>

          <div className="add-to-cart">
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
          </div>
          <hr class="divider"></hr>
          <div className="sku-category-tags">
            <p>SKU: {selectedProduct.sku}</p>
            <p>Category: {selectedProduct.category}</p>
            <p>Tags: {selectedProduct.tags ? selectedProduct.tags.join(', ') : 'No tags available'}</p>
          </div>

          <div className="share-icons">
            <p>Share :</p>
            <img src="/images/facebook-icon.png" alt="Share on Facebook" />
            <img src="/images/linkedin-icon.png" alt="Share on LinkedIn" />
            <img src="/images/twitter-icon.png" alt="Share on Twitter" />
          </div>
        </div>
      </div>

      

      <div className="product-description">
      <hr class="divider"></hr>
        <h2>Description</h2>
        <p>{selectedProduct.fullDescription}</p>
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          <br />Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
