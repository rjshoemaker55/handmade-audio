import React from 'react';

import BrandListing from './BrandListing';
const brands = require('../brandList.json');

console.log(brands);

const LandingBrandsSection = () => {
  return (
    <div id='brands-section-wrapper'>
      <div id='brands-logo-container'>
        {brands.brands.map(brand => {
          return (
            <BrandListing
              key={brand.id}
              brand={brand}
              name={brand.name}
              logoUrl={brand.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingBrandsSection;
