import React from 'react'
import SubHeader from '../components/SubHeader'

export default function Welcome() {
  return (
    <>
    <SubHeader />
     <div className="md:shadow-xl md:rounded-lg md:max-w-4xl md:mx-auto mt-8">
     <div className="flex flex-col items-center justify-center  mt-8 px-6">
        <h2 className="font-semibold text-[#1a1e24] text-[25px] 
      mb-6 mr-[100px]">Welcome (user firstName)</h2>
        <h4 className='text-s'>With your new Trybo account, the world is within your reach.</h4>

        <p>Continue</p>
    </div>
    </div>
    </>
   
  )
}
