import React from 'react'
import logo from '../Assets/trybo-logo.png'

export default function Footer() {
  return (
    <div className='w-full h-[600px] bg-[#574d4d] grid md:grid-cols-2 px-20'>
       <div>
        <img src={logo} 
        alt='Trybo logo' 
        className='w-'/>
       </div>
       <div>A</div>
    </div>
  )
}
