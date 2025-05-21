import React from 'react';

const Logo = ({ className, white }) => {
  return (
    <div className={`flex items-center ml-4 ${className}`}>
      <img
        src="/img/sedap-logo.png"
        width="105"
        alt="Logo Sedap"
        className="mr-2"
      />
    </div>
  );
};

export default Logo;
