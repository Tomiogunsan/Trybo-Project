import React from 'react'
import banner from '../Assets/banner.jpg';
import Booking from './Booking';
import Navbar from "./Navbar";


export default function Hero() {
  return (
    <div className='w-full h-[550px] relative'>
      <Navbar 
      <img src={banner} alt='logo' className='w-full h-full object-cover'/>  
        <div className='absolute w-full h-full left-0 top-0 bg-gray-900/60'></div>
        <div className='absolute w-full top-0 h-full flex flex-col  justify-center text-center text-[#fafbfa]'>
            <h1 className=' text-3xl md:text-4xl py-8 capitalize tracking-tight font-bold'>Stay in the world's most remarkable homes</h1>
            <div>
                <Booking />
            </div>
        </div>
    </div>
    
  )
}
