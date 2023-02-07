import React from 'react'
import {BsFillPersonFill, BsFillPersonCheckFill} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'


export default function ProfileSideBar() {
  return (
    <div>
        <ul>
            <li>
            <BsFillPersonFill />
            
            </li>
            <li>
            
           < BsFillPersonCheckFill />
                
            </li>
            <li>
            <FiSettings/>
            </li>
        </ul>
    </div>
  )
}
