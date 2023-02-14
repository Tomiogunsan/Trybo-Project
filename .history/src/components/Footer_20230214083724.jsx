import React from 'react'
import logo from '../Assets/trybo-logo.png';
import { footerData } from '../db/footerData';
import Container from '../components/Container'
import { useState } from 'react';
import { AiOutlineCheckCircle} from 'react-icons/ai'

export default function Footer() {
  const [success, setSuccess] = useState(false)
  const handleSubmit = (e)=> {
    e.preventDefault()
   
    setSuccess(true)
  }
  return (
   
    <div className='w-full h-[600px]   py-8'>
       <Container>
       
    <div className='grid md:grid-cols-2 gap-6'>
    
       <div>
        
       <img src={logo} 
        alt='Trybo logo' 
        className='w-[180px] '/>
      <div className=' grid grid-cols-2 gap-6 ml-6'>
        {Object.keys(footerData).map((data, index) => {
          return <div>
            <h5 className='font-semibold mt-4 mb-4'>{data}</h5>
            {footerData[data].map((item, idx) => {
              return <p>{item}</p>
            })}
          </div>
        })}
      </div>
     
       </div>
       <div className='invisible md:visible mt-6' >
        <p className='font-semibold mb-4'>Get special offers, travel inspiration, and more from Trybo</p>
        <form action="" className='flex gap-4' onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Email'
          required
          className='w-[70%] px-4 py-4 border-[1px] border-[#556987] rounded-md'
           />
          <button className='bg-blue-800 text-white px-6 rounded-full hover:bg-blue-900 cursor-pointer'>
            Subscribe
            </button>
        </form>
        {success === true ? 
        <div className='flex just items-center mt-6'>
          <AiOutlineCheckCircle  className='text-green-600 text-6xl' />
          <p>Your email has been successfully added. You will receive the Trybo
            Traveler newsletter, featured destination communications and other special offers on a monthly basis.
          </p>
          </div> : ''}
       </div>
    </div>
    <div className='grid md:grid-cols-2 gap-4 md:gap-16 justify-between mt-16 px-4'>
      <div>
        <p>© 2023 Vrbo, an <span className='text-blue-900 font-semibold'>Expedia Group</span> company. All rights reserved.</p>
        <p className='text-blue-900 font-semibold'>Terms and Conditions · Privacy Policy · Your Privacy Choices</p>
      </div>
      <div>
        
      </div>
    </div>
    </Container>
    </div>
  )
}
