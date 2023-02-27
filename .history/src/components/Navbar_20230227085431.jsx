import React, { useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../Assets/trybo-logo.png";
import {BsPerson, BsPersonPlus} from "react-icons/bs"
import {getAuth, onAuthStateChanged} from 'firebase/auth'


export default function Navbar() {
    const[pageState, setPageState] = useState('Log in')
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setPageState("Profile")
            }else {
                setPageState('Log in')
            }
        })
    }, [auth])
const page = pageState.toLowerCase().replaceAll('', '-')
  return (
    <div className=' w-full flex justify-between items-center cursor-pointer absolute text-blue-900 font-medium z-[1] bg-white/90 h-16  '>
        <div >
            <img src={logo} 
            alt='logo'
            className=' w-[50%] '
            />

        </div>

       
            <ul className='flex items-center '>
                <NavLink to={page ? '/sign-in' : ''} className='mr-6'>
                    <li className='flex items-center text-md'>
                        <BsPerson  className='text-blue-900 text-xl mr-2'/>
                       {pageState}
                    </li>
                </NavLink>
                <NavLink to='/sign-up' className='mr-6'>
                    <li className='flex items-center text-md'>
                        <BsPersonPlus className='text-blue-900 text-xl mr-2'/>
                        Sign up
                    </li>
                </NavLink>
                <NavLink to='/list-property' className='mr-6'>
                    <li className='border-[1px] border-blue-700 px-4 rounded-full py-2'>
                      List your Property 
                      
                    </li>
                </NavLink>

            </ul>
       
        </div>
  )
}
