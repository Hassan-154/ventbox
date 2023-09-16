import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import wall1 from '../Images/back1.jpg';
import wall2 from '../Images/wall-1.jpg';

const ParallaxContainer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [{ y1, opacity1, y2 }, setY] = useSpring(() => ({
    y1: 0,
    opacity1: 1,
    y2: 0,
    config: config.slow,
  }));

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      setScrollY(newY);

      if (newY >= window.innerHeight) {
        setY({ y1: -window.innerHeight, opacity1: 0, y2: -newY });
      } else {
        setY({ y1: 0, opacity1: 1, y2: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setY]);

  return (
    <div className="h-screen bg-black overflow-hidden">
      <animated.div
        className="parallax-layer"
        style={{
          transform: y1.interpolate((y) => `translate3d(0, ${y}px, 0)`),
          opacity: opacity1,
        }}
      >
               <div class="relative h-screen w-screen">
  <img  src={wall2} class="h-full w-full object-cover" />
  <div class="absolute inset-0 flex items-center justify-center">
    <p class="text-black text-4xl font-semibold max-w-6xl mx-auto">m ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo erat ac est facilisis, at dignissim elit dictum. Fusce vitae purus vel lorem convallis aliquam vel in elit. Vivamus et tortor nec elit interdum rhoncus. Nulla facilisi. Phasellus bibendum justo ut felis auctor, eget bibendum justo venenatis. Nulla facilisi. Proin nec nisl nec tortor congue consequat. </p>
  </div>
</div>
      </animated.div>
      <animated.div
        className="parallax-layer"
        style={{
          transform: y2.interpolate((y) => `translate3d(0, ${y}px, 0)`),
        }}
      >
        <div class="relative h-screen w-screen">
  <img  src={wall1} class="h-full w-full object-cover" />
  <div class="absolute inset-0 flex items-center justify-center">
    <p class="text-black text-4xl font-semibold max-w-6xl mx-auto">m ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo erat ac est facilisis, at dignissim elit dictum. Fusce vitae purus vel lorem convallis aliquam vel in elit. Vivamus et tortor nec elit interdum rhoncus. Nulla facilisi. Phasellus bibendum justo ut felis auctor, eget bibendum justo venenatis. Nulla facilisi. Proin nec nisl nec tortor congue consequat. </p>
  </div>
</div>
      </animated.div>
      {/* Add more layers as needed */}
    </div>
  );
};

export default ParallaxContainer;
