import React from 'react'
import backImg from '../Images/back1.jpg'
import logo from '../Images/logo.png'
import img from '../Images/img.png'
function Section1() {
  return (
    <div className='relative'>
    <div className="h-100 w-full">
      <img
        src={backImg}
        alt=""
        className="absolute h-full w-full object-cover"
      />
      </div>
      <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <div className='w-full flex flex-col space-y-12 sm:flex-row max-w-6xl items-center justify-between px-4 lg:px-0'>
    {/* for logo */}
    <div className='mx-auto'><img src={logo} className='max-h-logoSM sm:max-h-logo'/></div>
    {/* for picture */}
    <div><img src={img} className='max-h-pipe sm:max-h-full'/></div>
    </div>
  </div>
    </div>
  )
}

export default Section1