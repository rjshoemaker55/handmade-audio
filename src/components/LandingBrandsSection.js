import React from 'react';

import BrandListing from './BrandListing';
const brands = require('../brandList.json');

const LandingBrandsSection = () => {
  return (
    <div id='brands-section-wrapper'>
      <div id='brands-logo-container'>
        <div id='brands-logo-wrapper'>
          {brands.brands.map(brand => (
            <BrandListing
              key={brand.id}
              brand={brand}
              name={brand.name}
              logoUrl={brand.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingBrandsSection;
