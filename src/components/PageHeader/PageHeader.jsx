import React from 'react';
import '../PageHeader/PageHeader.css'; 

const PageHeader = ({ title, backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  return (
    <div style={headerStyle}>
      {title}
    </div>
  );
};

export default PageHeader;
