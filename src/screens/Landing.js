import React from 'react';

import Navbar from '../components/Navbar';
import LandingTopLeftSection from '../components/LandingTopLeftSection';
import LandingTopRightSection from '../components/LandingTopRightSection';
const Landing = () => {
  return (
    <>
      <div id='landing-headline'>
        <Navbar />
        <div id='row-1'>
          <LandingTopLeftSection />
          <LandingTopRightSection />
        </div>
      </div>
    </>
  );
};

export default Landing;
