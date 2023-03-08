import React from 'react'
import Container from './Container'
import ProfileSideBar from './ProfileSideBar/ProfileSideBar'

export default function Dashboard({children}) {
  return (
  //  <Container>
    <div className='md:flex w-[80%] mt-16'>
       <div className='invisible md:visible md:w-[250px] md:h-[400px] ml-10 '
       >
        <ProfileSideBar />
        </div> 
        <div className=' md:w-[calc(100vw-250px)]  ml-10 md:ml-[100px] '>
            {children}
            </div>
    </div>
  //  {/* </Container> */}
   
  )
}
