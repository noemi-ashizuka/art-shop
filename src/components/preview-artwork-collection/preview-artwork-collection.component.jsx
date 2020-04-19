import React from 'react';
import CollectionArtwork from '../collection-artwork/collection-artwork.component';

import './preview-artwork-collection.styles.scss';

const PreviewArtwork = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.filter((item, index) => index < 4 )
        .map(({ id, ...otherItemProps}) => (
        <CollectionArtwork key={id} {...otherItemProps} />
        ))}
    </div>
  </div>

);

export default PreviewArtwork;