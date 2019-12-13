import React from 'react';

import Navbar from '../components/Navbar';
import LandingSummarySection from '../components/LandingSummarySection';
import LandingContactSection from '../components/LandingContactSection';
import LandingBrandsSection from '../components/LandingBrandsSection';

const Landing = () => {
  return (
    <>
      <Navbar />
      <div id='landing-bg-image'>
        <div className='page-wrapper'>
          <div id='landing-headline'>High-end audio solutions.</div>
          <div className='row'>
            <LandingSummarySection />
            <LandingContactSection />
          </div>
        </div>
      </div>
      <div id='brands-header'>
        <div id='brands-header-text'>Brands we sell</div>
      </div>
      <div className='row'>
        <LandingBrandsSection />
      </div>
      <div id='footer'>
        Created by{' '}
        <a id='lunar-brand' href='http://www.rjshoemaker.com' target='_blank'>
          Lunar Digital Marketing
        </a>
      </div>
    </>
  );
};

export default Landing;
