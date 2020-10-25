import React from 'react';
import { Slide } from 'react-slideshow-image';
const slideImages = [
  'images/gallery/sample1.jpg',
  'images/gallery/sample2.jpg',
  'images/gallery/sample3.jpg'
];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow