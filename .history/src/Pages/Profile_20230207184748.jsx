import React from 'react'
import {BsFillPersonFill } from 'react-icons/bs'
import Dashboard from '../components/Dashboard'


export default function Profile() {
  return (
    
        <Dashboard>
            <div>
                {/* profile section */}
                <section>
                    <h2 className='text-3xl mb-8 font-semibold capitalize'>Profile</h2>
                    <div className='bg-[#91a3b0] inline-block rounded-full p-4 '>
                    <BsFillPersonFill  
                    className='text-5xl text-[#f5f5f5]'/>
                    </div>
                    <p>Basics</p>
                    <form >
                        <input type='text' id='name' disabled 
                        className='w-full bg-blac px-4 py-4 border-[1px] border-[#556987] rounded-md'
                        />
                        <input type='email' id='email' disabled 
                        />

                    </form>

                   
                </section>
            </div>
        </Dashboard>
    
  )
}
