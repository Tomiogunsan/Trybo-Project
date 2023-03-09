import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import {FaListAlt} from 'react-icons/fa'

import { Link } from 'react-scroll'



export default function ProfileSideBar({listings}) {

    const sideBar = [
        {
            label: <BsFillPersonFill className='bg-[#f5f5f5] rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Profile',
           link: 'profile',
           isListing: false
        },
        {
            label: <BsFillPersonCheckFill className='bg-[#f5f5f5] rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Verification',
           link: 'verification',
           isListing: false
        },
        {
            label: <FiSettings className='bg-[#f5f5f5]  rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Settings',
           link: 'settings',
           isListing: false
        },
        {
            label: <FaListAlt className='bg-[#f5f5f5]  rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Listings',
           link: 'listings',
           isListing: false
        },
    ]

    
  return (
 <div className=' shadow-md fixed '>
    {sideBar.map((item, idx) => {
        if(listings.length > 0 && item.isListing ){
            
        }
       

})}
 </div>
  
    
    
   
  )
}
