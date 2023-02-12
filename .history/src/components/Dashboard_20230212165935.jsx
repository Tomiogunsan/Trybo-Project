import React from 'react'
import Container from './Container'
import ProfileSideBar from './ProfileSideBar/ProfileSideBar'

export default function Dashboard({children}) {
  return (
   <Container>
    <div className='md:flex '>
       <div className='sm:hidden md:w-[250px] md:h-[400px] md:ml-10'
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
