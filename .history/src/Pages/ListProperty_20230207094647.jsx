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
        className=' w-[75%] object-cover'/>
        <div className='absolute right-0 top-0 bg-white w-full'>
          <input placeholder='Name'
        </div>
      </div>
    </>
  )
}
