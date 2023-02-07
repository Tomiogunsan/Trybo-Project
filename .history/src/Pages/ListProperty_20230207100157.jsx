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
        className='  w-full h-full object-cover'/>
        <div className='bg-yellow'>
          <form className='absolute flex flex-col justify-end  bg-red-800  w-[50%]'>
          <input placeholder='Name'/>
          </form>
        </div>
      </div>
    </>
  )
}