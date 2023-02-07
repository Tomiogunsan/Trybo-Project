import React from 'react'
import ProfileSideBar from './ProfileSideBar'

export default function Dashboard({children}) {
  return (
    <div className='flex'>
       <div className='w-[250px] h-full'
       ><ProfileSideBar /></div> 
        <div>{children}</div>
    </div>
  )
}
