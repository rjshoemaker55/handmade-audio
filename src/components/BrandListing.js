import React from 'react';

const BrandListing = props => {
  let brand = props.brand;

  return (
    <div className='brand-listing-wrapper'>
      <img className='brand-listing-logo' src={brand.logoUrl} />
      <div className='brand-listing-text'>{brand.name}</div>
    </div>
  );
};

export default BrandListing;
