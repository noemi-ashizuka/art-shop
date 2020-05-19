import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-artwork.styles.scss';

const CollectionArtwork = ({ id, name, price, imageUrl }) => (
  <div className='collection-artwork'>
    <div
      className='image'
      style= {{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>
    <CustomButton inverted> Add to Cart</CustomButton>

  
  </div>
)

export default CollectionArtwork;