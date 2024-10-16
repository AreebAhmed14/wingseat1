import React from 'react'

const Cta = () => {
  return (
    <div>
      <div className='w-full h-[40vh] flex justify-center items-center flex-col bg-blue-950'>
        <center>
        <p className='text-[1.5rem] text-white font-bold my-[1rem] max-[840px]:text-[1.3rem] max-[400px]:text-[1.2rem]'>READY FOR ADVENTURE? BOOK NOW FOR A <span className='max-[346px]:hidden'>SAFE & </span>ENJOYABLE TRIP!</p>
        </center>
      <button className='bg-sky-300 text-white py-[0.5rem] text-[1.2rem] font-sans font-bold rounded-[1rem] px-[2rem] max-[400px]:text-[1rem]'>BOOK</button>

      </div>
    </div>
  )
}

export default Cta
