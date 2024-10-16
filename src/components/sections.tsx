import React from 'react'

const Sections = () => {
  return (
    <div>
      <div className='w-full h-[35vh] border-b-8 border-blue-950 bg-slate-200 flex justify-around items-center max-[740px]:flex-col max-[740px]:h-auto '>

        <div className='w-[22rem] flex justify-center flex-col items-center h-[18vh] max-[550px]:h-[25vh] max-[1040px]:w-[18rem] max-[870px]:w-[16rem] max-[750px]:w-[15rem] max-[740px]:w-[25rem] max-[740px]:m-[1rem] max-[740px]:h-[20vh] max-[425px]:w-[22rem] max-[390px]:w-[20rem] max-[350px]:w-[18rem] bg-blue-950 rounded-[0.5rem] border-[0.4rem] border-blue-950 '>
            <p className='m-[0.5rem] font-sans font-bold text-[1.4rem] text-white'>FLIGHTS DETAIL</p>
            <button className='bg-sky-300 text-white py-[0.3rem] font-sans font-bold rounded-[1rem] px-[1rem]'>VIEW</button>
        </div>
        <div className='w-[22rem] flex justify-center flex-col items-center h-[18vh] max-[550px]:h-[25vh] max-[1040px]:w-[18rem] max-[870px]:w-[16rem] max-[750px]:w-[15rem] max-[740px]:w-[25rem] max-[740px]:m-[1rem] max-[740px]:h-[20vh] max-[425px]:w-[22rem] max-[390px]:w-[20rem] max-[350px]:w-[18rem] bg-blue-950 rounded-[0.5rem] border-[0.4rem] border-blue-950 '>
            <p className='m-[0.5rem] font-sans font-bold text-[1.4rem] text-white'>PRICES DETAIL</p>
            <button className='bg-sky-300 text-white py-[0.3rem] font-sans font-bold rounded-[1rem] px-[1rem]'>VIEW</button>
        </div>
        <div className='w-[22rem] flex justify-center flex-col items-center h-[18vh] max-[550px]:h-[25vh] max-[1040px]:w-[18rem] max-[870px]:w-[16rem] max-[750px]:w-[15rem] max-[740px]:w-[25rem] max-[740px]:m-[1rem] max-[740px]:h-[20vh] max-[425px]:w-[22rem] max-[390px]:w-[20rem] max-[350px]:w-[18rem] bg-blue-950 rounded-[0.5rem] border-[0.4rem] border-blue-950 '>
            <p className='m-[0.5rem] font-sans font-bold text-[1.4rem] text-white'>PREVIOUS RECORD</p>
            <button className='bg-sky-300 text-white py-[0.3rem] font-sans font-bold rounded-[1rem] px-[1rem]'>VIEW</button>
        </div>
      </div>
    </div>
  )
}

export default Sections
