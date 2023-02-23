import React from 'react'
import logo from '../Assets/trybo-logo.png';

export default function SubHeader() {
  return (
    <div className='bg-[#ffffff] h-14 w-full flex justify-center items-center
     border-b-2 ' >
       <Link to='/' <img src={logo} 
        alt='Trybe logo'
        className='w-[25%] md:w-[12%] text-center'
        />
    </div>
  )
}
