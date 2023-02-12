import React from 'react'
import Container from './Container'
import ProfileSideBar from './ProfileSideBar/ProfileSideBar'

export default function Dashboard({children}) {
  return (
   <Container>
    <div className='flex '>
       <div className='hidden md:w-[250px] h-[400px] ml-10'
       >
        <ProfileSideBar />
        </div> 
        <div className=' w-[calc(100vw-250px)] ml-[200px] '>
            {children}
            </div>
    </div>
   </Container>
   
  )
}
