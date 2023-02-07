import React from 'react'
import house from '../Assets/house-illustration.png'
import SubHeader from '../components/SubHeader'

export default function ListProperty() {
  return (
    <>
      <SubHeader />
      <div className="relative w-full">
        <img
          src={house}
          alt="A house illustration"
          className="  w-[55%] h-full object-cover"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-gray-700/30">
          <form className="absolute right-[100px] top-[30%] bg-white w-[45%] rounded-lg px-8">
            <h2 className="text-lg py-4 font-semibold">
              Reach the guests you want—those who truly value your property—with
              Trybo. Becoming a host is free, fast, and easy.
            </h2>
            <div className='flex flex-col'>
            <input placeholder="Name" type='text'
            className='w-full  px-4 py-4 border-2 border-[#556987] rounded-md mb-6'/>
            <input placeholder='Email' type='email'
            className='w-full  px-4 py-4 border-2 border-[#556987] rounded-md mb-6' />
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}
