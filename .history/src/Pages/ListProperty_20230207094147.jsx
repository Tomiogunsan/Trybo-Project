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
        className='w-full obje'/>
        <div></div>
      </div>
    </>
  )
}
