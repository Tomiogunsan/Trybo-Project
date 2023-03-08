import React from 'react'

import ProfileSideBar from './ProfileSideBar/ProfileSideBar'

export default function Dashboard({children}) {
  return (
  
    <div className='md:flex w-full mt-16'>
       <div className='invisible md:visible md:w-[250px] md:h-[400px] ml-20 '
       >
        <ProfileSideBar />
        </div> 
        <div className=' md:w-[calc(100vw-250px)]  ml-10 md:ml-[100px] '>
            {children}
            </div>
    </div>
  
   
  )
}
