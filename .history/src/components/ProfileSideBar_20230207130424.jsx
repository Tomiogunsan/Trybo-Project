import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function ProfileSideBar() {
  return (
    <div className='w-[250px] h bg-slate-500 '>
      <ul>
        <li className='flex py-6 border-b-[1px] px-8'>
          <BsFillPersonFill  className='mr-6'/>
          Profile
        </li>
        <li className='flex py-6 border-b-[1px] px-8'>
          <BsFillPersonCheckFill />
          Verifications
        </li>
        <li className='flex py-6 border-b-[1px] px-8'>
          <FiSettings />
          Settings
        </li>
      </ul>
    </div>
  )
}
