import React from 'react'

const Success = () => {
  return (
    <div className='w-full h-full p-10 '>
        <div className='flex justify-center items-center text-center'>
            <h2 className='text-4xl font-semibold text-gray-900'>Success!</h2>
        </div>
        <div className='justify-center items-center flex '>
            <img src="./Ok-amico.png" alt="" className='flex h-[20rem] w-[30rem] justify-center items-center' />
        </div>
        <div>
            <p className='pb-[10px]  text-gray-900'>We have sent you an email verification to <br />
            <span className='text-gray-700'>barbex.jy@gmail.com</span> </p>
        </div>

        <div>
            <button className='w-[40%] h-[40px] bg-gray-900 text-[#ffff] rounded-[8px] shadow-md hover:bg-[#831843]'>PROCEED</button>
        </div>

    </div>
  )
}

export default Success