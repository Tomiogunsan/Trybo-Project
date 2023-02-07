import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import styles from './ProfileSideBar.module.css'


export default function ProfileSideBar() {

    const sideBar = [
        {
            label: <BsFillPersonFill className='bg-[#f5f5f5] rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Profile',
           link: 'profile',
        },
        {
            label: <BsFillPersonCheckFill className='bg-[#f5f5f5] rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Verification',
           link: 'verification',
        },
        {
            label: <FiSettings className='bg-[#f5f5f5]  rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Settings',
           link: 'settings',
        },
    ]

    let activeStyle = {
        backgroundColor: 'red'
    }
  return (
 <div className='shadow-md fixed'>
    {sideBar.map((item, idx) => (
        <div  key={idx} className={ `flex  p-8  ${sideBar.length - 1 === idx ? " border-b-0 border": 'border-b-[1px] border'}`}>
           <Link to={item.link} smooth={true}  
           duration={500} active={{  backgroundColor: 'red'}} className='flex'>
           {item.label}
            <div className='ml-4 text-lg text-[#C0C0C0]'>{item.text}</div>
            </Link>
           
        </div>

    ))}
 </div>
  
    
    
   
  )
}
