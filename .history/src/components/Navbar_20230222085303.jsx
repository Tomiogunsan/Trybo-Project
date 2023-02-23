import React from 'react'
import logo from "../Assets/trybo-logo.png";

export default function Navbar() {
  return (
    <div className=' w-full absolute text-black z-[1] bg-white h-16 flex '>
        <div className='flextext-center'>
            <img src={logo} 
            alt='logo'
            className=' w-[50%]'
            />
        </div>
        </div>
  )
}
