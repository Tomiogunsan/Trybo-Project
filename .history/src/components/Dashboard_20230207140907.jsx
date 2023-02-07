import React from 'react'
import ProfileSideBar from './ProfileSideBar'

export default function Dashboard({children}) {
  return (
    <div>
        <ProfileSideBar />
        <div></div>{children}
    </div>
  )
}
