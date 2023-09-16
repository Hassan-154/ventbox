import React from 'react'
import image from '../Images/mounting.jpg'
function Section5() {
  return (
    <div className="bg-black pb-8">
        <div  data-aos="fade-up">
        <div className='flex justify-center pt-12'>
            <h1 className='text-white font-bold text-xl sm:text-4xl'><span className='text-red-500'>X</span>VENTBOX</h1>
            <h1 className='text-gray-300 text-xl sm:text-4xl ml-3'>MOUNTING OPTIONS</h1>
          </div>
          <div><h1 className='flex justify-center mt-2 text-gray-300 text-xl sm:text-4xl ml-3 uppercase'>Pest protection</h1>
          </div>
        </div>

          <div className='flex flex-col mt-6 sm:mt-14'>
           {/* image side */}
           <div className="h-screen w-full" data-aos="fade-up">
      <img
        src={image}
        alt=""
        className="absolute h-full w-full object-cover"
      />
      </div>
          {/* text size */}
         <div className='max-w-6xl mx-auto'><h5 className='uppercase text-center font-bold text-gray-500 text-xl sm:text-2xl mt-6 lg:mt-10' data-aos="fade-up">Keep the outside & inside air separate</h5>
            <p data-aos="fade-up" className='mt-4 sm:mt-6 text-gray-500 text-center text-2xl sm:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget justo nec risus tincidunt blandit. Vivamus fringilla odio sit amet est tempor, ac lacinia tortor sodales. Vivamus fringilla odio sit amet est tempor.</p></div>
          </div>
    </div>
  )
}

export default Section5