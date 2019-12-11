import React from 'react';

const brands = require('../brandList.json');

console.log(brands);

const LandingBrandsSection = () => {
  return (
    <div id='brands-section-wrapper'>
      <div id='brands-logo-container'>
        {brands.brands.map(brand => {
          return <div key={brand.id}>{brand.name}</div>;
        })}
      </div>
    </div>
  );
};

export default LandingBrandsSection;
