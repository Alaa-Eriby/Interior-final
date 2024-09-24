import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import './Navbar.css';
import CartMenu from '../CartMenu/CartMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartMenuOpen, setCartMenuOpen] = useState(false);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };


  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  const toggleCartMenu = () => {
    setCartMenuOpen((prev) => !prev);
  };


  const handleShopClick = () => {
    setSelectedCategory(null);
    closeMobileMenu();
  };

 
  const handleLinkClick = (path) => {
    closeMobileMenu();
    navigate(path);
  };

  const handleGoToCart = () => {
    toggleCartMenu();
    navigate('/cart');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../../public/images/logo.png" alt="Furniro Logo" />
        Furniro
      </div>

      <ul className="nav-links">
        <li><Link to="/Categories" onClick={() => handleLinkClick('/Categories')}>Home</Link></li>
        <li><Link to="/ShopPage" onClick={() => { handleShopClick(); handleLinkClick('/ShopPage'); }}>Shop</Link></li>
        <div className='linkscontact'>
        <li><Link to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link></li>
        </div>
      </ul>

      <div className={`dropdown-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Categories" onClick={() => handleLinkClick('/Categories')}>Home</Link></li>
          <li><Link to="/ShopPage" onClick={() => handleLinkClick('/ShopPage')}>Shop</Link></li>
          
          <li><Link to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link></li>
         
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

  
      {!isCartMenuOpen && (
        <div className="cart-icon" onClick={toggleCartMenu}>
          <img src="../../../public/images/cart.png" alt="Cart" />
        </div>
      )}

      {isCartMenuOpen && (
        <CartMenu 
          onClose={toggleCartMenu}
          onGoToCart={handleGoToCart}
        />
      )}
    </nav>
  );
};

export default Navbar;

