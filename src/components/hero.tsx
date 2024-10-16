import React from 'react'
import Image from 'next/image'
import png from '../public/static/8375394.png'
const Hero = () => {
  return (
    <div>
      <div className='w-full flex justify-around items-center max-[740px]:flex-col'>
        <span className='w-[40rem] h-[80vh] flex justify-center flex-col max-[740px]:w-[30rem] max-[480px]:w-auto '>
            <div className='my-[5rem]'>
            <h1 className='font-sans font-bold text-[2.3rem] m-[0.8rem] max-[945px]:text-[2rem] max-[840px]:text-[1.7rem] max-[380px]:text-[1.4rem]  text-white'>WELCOME TO WING <span className='text-sky-300'>SEAT</span></h1>
            <h1 className='font-sans font-bold text-[2.3rem] m-[0.8rem] max-[945px]:text-[2rem] max-[840px]:text-[1.7rem] max-[380px]:text-[1.4rem] text-white'>UNMATCHED COMFORT</h1>
            <h1 className='font-sans font-bold text-[2.3rem] m-[0.8rem] max-[945px]:text-[2rem] max-[840px]:text-[1.7rem] max-[380px]:text-[1.4rem] text-white'>AFFORDABLE TRAVEL</h1>
            <h1 className='font-sans font-bold text-[2.3rem] m-[0.8rem] max-[945px]:text-[2rem] max-[840px]:text-[1.7rem] max-[380px]:text-[1.4rem]  text-white'>SAFE JOUNREY</h1>
            </div>
        </span>
        <span className='w-[30rem] max-[740px]:w-[20rem] max-[740px]:mb-[5rem]'>
            <Image src={png} alt='' width={500} height={300} className='h-[50vh] w-[25rem] max-[380px]:w-[20rem]' />
        </span>
      </div>
    </div>
  )
}

export default Hero
