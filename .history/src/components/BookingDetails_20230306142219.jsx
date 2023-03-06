import React from 'react'
import Modal from './UI/Modal'
import {GrFormClose} from 'react-icons/gr'

export default function BookingDetails() {
  return (
    <Modal>
        <GrFormClose className='text-2xl '/>
        <div className=' mt-8 flex flex-col items-center'>
        <h2 className=' font-medium text-lg pb-2'>Your booking details</h2>
        <input placeholder='Select date' />
        </div>
        <div className='flex gap-6 px-8 mt-4 mb-2'>
          <FcCalendar className='text-5xl'/>
          <div>
          <p className='font-semibold'>Get a 50% refund</p>
          <p>when you cancel up until 7 days before check-in </p>
          </div>
          </div><di
    </Modal>
  )
}
