import React, { useRef, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import img1 from '../Images/mounting.jpg';
import img2 from '../Images/back1.jpg';
import img3 from '../Images/wall-1.jpg';

const images = [img1, img2, img3];

function Slideshow() {
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to the next slide
      slideRef.current.goNext();
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slide-container">
      <Slide ref={slideRef} images={images} duration={2000} transitionDuration={1000}>
        {images.map((each, index) => (
          <div key={index} className="each-slide h-screen w-full">
            <img className='h-screen w-full object-cover' src={each} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
