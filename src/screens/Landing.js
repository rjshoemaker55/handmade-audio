import React from 'react';

import Navbar from '../components/Navbar';
import LandingTopLeftSection from '../components/LandingTopLeftSection';
import LandingTopRightSection from '../components/LandingTopRightSection';
import { isExpressionWrapper } from '@babel/types';
const Landing = () => {
  return (
    <>
      <Navbar />
      <div id='landing-bg-image'>
        <div className='page-wrapper'>
          <div id='landing-headline'>High-end audio solutions.</div>
          <div className='row'>
            <LandingTopLeftSection />
            <LandingTopRightSection />
          </div>
        </div>
      </div>
      <div id='footer'></div>
    </>
  );
};

export default Landing;
