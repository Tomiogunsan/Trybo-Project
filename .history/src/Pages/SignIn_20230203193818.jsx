import React from 'react'
import SubHeader from '../components/SubHeader'

export default function SignIn() {
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
         
          className="flex flex-col items-center justify-center"
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
          </form>
          </div>
          </div>
    </div>
  )
}
