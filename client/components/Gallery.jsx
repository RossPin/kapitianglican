import React from 'react'

const pictures = [
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' },
  { image: 'images/placeholder.jpeg', caption: 'Sample' }
]

class Gallery extends React.Component {
  render () {
    return (
      <div className='gallery'>
        <div className='content'>
          <h1>Gallery</h1>
          {pictures.map(picture => (
            <div className='tile'>
              <img src={picture.image} />
              <h4>{picture.caption}</h4>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery
