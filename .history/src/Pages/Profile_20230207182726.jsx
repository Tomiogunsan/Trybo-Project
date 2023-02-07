import React from 'react'
import {BsFillPersonFill } from 'reavt'
import Dashboard from '../components/Dashboard'


export default function Profile() {
  return (
    
        <Dashboard>
            <div>
                {/* profile section */}
                <section>
                    <h2>Profile</h2>
                    <BsFillPersonFill />
                </section>
            </div>
        </Dashboard>
    
  )
}
