import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function ProfileSideBar() {
  return (
    <div className='w-[250px] bg-slate-500 px-8'>
      <ul>
        <li className='flex py-6 border-b-[]'>
          <BsFillPersonFill  className='mr-6'/>
          Profile
        </li>
        <li className='flex space-x-4'>
          <BsFillPersonCheckFill />
          Verifications
        </li>
        <li className='flex space-x-4'>
          <FiSettings />
          Settings
        </li>
      </ul>
    </div>
  )
}
