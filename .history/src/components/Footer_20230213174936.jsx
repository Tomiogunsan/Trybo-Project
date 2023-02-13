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
     <div>
      {footerData.map((item, idx) => 
      <div key={idx}>
        <div>
          <div>
            <h2>{item.titleA}</h2>
            <p>{item.itemAOne}</p>
            <p>{item.itemATwo}</p>
            <p>{item.itemAThree}</p>
            <p>{item.itemAFour}</p>
            <p>{item.itemBFive}</p>
            </div>
          <div>
            <h2>{item.titleB}</h2>
            <p>{item.itemBOne}</p>
            <p>{item.itemBTwo}</p>
            <p>{item.itemBThree}</p>
            p
          </div>
        </div>
        <div></div>
        </div>)}
     </div>
       </div>
       <div>A</div>
    </div>
  )
}
