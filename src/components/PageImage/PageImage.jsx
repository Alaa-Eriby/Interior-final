import React from 'react';
import { useLocation } from 'react-router-dom';
import useStore from '../store/useStore'; 
import '../PageImage/PageImage.css'; 

const PageImage = () => {
  const { pathname } = useLocation();
  const pageKey = pathname === '/' ? 'home' : pathname.slice(1);


  const pageInfo = useStore((state) => state.pages[pageKey]);

  
  const hasBackgroundImage = pageInfo && pageInfo.backgroundImage;

  
  const isCategoriesPage = pathname === '/Categories';

  return (
    hasBackgroundImage ? (
      <div
        className="page-image-container"
        style={{
          backgroundImage: `url(${pageInfo.backgroundImage})`,
          backgroundColor: 'transparent', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
       
        {!isCategoriesPage && (
          <>
            <h1>{pageInfo.title}</h1>
            <p>{pathname}</p>
          </>
        )}
      </div>
    ) : null 
  );
};

export default PageImage;
