import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const pictures = [
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg',
  'images/placeholder.jpeg'
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
              <img src={picture} onClick={() => this.setState({ isOpen: true, photoIndex: i })} />
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={pictures[photoIndex]}
            nextSrc={pictures[(photoIndex + 1) % pictures.length]}
            prevSrc={pictures[(photoIndex + pictures.length - 1) % pictures.length]}
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
          />
        )}
      </div>
    )
  }
}

export default Gallery
