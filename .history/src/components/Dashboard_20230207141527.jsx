import React from 'react'
import ProfileSideBar from './ProfileSideBar'

export default function Dashboard({children}) {
  return (
   <C
   <div className='flex'>
       <div className='w-[250px] h-full'
       >
        <ProfileSideBar />
        </div> 
        <div className='w-[calc(100vw-250px)] ml-[200px]'>
            {children}
            </div>
    </div>
  )
}