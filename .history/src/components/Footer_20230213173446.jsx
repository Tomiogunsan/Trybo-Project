import React from 'react'
import logo from '../Assets/trybo-logo.png';
import { footerData } from '../db/footerData';

export default function Footer() {
  return (
    <div className='w-full h-[600px] bg-[#574d4d] grid md:grid-cols-2 px-20 py-8'>
       <div>
        <img src={logo} 
        alt='Trybo logo' 
        className='w-[200px]'/>
        {footerData.map((item) => (
          <div>{item.ite}</div>
        ))}
       </div>
       <div>A</div>
    </div>
  )
}
