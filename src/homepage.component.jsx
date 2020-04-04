import React from 'react';

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div classNam='content'>
          <h1 className='title'>POTTERY</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div classNam='content'>
          <h1 className='title'>JEWELRY</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div classNam='content'>
          <h1 className='title'>SCULPTURES</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div classNam='content'>
          <h1 className='title'>PAINTINGS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage;