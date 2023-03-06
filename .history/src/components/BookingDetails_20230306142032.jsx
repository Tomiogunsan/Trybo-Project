import React from 'react'
import Modal from './UI/Modal'
import {GrFormClose} from 'react-icons/gr'

export default function BookingDetails() {
  return (
    <Modal>
        <GrFormClose className='text-2xl '/>
        <div className=' mt-8 flex flex-col items-center'>
        <h2 className=' font-medium text-lg'>Your booking details</h2>
        <input placeholder='Select '/>
        </div>
        
    </Modal>
  )
}
