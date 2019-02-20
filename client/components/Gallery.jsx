import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const pictures = [
  { image: 'images/placeholder.jpeg', caption: 'Sample 1' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 2' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 3' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 4' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 5' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 6' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 7' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 8 ' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 9' },
  { image: 'images/placeholder.jpeg', caption: 'Sample 10' }
]

class Gallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  render () {
    const { photoIndex, isOpen } = this.state
    return (
      <div className='gallery'>
        <div className='content'>
          <h1>Gallery</h1>
          {pictures.map((picture, i) => (
            <div className='tile' key={i}>
              <img src={picture.image} onClick={() => this.setState({ isOpen: true, photoIndex: i })} />
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={pictures[photoIndex].image}
            nextSrc={(photoIndex < pictures.length - 1) ? pictures[(photoIndex + 1) % pictures.length].image : undefined}
            prevSrc={(photoIndex > 0) ? pictures[(photoIndex + pictures.length - 1) % pictures.length].image : undefined}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + pictures.length - 1) % pictures.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % pictures.length
              })
            }
            imageCaption={pictures[photoIndex].caption}
          />
        )}
      </div>
    )
  }
}

export default Gallery
