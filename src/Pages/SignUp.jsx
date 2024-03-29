import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SubHeader from '../components/SubHeader'
import { db } from '../firebase'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import OtherFormOfAuth from '../components/OtherFormOfAuth'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Circles } from 'react-loader-spinner'

export default function SignUpComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [validationIsFired, setValidationIsFired] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    email: '',
    name: '',

    password: '',
  })
  const { email, name, password } = formData
  const navigate = useNavigate()

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
   
  }

  function validation(data) {
    setValidationIsFired(true)
    let validated = true
    let error = {}
    Object.keys(data)?.forEach((field) => {
      if (data[field] === '') {
        error[field] = `${field} is required`
        validated = false
      }
    })
    setErrors(error)
    
    return validated
  }

  useEffect(() => {
    if (validationIsFired) {
      validation(formData)
    } else {
      return
    }
  }, [validationIsFired, formData])

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      updateProfile(auth.currentUser, {
        displayName: name,
      })
      const user = userCredential.user
      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      setLoading(true)
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      setLoading(false)
     

      navigate('/')
    } catch (error) {
      toast.error('Something went wrong with the registration')
    }
  }

  return (
    <div>
      <SubHeader />
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
            className="flex flex-col items-center justify-center  w-full"
          >
            <div className=" mt-4 mb-[12px] border border-[#556987] p-4 rounded-sm  w-full  md:w-[50%]">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={handleChange}
                className="outline-none w-full "
              />
              
            </div>
            {errors.email && (
                <span className="text-red-600 mb-2 text-sm capitalize">
                  {errors.email}
                </span>
              )}

            <div className="border border-[#556987] mb-[12px] p-4 rounded-sm  w-full md:w-[50%] ">
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                className="outline-none w-full"
              />
             
            </div>
            {errors.name && (
                <span className="text-red-600 mb-2 text-sm capitalize">
                  {errors.name}
                </span>
              )}

            <div className=" relative mb-[12px] border border-[#556987] p-4 rounded-sm  w-full md:w-[50%] ">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
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
            {errors.password && (
                <p className="text-red-600 mb-4 text-sm capitalize">
                  {errors.password}
                </p>
              )}

            <p className="text-md text-center">
              By creating an account, I agree to the Trybo Terms and Conditions
              and Privacy Statement.
            </p>

            <button
            onClick={()=> {
              const dataToValidate = {
                email: formData.email,
                name: formData.name,
                password: formData.password,
              }
              if(validation(dataToValidate)){
                handleSubmit()
              }
            }}
              type="submit"
              className="bg-blue-600 text-white px-4  w-full md:w-[50%] py-4 mb-2 mt-4 rounded-3xl
           text-lg hover:bg-blue-800"
            >
              {loading ? (
                <div className='flex items-center justify-center'>
                <Circles
                  height="20"
                  width="20"
                  color="#ffffff"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
                </div>
              ) : (
                'Continue'
              )}
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
    </div>
  )
}
