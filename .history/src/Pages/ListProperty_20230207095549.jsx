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
        className='  w-[75%] object-cover'/>
        <div className='absolute  lright-40% top-0 bg-white w-full'>
          <form >
          <input placeholder='Name'/>
          </form>
        </div>
      </div>
    </>
  )
}
