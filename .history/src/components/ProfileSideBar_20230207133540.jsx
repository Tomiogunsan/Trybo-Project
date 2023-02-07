import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function ProfileSideBar() {

    const sideBar = [
        {
            label: BsFillPersonFill,
           text: pro
        },
    ]
  return (
    
      <div className='w-[250px] h-[400px] bg-slate-500 fixed flex flex-col items-center '>
        <div className='flex items-center py-8 border-b-[1px] '>
          <BsFillPersonFill  className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]' />
          <p className='text-lg'>Profile</p>
        </div>
        <div className=' flex items-center py-8 border-b-[1px]'>
          <BsFillPersonCheckFill className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]'/>
         <p className='text-lg'>Verifications</p> 
        </div>
        <div className='flex  items-center py-8 border-b-[1px]'>
          <FiSettings className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]'/>
          <p className='text-lg'>Settings</p>
        </div>
      </div>
   
  )
}
