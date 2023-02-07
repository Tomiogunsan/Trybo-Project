import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function ProfileSideBar() {
  return (
    <div>
      <ul>
        <li className='flex space'>
          <BsFillPersonFill />
          Profile
        </li>
        <li>
          <BsFillPersonCheckFill />
          Verifications
        </li>
        <li>
          <FiSettings />
          Settings
        </li>
      </ul>
    </div>
  )
}