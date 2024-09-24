import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore'; 
import '../Categories/Categories.css';

const Categories = () => {
  const { setSelectedCategory, fetchCategories } = useStore(); 
  const navigate = useNavigate();

  const localCategories = [
    { name: 'Dining', img: '/images/Dining.png' },
    { name: 'Living', img: '/images/Living.png' },
    { name: 'Bedroom', img: '/images/Bedroom.png' }
  ];

  useEffect(() => {
    fetchCategories(); 
  }, [fetchCategories]);

  const handleClick = (category) => {
    setSelectedCategory(category.name); 
    navigate('/ShopPage', { state: { category: category.name } });
  };

  return (
    <>
    <div className='titel
    '><h1>categories</h1>
    </div>
    <div className="categories-container">
      {localCategories.map((category) => (
        <div className="categories-item" key={category.name} onClick={() => handleClick(category)}>
          <img src={category.img} alt={category.name} />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default Categories;
