import React from 'react'
import logo from "../Assets/trybo-logo.png";

export default function Navbar() {
  return (
    <div className=' w-full absolute text-black z-[1] bg-white/80 h-16  '>
        <div >
            <img src={logo} 
            alt='logo'
            className=' w-[12%] '
            />

        </div>
        
        </div>
  )
}
