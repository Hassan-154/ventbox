import React, { useState, useEffect } from 'react';
import wall1 from '../Images/wall-1.jpg';
import wall2 from '../Images/img.png';
import wall3 from '../Images/back1.jpg';
import { useInView } from 'react-intersection-observer';

function Section2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const images = [wall1, wall2, wall3];

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);

      // Function to change the image every 2 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);

      return () => {
        clearInterval(interval);
        setIsInView(false);
      };
    }
  }, [inView]);

  useEffect(() => {
    console.log(isInView ? `Picture ${currentIndex + 1} is in view` : 'View is off');
  }, [isInView, currentIndex]);

  return (
    <div className='' ref={ref}>
      <div className="h-screen w-full">
        <img src={images[currentIndex]} alt="" className="h-screen w-full object-cover image-transition" />
      </div>
    </div>
  );
}

export default Section2
