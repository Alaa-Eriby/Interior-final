import React from 'react';
import '../Footer/Footer.css'; 
import useStore from '../store/useStore'; 
import { Link } from "react-router-dom";

const Footer = () => {
    const { email, setEmail } = useStore(state => ({
        email: state.email,
        setEmail: state.setEmail
    }));
  
    const handleSubscribe = (e) => {
      e.preventDefault();
      console.log("Subscribed with email:", email);
    };
  
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="icon-container">
            <div className="icon-item">
              <img src="/images/Quality.png" className="features-img" alt="High Quality" />
              <div className='toptext'>
                <h3>High Quality</h3>
                <p>Crafted from top materials</p>
              </div>
            </div>
            <div className="icon-item">
              <img src="/images/Protection.png" className="features-img" alt="Warranty Protection" />
              <div>
                <h3>Warranty Protection</h3>
                <p>Over 2 years</p>
              </div>
            </div>
            <div className="icon-item">
              <img src="/images/Free.png" className="features-img" alt="Free Shipping" />
              <div>
                <h3>Free Shipping</h3>
                <p>Order over $150</p>
              </div>
            </div>
            <div className="icon-item">
              <img src="/images/Support.png" className="features-img" alt="24/7 Support" />
              <div>
                <h3>24/7 Support</h3>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div className="footer-section">
           
            <div className='funiro'><h3>Funiro.</h3></div>
            <address>
              400 University Drive Suite 200 Coral Gables,<br/> FL 33134 USA
            </address>
          </div>
  
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/ShopPage">Shop</Link></li>
              <li><Link to="/Categories">About</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
            </ul>
          </div>

          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <form onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2023 Funiro. All rights reserved</p>
        </div>
      </footer>
    );
};

export default Footer;
