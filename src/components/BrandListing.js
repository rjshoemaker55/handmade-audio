import React from 'react';

const BrandListing = props => {
  let brand = props.brand;

  return (
    <a
      className='brand-listing-wrapper'
      href={brand.websiteUrl}
      target='_blank'
    >
      <img className='brand-listing-logo' src={brand.logoUrl} />
      <div className='brand-listing-text'>{brand.name}</div>
    </a>
  );
};

export default BrandListing;
