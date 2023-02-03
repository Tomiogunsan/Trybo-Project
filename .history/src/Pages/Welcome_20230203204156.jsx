import React from 'react'
import SubHeader from '../components/SubHeader'

export default function Welcome() {
  return (
    <>
    <SubHeader />
     <div>
        <h2 className="font-semibold text-[#1a1e24] text-[25px] 
      mb-6 mr-[100px]">Welcome (user firstName)</h2>
        <h4 className=''>With your new Trybo account, the world is within your reach.</h4>

        <p>Continue</p>
    </div>
    </>
   
  )
}
