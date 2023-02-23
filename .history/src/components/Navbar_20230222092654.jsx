import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../Assets/trybo-logo.png";
import {BsPerson, BsPersonPlus} from "react-icons/bs"


export default function Navbar() {
  return (
    <div className=' w-full flex justify-between items-center absolute text-blue-900 font-medium z-[1] bg-gray-200/70 h-16  '>
        <div >
            <img src={logo} 
            alt='logo'
            className=' w-[50%] '
            />

        </div>

       
            <ul className='flex '>
                <NavLink to='/sign-in' className='mr-6'>
                    <li className='flex items-center text-md'>
                        <BsPerson  className='text-blue-900 text-xl mr-2'/>
                        Log In
                    </li>
                </NavLink>
                <NavLink to='/sign-up' className='mr-6'>
                    <li className='flex items-center text-md'>
                        <BsPersonPlus className='text-blue-900 text-xl mr-2'/>
                        Sign up
                    </li>
                </NavLink>
                <NavLink to='/list-property' className='mr-6'>
                    <li className='border-[1px] border-blue-700 px-'>
                      List your Property 
                      
                    </li>
                </NavLink>

            </ul>
       
        </div>
  )
}
