import React from 'react'
import {BsFillPersonFill } from 'react-icons/bs'
import Dashboard from '../components/Dashboard'


export default function Profile() {
  return (
    
        <Dashboard>
            <div>
                {/* profile section */}
                <section>
                    <h2 className='text-l'>Profile</h2>
                    <div className='bg-[#778899] inline-block rounded-full p-4 '>
                    <BsFillPersonFill  
                    className='text-5xl text-[#f5f5f5]'/>
                    </div>
                   
                </section>
            </div>
        </Dashboard>
    
  )
}
