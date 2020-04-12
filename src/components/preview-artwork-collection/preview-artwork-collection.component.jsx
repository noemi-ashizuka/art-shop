import React from 'react';

import './preview-artwork-collection.styles.scss';

const PreviewArtwork = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'></div>
    {
      items.filter((item, index) => index < 4 )
      .map((item) => (
      <div key={item.id}>{item.name}</div>
      ))
    }
  </div>
)

export default PreviewArtwork