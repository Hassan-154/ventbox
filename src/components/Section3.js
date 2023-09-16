import React, { useEffect, useRef, useState } from 'react';
import video from '../Images/video.mp4';
import { useInView } from 'react-intersection-observer';


const Section3 = () => {

  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      console.log('The component is in view.');
    }
  }, [inView]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollTimestamp, setScrollTimestamp] = useState(null);

  useEffect(() => {
    let scrollTimeout;
    let scrollSpeed = 0;

    // Function to start playing the video
    const playVideo = () => {
      if (videoRef.current && !isPlaying) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          console.log('Video is played');
        }).catch(error => {
          console.error('Error playing video:', error);
        });
      }
    };

    // Function to pause the video
    const pauseVideo = () => {
      if (videoRef.current && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        console.log('Video is paused');
      }
    };

    // Event listener for scroll
    const handleScroll = () => {
      const now = performance.now();
      const delta = scrollTimestamp ? now - scrollTimestamp : 0;

      // Calculate scroll speed as the time between scroll events
      if (delta > 0) {
        scrollSpeed = 1000 / delta; // Scrolls per second
      }

      // Update the scroll timestamp
      setScrollTimestamp(now);

      // Adjust video playback rate based on scroll speed
      if (scrollSpeed > 100) {
        videoRef.current.playbackRate = 2.0; // Double the playback speed
        console.log('User is scrolling double fast, video is playing double fast.');
      } else {
        videoRef.current.playbackRate = 1.0; // Normal playback speed
      }

      // Clear any previous timeout
      clearTimeout(scrollTimeout);

      // Start playing the video only if it's not already playing
      if (!isPlaying) {
        playVideo();
      }

      // Set a timeout to pause the video after a certain time (e.g., 2 seconds) of inactivity
      scrollTimeout = setTimeout(() => {
        pauseVideo();
      }, 2000); // Adjust the timeout duration as needed
    };

    // Event listener for video completion
    videoRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
      console.log('Video is completely watched');
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      videoRef.current.removeEventListener('ended', () => {
        setIsPlaying(false);
        console.log('Video is completely watched');
      });
    };
  }, [isPlaying, scrollTimestamp]);

  return (
    <div className="bg-black">
      <div className='max-w-6xl mx-auto'>
        <p className='text-white text-lg pt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget justo nec risus tincidunt blandit. Vivamus fringilla odio sit amet est tempor, ac lacinia tortor sodales.Praesent vehicula orci vel lorem laoreet, eget bibendum justo sagittis. Nullam eget ante nec arcu dictum ultrices Proin a massa a tortor euismod sollicitudin. Vivamus in lectus sed elit feugiat aliquam. Cras a elit nec augue cursus fermentum.</p>
        <div className='flex justify-center pt-12'>
          <h1 className='text-white  font-bold text-3xl'><span className='text-red-500'>X</span>VENTBOX</h1>
          <h1 className='text-gray-300 text-3xl ml-3'>FUNCTION</h1>
        </div>
        <div ref={ref}><video src={video} autoPlay muted ref={videoRef} /></div>
      </div>
    </div>
  );
};

export default Section3;
