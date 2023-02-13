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
     
      <div className='bg-green-400 grid grid'>
        {Object.keys(footerData).map((data, index) => {
          return <div>
            <h5>{data}</h5>
            {footerData[data].map((item, idx) => {
              return <p>{item }</p>
            })}
          </div>
        })}
      </div>
     
       </div>
       <div>A</div>
    </div>
  )
}
