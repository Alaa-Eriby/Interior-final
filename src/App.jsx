
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContactPage from './components/ContactPage/ContactPage';
import ShopPage from './components/ShopPage/ShopPage';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import PageImage from './components/PageImage/PageImage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import styles from './App.module.css';
import useStore from './components/store/useStore';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();
  const setPage = useStore((state) => state.setPage);

  React.useEffect(() => {
    if (pathname === '/') {
      setPage('home'); 
    } else if (pathname === '/categories') {
      setPage('categories'); 
    } else if (pathname === '/ShopPage') {
      setPage('ShopPage');
    } else if (pathname === '/contact') {
      setPage('contact'); 
    }
  }, [pathname, setPage]);

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header>
          <Navbar />
          
        </header>
        <main>
          <PageImage />
          <PageWrapper>
            <Routes>
            <Route path="/" element={<Categories />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/shopPage" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<CheckoutPage />} /> 
            </Routes>
          </PageWrapper>
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
