import React, { useState } from 'react'


export default function Booking() {
    
  return (
    <div >
        <form className='flex flex-col lg:flex-row justify-center items-center rounded-lg md:w-[50%] md:mx-auto lg:w-[900px] lg:mx-auto bg-white text-black mx-4 md:m-11' >
            <div className='flex  gap-2 items-center my-2 py-2 lg:border-r-2 pr-2 text-[#404040]'>
                <label>Add destination</label>
                <input 
                placeholder='Check in'
                className=' w-[40%] rounded-md p-2 border-gray-300 border-[1px]  outline-0'
                />
               
            </div>
            <div className='flex gap-2 pl-4 items-center lg:border-r-2 pr-4 p-2 text-[#404040]'>
                <input 
                placeholder='Check'
                />
                {/* <DatePicker
                className="rmdp-mobile"
                mobileLabels={{
                OK: "Accept",
                CANCEL: "Close",
                }}
                range
                minDate="2023/1/1"
                maxDate={new DateObject().add(31, "days")}
                /> */}
                
                {/* <input className='border rounded-md p-2' type='date' /> */}
            </div>
            <div className='pl-4 p-2 w-full md:w-[50%] lg:w-[25%] ' >
                
                <button className='w-full px-6 text-lg rounded-md lg:rounded-full bg-blue-700 text-white p-2 hover:bg-blue-900'>Search</button>
            </div>

        </form>
    </div>
  )
}
