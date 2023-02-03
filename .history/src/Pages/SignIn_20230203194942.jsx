import React, { useState } from 'react'
import SubHeader from '../components/SubHeader'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OtherFormOfAuth from '../components/OtherFormOfAuth'

export default function SignIn() {
  const[showPassword, setShowPassword] = useState()
  return (
    <>
      <SubHeader />
      <div className="md:shadow-xl md:rounded-lg md:max-w-4xl md:mx-auto mt-8">
      <div className="flex flex-col items-center justify-center  mt-8 px-6">
        <h2
          className="font-semibold text-[#1a1e24] text-[25px] 
      mb-6 "
        >
          Sign in
        </h2>
        <form
         
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="border border-[#556987] p-4 rounded-sm  w-full md:w-[50%] mt-4 mb-4 ">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              // value={email}
              // onChange={handleChange}
              className="outline-none"
            />
          </div>

          <div className=" relative border border-[#556987] p-4 rounded-sm mb-6 w-full md:w-[50%] ">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              // value={password}
              // onChange={handleChange}
              className="outline-none"
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="absolute right-3 top-3 text-xl cursor-pointer text-[#556987]"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEye
                className="absolute right-3 top-3 text-xl cursor-pointer text-[#556987]"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>
          </form>
          <p className="text-md text-center">
            By creating an account, I agree to the Trybo Terms and Conditions
            and Privacy Statement.
          </p>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 w-[50%] py-4 mb-2 mt-4 rounded-3xl
           text-lg hover:bg-blue-800"
          >
            Sign in
          </button>

          <Link to='forgot-password'>Forgot password</Link>
          <div className='flex'>
            <p className='mr-4'>Don't have an account?</p>
            <p>
              <Link className='text-sm text-blue-600'>Create one</Link>
            </p>
          </div>
          <p>or continue with</p>
          <OtherFormOfAuth 
          </div>
          </div>
    </>
  )
}
