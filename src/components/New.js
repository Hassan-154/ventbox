import React, { useEffect, useRef } from 'react';

const New = () => {
  const htmlRef = useRef(document.documentElement);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imgRef = useRef(new Image());
  const frameCount = 148;

  const currentFrame = (index) => {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, '0')}.jpg`;
  };

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const img = imgRef.current;
    img.src = currentFrame(1);
    canvas.width = 1158;
    canvas.height = 770;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    const handleScroll = () => {
      const scrollTop = htmlRef.current.scrollTop;
      const maxScrollTop = htmlRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener('scroll', handleScroll);
    preloadImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div class="image-container">
  <div></div>
  <div class="text-overlay">
  <canvas id="hero-lightpass" className="new-section-canvas" ref={canvasRef} />
  </div>
</div>
  );
};

export default New;
