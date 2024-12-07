import React from 'react'

const Success = () => {
  return (
    <div className='w-full h-full p-0'>
        <div className='flex justify-center items-center text-center'>
            <h2 className='p-5 text-4xl font-semibold text-gray-900'>Success!</h2>
        </div>
        <div className='justify-center items-center flex pb-[-20px]'>
            <img src="./rb_26076.png" alt="" className='flex h-[300px] w-[20rem] object-contain justify-center items-center' />
        </div>
        <div>
            <p className=' text-gray-900'>We have sent you an email verification to <br />
            <span className='text-gray-700'>barbex.jy@gmail.com</span> </p>
        </div>

        <div className='pt-[10px]'> 
            <button className='w-[40%] h-[40px]  bg-gray-900 text-[#ffff] rounded-[8px] shadow-md'>PROCEED</button>
        </div>

    </div>
  )
}

export default Success