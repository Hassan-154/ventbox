import React from 'react'
import image from '../Images/mounting.jpg'
function Section4() {
  return (
    <div className="bg-black">
    <div className='w-full bg-gray-40 h-12'></div>
      <div className='max-w-6xl mx-auto px-4 lg:px-0'>
          <div className='flex justify-center pt-12' data-aos="fade-up">
            <h1 className='text-white font-bold text-xl sm:text-4xl'><span className='text-red-500'>X</span>VENTBOX</h1>
            <h1 className='text-gray-300 text-xl sm:text-4xl ml-3'>MOUNTING OPTIONS</h1>
          </div>

          <div className='flex flex-col lg:flex-row space-x-6 mt-6 sm:mt-14'>
          {/* text size */}
            <div className='text-gray-300 lg:w-1/2'>
            <div data-aos="fade-right">
            <h5 className='uppercase mx-auto text-right font-bold text-gray-300 text-3xl sm:text-4xl'>F Series</h5>
            <h4 className='text-xl -mt-0 mx-auto text-right text-gray-300'>Steel / aluminum / precast</h4>
            </div>
            <p data-aos="fade-right" className='mt-4 sm:mt-6 text-gray-400 leading-8 sm:leading-10 text-right text-2xl sm:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget justo nec risus tincidunt blandit. Vivamus fringilla odio sit amet est tempor, ac lacinia tortor sodales. Vivamus fringilla odio sit amet est tempor.</p>
            </div>
            {/* video side */}
            <div data-aos="fade-left" className='lg:w-1/2 mt-8 lg:mt-0'><img src={image}/></div>
          </div>
      </div>
    </div>
  )
}

export default Section4