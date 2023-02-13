import React from 'react'
import logo from '../Assets/trybo-logo.png';
import { footerData } from '../db/footerData';
import Container from '../components/Container'

export default function Footer() {
  return (
   
    <div className='w-full h-[600px]   py-8'>
       <Container>
       
    <div className='grid md:grid-cols-2 gap-6'>
    
       <div>
        
       <img src={logo} 
        alt='Trybo logo' 
        className='w-[180px] '/>
      <div className=' grid grid-cols-2 gap-6'>
        {Object.keys(footerData).map((data, index) => {
          return <div>
            <h5 className='font-semibold mt-8 mb-4'>{data}</h5>
            {footerData[data].map((item, idx) => {
              return <p>{item}</p>
            })}
          </div>
        })}
      </div>
     
       </div>
       <div className='invisible mdmt-6' >
        <p className='font-semibold mb-4'>Get special offers, travel inspiration, and more from Trybo</p>
        <form action="" className='flex gap-4'>
          <input type="text"
          placeholder='Email'
          className='w-[70%] px-4 py-4 border-[1px] border-[#556987] rounded-md'
           />
          <button className='bg-blue-800 text-white px-6 rounded-full hover:bg-blue-900 cursor-pointer'>
            Subscribe
            </button>
        </form>
       </div>
    </div>
    <div className='flex justify-between mt-16'>
      <div>
        <p>© 2023 Vrbo, an <span className='text-blue-900 font-semibold'>Expedia Group</span> company. All rights reserved.</p>
        <p className='text-blue-900 font-semibold'>Terms and Conditions · Privacy Policy · Your Privacy Choices</p>
      </div>
      <div>B</div>
    </div>
    </Container>
    </div>
  )
}
