import React from 'react'
import Container from './Container'
import ProfileSideBar from './ProfileSideBar/ProfileSideBar'

export default function Dashboard({children}) {
  return (
   <Container>
    <div className='flex '>
       <div className=' w-[250px] h-[400px] sm:hidden'
       >
        <ProfileSideBar />
        </div> 
        <div className=' w-full w-[calc(100vw-250px)] ml-[200px]'>
            {children}
            </div>
    </div>
   </Container>
   
  )
}
