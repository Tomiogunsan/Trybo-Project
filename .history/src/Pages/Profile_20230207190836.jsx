import React from 'react'
import {BsFillPersonFill } from 'react-icons/bs'
import Dashboard from '../components/Dashboard'
import {getAuth} from 'fire'


export default function Profile() {
    const auth = getAuth()
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
                        
                            <p className='mt-4 text-lg'>Do you want to change your name?
                            <span className='text-blue-600 ml-4 font-semibold'>
                                Edit
                            </span>
                            </p>
                            <p className='mt-8 text-lg font-semibold text-blue-600'>Sign out</p>
                        

                    </form>

                   
                </section>

                {/* verification section */}
                <section className='mt-16'>
                <h2 className='text-3xl mb-8 font-semibold capitalize'>Verifications</h2>
                <p className='font-semibold text-lg'>Your current verifications</p>

                </section>

                <section>

                </section>
            </div>
        </Dashboard>
    
  )
}
