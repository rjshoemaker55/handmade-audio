import React from 'react';

const Navbar = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('nav-wrapper').style.top = '0';
    } else {
      document.getElementById('nav-wrapper').style.top = '-80px';
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div id='nav-wrapper'>
      <div id='brand-header'>Handmade Audio</div>
    </div>
  );
};

export default Navbar;
