import React, { useState } from 'react'
import SubHeader from '../components/SubHeader'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import OtherFormOfAuth from '../components/OtherFormOfAuth'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const[showPassword, setShowPassword] = useState()
  const [formData, setFormData] = useState({
    email:'',
    password: '',
  })
  const {email, password} = formData;
  const navigate = useNavigate();
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
    
  }

   async function handleSubmit(e){
    e.preventDefault()
    console.log('click');
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
       const user = userCredential.user
      if(user){
        navigate('/welcome')
      }
    } catch (error) {
      toast.error('Bad user credentials')
    }
  }
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
         onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="border border-[#556987] p-4 rounded-sm  w-full md:w-[50%] mt-4 mb-4 ">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={onChange}
              className="outline-none w-full"
            />
          </div>

          <div className=" relative border border-[#556987] p-4 rounded-sm mb-6 w-full md:w-[50%] ">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              className="outline-none w-full" 
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
          <p className="text-md  text-[#556987] md:w-[450px]">
            By creating an account, I agree to the Trybo Terms and Conditions
            and Privacy Statement.
          </p>

          <button
            type="submit"
            
            className="bg-blue-600 text-white px-4 w-full md:w-[50%] py-4 mb-2 mt-4 rounded-3xl
           text-lg hover:bg-blue-800"
          >
            Sign in
          </button>
          </form>
          

           <Link to='/forgot-password' className='mb-6 mt-4 border-b-[1px] border-blue-600 text-blue-600'>Forgot password</Link>
          <div className='flex mb-10'>
            <p className='mr-2 text-[#556987]'>Don't have an account?</p>
            <p>
              <Link to="/sign-up" className=' text-red-600 font-semibold hover:text-red-800 transition duration-200 ease-in-out '>Create one</Link>
            </p>
          </div>
          <p className='mb-6 text-[#556987]'>or continue with</p> 
          <OtherFormOfAuth />
          </div>
          </div>
    </>
  )
}
