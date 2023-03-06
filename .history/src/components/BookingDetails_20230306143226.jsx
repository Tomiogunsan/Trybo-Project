import React from 'react'
import Modal from './UI/Modal'
import {GrFormClose} from 'react-icons/gr'
import { FcCalendar } from 'react-icons/fc'

export default function BookingDetails() {
  return (
    <Modal>
        <GrFormClose className='text-2xl '/>
        <div className=' mt-8 flex flex-col pl-8'>
        <h2 className=' font-medium text-lg pb-2'>Your booking details</h2>
        <input 
        placeholder='Select date' 
        className='px-4 py-4 border w-[150px]'
        />
        </div>
        <div className='flex gap-6 px-8 mt-4 mb-2'>
          <FcCalendar className='text-5xl'/>
          <div>
          <p className='font-semibold'>Get a 50% refund</p>
          <p>when you cancel up until 7 days before check-in </p>
          </div>
          </div>
          <div className=' flex items-center justify-center mt-6 mb-4'>
          <button className='uppercase bg-blue-800 px-18 py-2 text-white'>Request to book</button>
          </div>
          
    </Modal>
  )
}
