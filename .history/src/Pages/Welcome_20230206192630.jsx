import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SubHeader from '../components/SubHeader'

export default function Welcome() {
  useEffect(()=> {
    async function fetchName(){
      const 
    }
  }, [])
  return (
    <>
    <SubHeader />
     <div className="md:shadow-xl md:rounded-lg md:max-w-4xl md:mx-auto mt-8">
     <div className="flex flex-col items-center justify-center  mt-8 px-6">
        <h2 className="font-semibold text-[#1a1e24] text-[25px] 
      mb-8 md:mr-[100px] text-center">Welcome, (user firstName)</h2>
        <h4 className='text-md md:w-[390px] mr-2 text-[#202834] mb-8'>With your new Trybo account, the world is within your reach.</h4>

        <p className=' mr-[280px] md:mr-[335px] mb-10 text-blue-700 '>
            <Link to='/'> Continue</Link>
           
            </p>
    </div>
    </div>
    </>
   
  )
}
