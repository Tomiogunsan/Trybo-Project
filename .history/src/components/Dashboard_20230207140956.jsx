import React from 'react'
import ProfileSideBar from './ProfileSideBar'

export default function Dashboard({children}) {
  return (
    <div className='flex'>
       <div></div> <ProfileSideBar />
        <div>{children}</div>
    </div>
  )
}
