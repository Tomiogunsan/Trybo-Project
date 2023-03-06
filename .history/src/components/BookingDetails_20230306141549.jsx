import React from 'react'
import Modal from './UI/Modal'
import {GrFormClose} from 'react-icons/gr'

export default function BookingDetails() {
  return (
    <Modal>
        <GrFormClose className='right-0 top-0 l'/>
        <div className=' mt-8'>
        <h2 className=' font-medium'>Your booking details</h2>
        <p>Select date</p>
        </div>
        
    </Modal>
  )
}
