import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Booking() {
    const navigate = useNavigate()
    function handleSearch(){
        navigate('/listing')
    }
  return (
    <div>
      <form className="flex flex-col lg:flex-row justify-center items-center rounded-3xl md:w-[50%] md:mx-auto lg:w-[800px] lg:mx-auto bg-white text-black mx-4 md:m-11">
        <div className="flex  gap-2 items-center my-2 py-2 lg:border-r-2 pr-2 text-[#404040]">
            <label className=" text-gray-400"> Add destination</label>
          <input placeholder="Check in" className='border-[1px] py-2 px-2' />
        </div>
        <div className="flex  pl-4 items-center lg:border-r-2 pr-4 p-2 text-[#404040]">
          <input placeholder="Check out" />
        </div>
        <div className="pl-4 p-2 w-full md:w-[50%] lg:w-[25%] ">
          <button 
          onClick={handleSearch}
          className="w-full px-6 text-lg rounded-md lg:rounded-full bg-blue-700 text-white p-2 hover:bg-blue-900">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
