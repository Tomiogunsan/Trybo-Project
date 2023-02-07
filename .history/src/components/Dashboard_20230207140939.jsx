import React from 'react'
import ProfileSideBar from './ProfileSideBar'

export default function Dashboard({children}) {
  return (
    <div clas>
        <ProfileSideBar />
        <div>{children}</div>
    </div>
  )
}
