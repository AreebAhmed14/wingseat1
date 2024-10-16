import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-[30vh] bg-blue-950 flex justify-around items-center max-[600px]:flex-col max-[600px]:h-[90vh]'>
        <div>
            <h1 className='text-[2.6rem] max-[768px]:text-[2.4rem] font-sans font-bold text-white'>wing <span className='text-sky-300'>seat</span></h1>
            <p className='text-[1.2rem] font-sans max-[550px]:text-[1rem] text-sky-300 font-bold'>Your Comfort, Our Priority</p> 
        </div>
        <div>
            <ul className=''>
                <li className='m-[1rem] font-sans font-bold max-[768px]:text-[0.8rem] max-[550px]:text-[1.1rem] max-[550px]:m-[0.5rem] text-white text-[1.2rem]'>www.wingseat.com</li>
                <li className='m-[1rem] font-sans font-bold max-[768px]:text-[0.8rem] max-[550px]:text-[1.1rem] max-[550px]:m-[0.5rem] text-white text-[1.2rem]'>wingseat@gmail.com</li>
                <li className='m-[1rem] font-sans font-bold max-[768px]:text-[0.8rem] max-[550px]:text-[1.1rem] max-[550px]:m-[0.5rem] text-white text-[1.2rem]'>+92 2255385176</li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
            {/* <h1 className='m-[0.5rem]'>GIVE REVIEW</h1> */}
            <textarea name="text"  placeholder='Share Review...' id="" className='h-[15vh] max-[550px]:h-[18vh] focus:outline-none max-[550px]:w-[15rem] border-[0.4rem] border-blue-950 w-[15rem] max-[768px]:w-[12rem] rounded-[0.5rem] p-2'></textarea>
            <button className='bg-sky-300 text-white py-[0.3rem] font-sans font-bold mt-[1rem] rounded-[0.5rem] px-[1rem] max-[768px]:px-[0.7rem] max-[768px]:py-[0.2rem]'>submit</button>

        </div>
      </div>
    </div>
  )
}

export default Footer
