import React from 'react'
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <>
      <div className='w-full h-[13vh] bg-blue-950 flex justify-between items-center'>
        <h1 className='text-[2.6rem] max-[710px]:text-[2.3rem] max-[444px]:text-[2rem] max-[400px]:text-[1.7rem] font-sans font-bold text-white ml-[1rem]'>WING <span className='text-sky-300'>SEAT</span> .</h1>
        <ul className='flex m-[1rem]'>
          <li className='m-[1rem] font-sans max-[710px]:text-[1rem] max-[602px]:hidden font-bold text-white text-[1.2rem]'>Home</li>
          <li className='m-[1rem] font-sans max-[710px]:text-[1rem] max-[602px]:hidden font-bold text-white text-[1.2rem]'>About</li>
          <li className='m-[1rem] font-sans max-[710px]:text-[1rem] max-[602px]:hidden font-bold text-white text-[1.2rem]'>Contact</li>
          <li className='m-[1rem] font-sans max-[710px]:text-[1rem] max-[602px]:hidden font-bold text-white text-[1.2rem]'>Service</li>
        </ul>
        <TiThMenu className='cursor-pointer hidden mr-5 max-[400px]:text-[1.8rem] text-white text-[2.5rem] max-[602px]:block' />
      </div>
    </>
  )
}

export default Header
