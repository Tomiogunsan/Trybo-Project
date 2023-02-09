import React, { useState } from 'react'
import {BsFillPersonFill } from 'react-icons/bs'
import Dashboard from '../components/Dashboard'
import {getAuth} from 'firebase/auth'
import Settings from '../components/Settings'
import { useNavigate } from 'react-router-dom'



export default function Profile() {
    const auth = getAuth()
    const navigate = useNavigate()
    const[changeDetail, setChangeDetail] = useState(false)
    const[formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })
    const {name, email } = formData;
   
    function  onLogOut(){
        auth.signOut()
        navigate('/')
    }
    
  return (
    
        <Dashboard>
            <div>
                {/* profile section */}
                <section name='profile'>
                    <h2 className='text-3xl mb-8 font-semibold capitalize'>Profile</h2>
                    <div className='bg-[#91a3b0] inline-block rounded-full p-4 '>
                    <BsFillPersonFill  
                    className='text-5xl text-[#f5f5f5]'/>
                    </div>
                    <p className='font-semibold text-lg mt-4'>Basics</p>
                    <form className='flex flex-col py-4' >
                        <input type='text' id='name' disabled 
                        value={name}
                        className='w-1/2 mb-4 px-4 py-4 border-[1px] border-[#c0c0c0] rounded-md'
                        />
                        <input type='email' id='email' disabled 
                        value={email}
                        className='w-1/2  px-4 py-4 border-[1px] border-[#c0c0c0] rounded-md'
                        />
                        
                            <p className='mt-4 text-lg'>Do you want to change your name?
                            <span onClick={() => setChangeDetail((prevState) => !prev)}
                            className='text-blue-600 ml-4 font-semibold hover:text-blue-800 cursor-pointer'>
                                Edit
                            </span>
                            </p>
                            <p onClick={onLogOut} className='mt-8 text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer'>Sign out</p>
                        

                    </form>

                   
                </section>

                {/* verification section */}
                <section className='mt-16' name="verification">
                <h2 className='text-3xl mb-8 font-semibold capitalize'>Verifications</h2>
                <p className='font-semibold text-lg'>Your current verifications</p>
                    {auth?.currentUser?.emailVerified ? <p>Email is confirmed</p>: <p>Email is not confirmed</p>}
                </section>


{/* settings */}
                <section className=' mt-16 md:mt-[200px]' name="settings">
                <h2 className='text-3xl mb-8 font-semibold capitalize'>Settings</h2>
                <p className='font-semibold text-lg'>Enter your email to change your password</p>
                <Settings />
                </section>
            </div>
        </Dashboard>
    
  )
}