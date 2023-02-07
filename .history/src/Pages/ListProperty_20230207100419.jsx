import React from 'react'
import house from '../Assets/house-illustration.png'
import SubHeader from '../components/SubHeader'

export default function ListProperty() {
  return (
    <>
      <SubHeader />
      <div className='relative w-full'>
        <img src={house} 
        alt='A house illustration' 
        className='  w-[75%] h-full object-cover'/>
        <div className='absolute w-full h-full left-0 top-0 bg-gray-900/30'>
          <form className='absolute right-6 top- bg-red-800  w-[50%] '>
          <input placeholder='Name'/>
          </form>
        </div>
      </div>
    </>
  )
}
