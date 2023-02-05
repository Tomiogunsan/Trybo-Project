import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'




import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import OtherFormOfAuth from '../OtherFormOfAuth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const[formData, setFormData] = useState(
    {
      email:'',
      firstName: '',
      lastName: '',
      password: '',
    }
  );
  const {email, firstName, lastName, password} = formData;
    const emailRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef()
   


  async function handleSubmit(e) {
    e.preventDefault()
    const enteredEmail = emailRef.current.value;
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    setFormData({
      email: enteredEmail,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      password: enteredPassword,
    })

    console.log(enteredPassword)
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user);
    } catch (error) {
      
    }
    
  }

  return (
   
    <div className="md:shadow-xl md:rounded-lg md:max-w-4xl md:mx-auto mt-8">
      <div className="flex flex-col items-center justify-center  mt-8 px-6">
        <h2
          className="font-semibold text-[#1a1e24] text-[25px] 
      mb-6 "
        >
          Create an account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className=" mt-4 mb-4 border border-[#556987] p-4 rounded-sm  w-full md:w-[50%]">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              ref={emailRef}
              // onChange={handleChange}
              className="outline-none w-full "
            />
          </div>
         

          <div className="border border-[#556987] p-4 rounded-sm mb-4 w-full md:w-[50%] ">
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              ref={firstNameRef}
              // onChange={handleChange}
              className="outline-none w-full"
            />
          </div>

          <div className="border border-[#556987] p-4 rounded-sm mb-4 w-full md:w-[50%]  ">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              ref={lastNameRef}
              // onChange={handleChange}
              className="outline-none w-full"
            />
          </div>


          <div className=" relative border border-[#556987] p-4 rounded-sm mb-6 w-full md:w-[50%] ">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              ref={passwordRef}
              // onChange={handleChange}
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

          <p className="text-md text-center">
            By creating an account, I agree to the Trybo Terms and Conditions
            and Privacy Statement.
          </p>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4  w-full md:w-[50%] py-4 mb-2 mt-4 rounded-3xl
           text-lg hover:bg-blue-800"
          >
            Continue
          </button>
        </form>

        <div className="flex py-4">
          <p>
            Already have an account?
            <Link to="/sign-in" className="text-blue-600 px-2">
              Sign in
            </Link>
          </p>
        </div>
        <p className="text-sm py-4">or continue with</p>
        <OtherFormOfAuth />
        </div>
        </div>

   

   


  

  )
}
