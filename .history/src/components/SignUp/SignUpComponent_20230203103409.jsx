import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export default function SignUpComponent() {
  const [showPassword, setShowPassword] = useState(false)
  // const [formData, setFormData] = useState({
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  //   password: '',
    
  // })
  // const { email, firstName, lastName, password } = formData
  // function onChange(event) {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [event.target.id]: event.target.value,
  //   }))
  //   console.log(event.target.value)
  // }

  // function onSubmit(e){
  //   e.preventDefault();
    
   
  // }

  function validateForm(){
    function validate(values){
      const errors = {};
      if(!values.email){
        errors.email = 'Email is required';
      }
      if(!values.firstName) {
        errors.firstName = 'First name is required'
      }
      if(!values.lastName){
        errors.lastName = 'Last name is required'
      }
      if(!values.password){
        error.password = 'Password'
      }
    }
  }


  


  return (
    <div 
    className="md:shadow-xl md:rounded-lg md:max-w-4xl md:mx-auto mt-8">
      <div className="flex flex-col items-center justify-center  mt-8 px-6">
        <h2
          className="font-semibold text-[#1a1e24] text-[25px] 
      mb-6 "
        >
          Create an account
        </h2>

        <form onSubmit={onSubmit} className="border border-[#556987] p-4 rounded-sm  w-full md:w-[50%] mt-4 mb-6 ">
          <input
            type="email"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={onChange}
            className="outline-none"
          />
        </form>

        <div className="border border-[#556987] p-4 rounded-sm mb-6 w-full md:w-[50%] ">
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            value={firstName}
            onChange={onChange}
            className="outline-none"
          />
        </div>

        <div className="border border-[#556987] p-4 rounded-sm mb-6 w-full md:w-[50%]  ">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
            className="outline-none"
          />
        </div>

        <div className=" relative border border-[#556987] p-4 rounded-sm mb-8 w-full md:w-[50%] ">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
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

        <p className="text-md text-center">
          By creating an account, I agree to the Trybo Terms and Conditions and
          Privacy Statement.
        </p>

        <button type='submit'
          className="bg-blue-600 text-white px-4 w-[50%] py-4 mb-2 mt-4 rounded-3xl
           text-lg hover:bg-blue-800"
        >
          Continue
        </button>
        <div className="flex py-4">
          <p>
            Already have an account?
            <Link to="/sign-in" className="text-blue-600 px-2">
              Sign in
            </Link>
          </p>
        </div>
        <p className="text-sm py-4">or continue with</p>
        <div className="flex space-x-4 mb-4">
          <BsApple className="text-xl" />
          <AiFillFacebook className="text-blue-800 text-xl" />
          <FcGoogle className="text-xl" />
        </div>
      </div>
    </div>
  )
}
