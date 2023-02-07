import React from 'react'
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'


export default function ProfileSideBar() {

    const sideBar = [
        {
            label: <BsFillPersonFill className='bg-[#f5f5f5] rounded-full text-[#C0C0C0] text-4xl'/>,
           text: 'Profile',
        },
        {
            label: <BsFillPersonCheckFill className='bg-[#f5f5f5] rounded-full text-[#C0C0C0] text-4xl'/>,
           text: 'Verification',
        },
        {
            label: <FiSettings className='bg-[#f5f5f5]  rounded-full text-[#C0C0C0] text-3xl'/>,
           text: 'Settings',
        },
    ]
  return (
 <div>
    {sideBar.map((item, idx) => (
        <div  key={idx} className={ `flex  p-8  ${sideBar.length - 1 === idx ? " border-b-0 border": 'border-b-2 border'}`}>
           {item.label}
            <div className='ml-4 text-lg text-[#C0C0C0]'>{item.text}</div>
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
