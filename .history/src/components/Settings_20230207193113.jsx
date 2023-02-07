import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Settings() {
    const [email, setEmail] = useState('')
  function onChange (e){
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth()
    
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent')

    } catch (error) {
      toast.error('Could not send reset password')
    }
  }
  return (
    <form
         onSubmit={onSubmit}
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
            <button
            type="submit"
            className="bg-blue-600 text-white px-4 w-full md:w-[50%] py-4 mb-8 mt-4 rounded-3xl
           text-lg hover:bg-blue-800 "
          >
            Send reset link
          </button>
            </form>
  )
}
