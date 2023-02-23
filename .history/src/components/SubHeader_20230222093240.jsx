import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/trybo-logo.png';

export default function SubHeader() {
  return (
    <>
    <Link to='/'>
    <div className='bg-[#ffffff] h-14 w-full flex justify-center items-center
     border-b-2 ' >
       
       <img src={logo} 
        alt='Trybe logo'
        className='w-[25%] md:w-[12%] text-center'
        />
        
    </div>
    </>
    
  )
}
