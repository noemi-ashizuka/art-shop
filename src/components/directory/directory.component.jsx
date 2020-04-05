import React from 'react';

import MenuItem from '../menu-items/menu-item.component.jsx';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'pottery',
          imageUrl: 'https://images.pexels.com/photos/3787752/pexels-photo-3787752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 1
        },
        {
          title: 'prints',
          imageUrl: 'https://images.pexels.com/photos/191429/pexels-photo-191429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 2
        },
        {
          title: 'sculpture',
          imageUrl: 'https://images.pexels.com/photos/39348/musician-trumpet-metal-snowman-39348.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          id: 3
        },
        {
          title: 'photography',
          imageUrl: 'https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'large',
          id: 4
        },
        {
          title: 'paintings',
          imageUrl: 'https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'large',
          id: 5
        }]
      }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))}
      </div>
    )
  }

}

export default Directory;