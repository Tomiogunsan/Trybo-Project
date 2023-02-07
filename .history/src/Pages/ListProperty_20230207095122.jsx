import React from 'react'
import house from '../Assets/house-illustration.png'
import SubHeader from '../components/SubHeader'

export default function ListProperty() {
  return (
    <>
      <SubHeader />
      <div className='relative'>
        <img src={house} 
        alt='A house illustration' 
        className=' absolute w-[75%] object-cover'/>
        <div className='absolute z-10 right-0 top-0 bg-white w-full'>
          <form >
          <input placeholder='Name'/>
          </form>
        </div>
      </div>
    </>
  )
}
