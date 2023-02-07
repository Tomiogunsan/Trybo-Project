import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function ProfileSideBar() {
  return (
    <div className='w-[250px] h-[400px] bg-slate-500 '>
      <ul>
        <li className='flex  py-8 border-b-[1px] px-8'>
          <BsFillPersonFill  className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[text-[#1a1e24]]' />
          Profile
        </li>
        <li className='flex py-8 border-b-[1px] px-8'>
          <BsFillPersonCheckFill className='mr-6'/>
          Verifications
        </li>
        <li className='flex py-8 border-b-[1px] px-8'>
          <FiSettings className='mr-6'/>
          Settings
        </li>
      </ul>
    </div>
  )
}
