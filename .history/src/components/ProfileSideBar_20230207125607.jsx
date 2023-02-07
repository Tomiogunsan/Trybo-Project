import React from 'react'
import {BsFillPersonFill, BsFillPersonCheckFill} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'


export default function ProfileSideBar() {
  return (
    <div>
        <ul>
            <li>
            <BsFillPersonFill />
            Profile
            </li>
            <li>
            
           < BsFillPersonCheckFill />
               Verifi 
            </li>
            <li>
            <FiSettings/>
            </li>
        </ul>
    </div>
  )
}
