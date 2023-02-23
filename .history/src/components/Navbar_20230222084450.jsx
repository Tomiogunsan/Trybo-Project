import React from 'react'
import logo from "../Assets/trybo-logo.png";

export default function Navbar() {
  return (
    <div className=' w-full absolute text-black top-0 left-0 z-[1] bg-white h-16 flex '>
        <div>
            <img src={logo} 
            alt='logo'
            className=' w-20'
            />
        </div>
        </div>
  )
}
