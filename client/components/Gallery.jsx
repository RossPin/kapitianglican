import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const pictures = [
  { image: 'images/gallery/sample1.jpg', caption: 'Sample caption about photo 1' },
  { image: 'images/gallery/sample2.jpg', caption: 'Sample caption about photo 2' },
  { image: 'images/gallery/sample3.jpg', caption: 'Sample caption about photo 3' },
  { image: 'images/gallery/sample4.jpg', caption: 'Sample caption about photo 4' },
  { image: 'images/gallery/sample5.jpg', caption: 'Sample caption about photo 5' },
  { image: 'images/gallery/sample6.jpg', caption: 'Sample caption about photo 6' },
  { image: 'images/gallery/sample7.jpg', caption: 'Sample caption about photo 7' },
  { image: 'images/gallery/sample8.jpg', caption: 'Sample caption about photo 8 ' },
  { image: 'images/gallery/sample9.jpg', caption: 'Sample caption about photo 9' },
  { image: 'images/gallery/sample10.jpg', caption: 'Sample caption about photo 10' }
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
