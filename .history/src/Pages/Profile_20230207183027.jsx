import React from 'react'
import {BsFillPersonFill } from 'react-icons/bs'
import Dashboard from '../components/Dashboard'


export default function Profile() {
  return (
    
        <Dashboard>
            <div>
                {/* profile section */}
                <section>
                    <h2>Profile</h2>
                    
                    <BsFillPersonFill  
                    className='bg-[#778899] text-4xl '/>
                </section>
            </div>
        </Dashboard>
    
  )
}
