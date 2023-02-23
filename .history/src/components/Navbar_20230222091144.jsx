import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../Assets/trybo-logo.png";
import {BsPerson, BsPersonPlus} from "react-icons/bs"


export default function Navbar() {
  return (
    <div className=' w-full absolute text-black z-[1] bg-white/80 h-16  '>
        <div >
            <img src={logo} 
            alt='logo'
            className=' w-[12%] '
            />

        </div>

        <div>
            <ul>
                <NavLink to='/sign-in'>
                    <li>
                        <BsPerson />
                        Log In
                    </li>
                </NavLink>
                <NavLink to='/sign'>
                    <li>
                        <BsPersonPlus />
                        Sign up
                    </li>
                </NavLink>
                <NavLink>
                    <li>
                      List your Property 
                      
                    </li>
                </NavLink>

            </ul>
        </div>
        </div>
  )
}
