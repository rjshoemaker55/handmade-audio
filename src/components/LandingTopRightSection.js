import React from 'react';

const LandingTopRightSection = () => {
  return (
    <div id='tr-section-wrapper'>
      <div className='top-section-header'>Contact...</div>
      <div id='tr-section-body'>
        <div className='contact-row'>
          <i className='fas fa-phone'></i>
          <span className='contact-text'>555-555-5555</span>
        </div>
        <div className='contact-row'>
          <i className='fas fa-envelope'></i>
          <span className='contact-text'>rjshoemaker55@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default LandingTopRightSection;
