import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../Assets/trybo-logo.png";
import {BsPerson, BsPersonPlus} from "react-icons/bs"


export default function Navbar() {
  return (
    <div className=' w-full flex justify-between items-center absolute text-black z-[1] bg-white/80 h-16  '>
        <div >
            <img src={logo} 
            alt='logo'
            className=' w-[50%] '
            />

        </div>

       
            <ul className='flex '>
                <NavLink to='/sign-in'>
                    <li className='flex items-center'>
                        <BsPerson  className='text-blue-900 text-lg'/>
                        Log In
                    </li>
                </NavLink>
                <NavLink to='/sign-up'>
                    <li>
                        <BsPersonPlus />
                        Sign up
                    </li>
                </NavLink>
                <NavLink to='/list-property'>
                    <li>
                      List your Property 
                      
                    </li>
                </NavLink>

            </ul>
       
        </div>
  )
}
