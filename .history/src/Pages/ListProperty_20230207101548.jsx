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
          <form className="absolute right-6 top-[30%] bg-red-800  w-[50%] ">
            <h2 className="text-xl">
              Reach the guests you want—those who truly value your property—with
              Trybo. Becoming a host is free, fast, and easy.
            </h2>
            <div className='flex flex-col'>
            <input placeholder="Name" type='text'
            className=''/>
            <input placeholder='Email' type='email' />
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}
