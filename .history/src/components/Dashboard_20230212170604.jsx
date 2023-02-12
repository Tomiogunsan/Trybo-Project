import React from 'react'
import Container from './Container'
import ProfileSideBar from './ProfileSideBar/ProfileSideBar'

export default function Dashboard({children}) {
  return (
   <Container>
    <div className='md:flex '>
       <div className='invisible md:visible md:w-[250px] mdh-[400px] ml-10'
       >
        <ProfileSideBar />
        </div> 
        <div className=' md:w-[calc(100vw-250px)] md:ml-[200px] '>
            {children}
            </div>
    </div>
   </Container>
   
  )
}
