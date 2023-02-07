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
                    <p className='font-semibold text-lg mt-4'>Basics</p>
                    <form className='flex flex-col py-4' >
                        <input type='text' id='name' disabled 
                        className='w-1/2 mb-4 px-4 py-4 border-[1px] border-[#c0c0c0] rounded-md'
                        />
                        <input type='email' id='email' disabled 
                        className='w-1/2  px-4 py-4 border-[1px] border-[#c0c0c0] rounded-md'
                        />
                        <div className=''> 
                            <p cl>Do you want to change your name?
                            <span className='text-blue-600 ml-4'>
                                Edit
                            </span>
                            </p>
                            <p>Sign out</p>
                        </div>

                    </form>

                   
                </section>
            </div>
        </Dashboard>
    
  )
}
