import React from 'react'

import ProfileSideBar from './ProfileSideBar/ProfileSideBar'

export default function Dashboard({children, listings}) {
  return (
  
    <div className='md:flex w-full mt-16'>
       <div className='invisible lg:visible  lg:w-[250px] lg:h-[400px] ml-20 '
       >
        <ProfileSideBar  />
        </div> 
        <div className=' lg:w-[calc(100vw-250px)]   ml-10 lg:ml-[100px]  '>
            {children}
            </div>
    </div>
  
   
  )
}
