import React, { useEffect } from 'react';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section6 from './components/Section6';
import Slideshow from './components/Slideshow';
import ParallaxContainer from './components/ParallaxContainer';
import New from './components/New';
function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  AOS.init();

  return (
    <div className="overflow-x-hidden">
      <Section1/>
      {/* <Slideshow/> */}
      <ParallaxContainer/>
      {/* <Section5/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/> */}
    </div>
  );
}

export default App;
