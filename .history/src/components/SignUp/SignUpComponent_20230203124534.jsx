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

  const [values, setValues] = React.useState({});
 
 const handleChange = event => {
   setValues(prevValues => ({
     ...prevValues,
     // we use the name to tell Formik which key of `values` to update
     [event.target.name]: event.target.value
   });
 }

 
    function validate(values){
      const errors = {};
      if(!values.email){
        errors.email = 'Email is required';
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
      }
      if(!values.firstName) {
        errors.firstName = 'First name is required'
      }
      if(!values.lastName){
        errors.lastName = 'Last name is required'
      }
      if(!values.password && values.password > 8){
        errors.password = 'Password should be more than 8 characters'
      }
      return errors;
    }
    
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  


  


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
        <form onSubmit={formik.handleSubmit}>
        <div  className="border border-[#556987] p-4 rounded-sm  w-full md:w-[50%] mt-4 mb-6 ">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="outline-none"
          />
        </div>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <div className="border border-[#556987] p-4 rounded-sm mb-6 w-full md:w-[50%] ">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formik.values.firstName}
            onChange={formik.onChange}
            className="outline-none"
          />
        </div>
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <div className="border border-[#556987] p-4 rounded-sm mb-6 w-full md:w-[50%]  ">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.onChange}
            className="outline-none"
          />
        </div>
        {formik.errors.lastName ? <div>{formik.errors.lasttName}</div> : null}
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
        {formik.errors.password ? <div>{formik.errors.passwo}</div> : null}
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
        <div className="flex space-x-4 mb-4">
          <BsApple className="text-xl" />
          <AiFillFacebook className="text-blue-800 text-xl" />
          <FcGoogle className="text-xl" />
        </div>
      </div>
    </div>
  )
}
