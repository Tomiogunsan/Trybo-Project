import React from 'react'
import { Calendar } from "react-multi-date-picker"

export default function Booking() {
    const[]
  return (
    <div >
        <form className='flex flex-col lg:flex-row justify-center items-center rounded-lg md:w-[50%] md:mx-auto lg:w-[900px] lg:mx-auto bg-white text-black mx-4 md:m-11' >
            <div className='flex  gap-2 items-center my-2 py-2 lg:border-r-2 pr-4 text-[#404040]'>
                <label>Add destination</label>
                <select className=' rounded-md p-2 border-blue-700 border-[1px]  outline-0'>
                <option>Grande Antigua</option>
            <option>Key West</option>
            <option>Maldives</option>
            <option>Cozumel</option>
                </select>
            </div>
            <div className='flex gap-2 pl-4 items-center lg:border-r-2 pr-4 p-2 text-[#404040]'>
                <label>Add dates</label>
                <Calendar
  numberOfMonths={2}
  
/> 
                {/* <input className='border rounded-md p-2' type='date' /> */}
            </div>
            <div className='pl-4 p-2 w-full md:w-[50%] lg:w-[25%] ' >
                
                <button className='w-full px-6 text-lg rounded-md lg:rounded-full bg-blue-700 text-white p-2 hover:bg-blue-900'>Search</button>
            </div>

        </form>
    </div>
  )
}
