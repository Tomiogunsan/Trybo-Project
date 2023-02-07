import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function ProfileSideBar() {
  return (
    <div className='w-[150px] bg-'>
      <ul>
        <li className='flex space-x-4'>
          <BsFillPersonFill />
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
