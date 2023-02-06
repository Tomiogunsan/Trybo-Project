import React from 'react'
import SubHeader from '../components/SubHeader'

export default function ForgetPassword() {
  const [email, setEmail] = useState('')
  function onChange (e){
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault
  }
  return (
    <>
    <SubHeader />
    <div className="md:shadow-xl md:rounded-lg md:max-w-4xl md:mx-auto mt-8">
      <div className="flex flex-col items-center justify-center  mt-8 px-6">
        <h2
          className="font-semibold text-[#1a1e24] text-[25px] 
      mb-6 mr-[100px]"
        >
          Reset your password
        </h2>
        <p className="text-md  text-[#556987] md:w-[450px] md:ml-6">
        Enter your email, and we’ll send you a link to reset your password.
          </p>
        <form
         
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
            </div>
            </div>
        
    </>
  )
}
