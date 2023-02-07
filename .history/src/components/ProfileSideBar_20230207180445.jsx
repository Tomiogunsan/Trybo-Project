import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'


export default function ProfileSideBar() {

    const sideBar = [
        {
            label: <BsFillPersonFill className='bg-[#556987] rounded-full text-[#1a1e24] text-4xl'/>,
           text: 'Profile',
        },
        {
            label: <BsFillPersonCheckFill className='bg-[#556987] rounded-full text-[#1a1e24] text-4xl'/>,
           text: 'Verification',
        },
        {
            label: <FiSettings className='bg-[#556987] rounded-full text-[#1a1e24] text-4xl'/>,
           text: 'Settings',
        },
    ]
  return (
 <div>
    {sideBar.map((item, idx) => (
        <div  key={idx} className={ `flex justify  ${sideBar.length - 1 === idx ? " border-b-0 border": 'border-b-2 border'}`}>
           {item.label}
            <div>{item.text}</div>
        </div>

    ))}
 </div>
  
    
    //   <div className='w-[250px] h-[400px] bg-slate-500 fixed flex flex-col items-center '>
    //     <div className='flex items-center py-8 border-b-[1px] '>
    //       <BsFillPersonFill  className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]' />
    //       <p className='text-lg'>Profile</p>
    //     </div>
    //     <div className=' flex items-center py-8 border-b-[1px]'>
    //       <BsFillPersonCheckFill className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]'/>
    //      <p className='text-lg'>Verifications</p> 
    //     </div>
    //     <div className='flex  items-center py-8 border-b-[1px]'>
    //       <FiSettings className='mr-6 bg-[#556987] text-4xl rounded-full px-2 text-[#1a1e24]'/>
    //       <p className='text-lg'>Settings</p>
    //     </div>
    //   </div>
   
  )
}
