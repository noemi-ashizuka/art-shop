import React from 'react';

import SHOP_DATA from './shop.data.js';

import PreviewArtwork from '../../components/preview-artwork-collection/preview-artwork-collection.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (<div className="shop-page">
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewArtwork key={id} {...otherCollectionProps} />
        ))
      }
    </div>);
  }
}

export default ShopPage;