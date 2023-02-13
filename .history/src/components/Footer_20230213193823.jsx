import React from 'react'
import logo from '../Assets/trybo-logo.png';
import { footerData } from '../db/footerData';

export default function Footer() {
  return (
    <div className='w-full h-[600px] bg-[#574d4d] px-20 py-8'>
    <img src={logo} 
        alt='Trybo logo' 
        className='w-[200px]'/>
    <div className='grid md:grid-cols-2 '>
       <div>
        
     
      <div className=' grid grid-cols-2 gap-6'>
        {Object.keys(footerData).map((data, index) => {
          return <div>
            <h5 className='font-bold mt-8 mb-4'>{data}</h5>
            {footerData[data].map((item, idx) => {
              return <p>{item}</p>
            })}
          </div>
        })}
      </div>
     
       </div>
       <div>
        <p>Get special offers, travel inspiration, and more from Trybo</p>
       </div>
    </div>
    </div>
  )
}
