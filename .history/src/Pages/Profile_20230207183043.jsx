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
                    <div>
                    <BsFillPersonFill  
                    className='bg-[#778899] text-4xl '/>
                    </div>
                   
                </section>
            </div>
        </Dashboard>
    
  )
}
