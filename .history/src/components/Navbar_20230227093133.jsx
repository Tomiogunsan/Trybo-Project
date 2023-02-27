import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/trybo-logo.png'
import { BsPerson, BsPersonPlus } from 'react-icons/bs'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [pageState, setPageState] = useState('Log in')
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile')
      } else {
        setPageState('Log in')
      }
    })
  }, [auth])

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=" w-full  h-2flex justify-between items-center cursor-pointer absolute text-blue-900 font-medium z-[1] bg-white/90   ">
      <div>
        <img src={logo} alt="logo" className=" w-[50%] " />
      </div>

      <ul className="flex items-center ">
        <NavLink to={pageState ? '/sign-in' : '/profile'} className="mr-6">
          <li className="flex items-center text-md">
            <BsPerson className="text-blue-900 text-xl mr-2" />
            {pageState}
          </li>
        </NavLink>
        <NavLink to="/sign-up" className="mr-6">
          <li className="flex items-center text-md">
            <BsPersonPlus className="text-blue-900 text-xl mr-2" />
            Sign up
          </li>
        </NavLink>
        <NavLink to="/list-property" className="mr-6">
          <li className="border-[1px] border-blue-700 px-4 rounded-full py-2">
            List your Property
          </li>
        </NavLink>
      </ul>

      {/* harmburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose /> : <HiOutlineMenuAlt4 />}
      </div>

      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute items-center bg-white left-0 top-0 w-full h-full px-4 py-7 flex flex-col '
            : 'absolute right-[-100%]'
        }
      >
        <div>
          <img src={logo} alt="logo" className=" w-[50%] " />
        </div>

        <ul className="flex  flex-col items-center ">
          <NavLink to={pageState ? '/sign-in' : '/profile'} className="mr-6">
            <li className="flex items-center text-md">{pageState}</li>
          </NavLink>
          <NavLink to="/sign-up" className="mr-6">
            <li className="flex items-center text-md">Sign up</li>
          </NavLink>
          <NavLink to="/list-property" className="mr-6">
            <li className="border-[1px] border-blue-700 px-4 rounded-full py-2">
              List your Property
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}
