import React from 'react'
import heroimg from "../assets/heroimg.jpg"

const hero1 = () => {
  return (
    <div className="grid grid-cols-2 h-screen bg-neutral-100">
      {/* Left Section */}
      <div className="bg-neutral-100 flex items-center h-screen w-full ">
        <div>
        <div className=' ml-12'> 
            <h3 className='text-5xl sm:text-4xl lg:text-4xl tracking-wide text-lg md:text-5xl font-bold mr-6'>Spiral<span className='text-pink-900'>Event</span></h3>
            <p className='mb-2 ml-4 font-bold text-gray-700 sm:1xl'>
                coming soon...
           </p>
        </div>
        <div className=' '>
            <h2 className='text-3xl sm:text-3xl lg:text-3xl mt-10 lg:mt-6 tracing-wide'>Get early access!</h2>
            <p className='mb-2 ml-4 text-gray-600 sm:text-1xl'>Be the first to join our Waitlist by creating a profile and claiming a premium username.</p>
        </div>
        </div>
      </div>
      

      {/* Right Section */}
      <div className="bg-white flex items-center justify-center">
        <img src={heroimg} alt="" className='w-full h-screen max-w-full h-auto object-contain' />
      </div>
    </div>
  )
}

export default hero1