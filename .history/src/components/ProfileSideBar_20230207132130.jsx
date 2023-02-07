import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function ProfileSideBar() {
  return (
    <div className=' '>
      <div className='w-[250px] h-[400px] bg-slate-500 flex flex-col items-center '>
        <div className='flex items-center py-8 border-b-[1px] '>
          <BsFillPersonFill  className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]' />
          Profile
        </div>
        <div className=' flex items-center py-8 border-b-[1px]'>
          <BsFillPersonCheckFill className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]'/>
          Verifications
        </div>
        <li className='flex  items-center py-8 border-b-[1px]'>
          <FiSettings className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]'/>
          Settings
        </li>
      </div>
    </div>
  )
}
