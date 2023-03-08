import React from 'react'
import Modal from './UI/Modal'
import {GrFormClose} from 'react-icons/gr'
import { FcCalendar } from 'react-icons/fc'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

export default function BookingDetails(props) {
  useli
  return (
    <Modal>
        <div className='w-full  flex justify-end'>
        <GrFormClose className='text-3xl'
        onClick={props.onClose}  
        />
        </div>
        
        <div className=' mt-8 flex flex-col pl-8'>
        <h2 className=' font-medium text-lg pb-2'>Your booking details</h2>
        <RangePicker 
        picker='date'
         onChange={(value)=> {
          const text = value.map((item)=> {
           
          
            return item.format()



          })
          console.log(text)
          const start = moment(text[0])
          const end = moment(text[1])
          const numberOfDays = end.diff(start, 'days')
          console.log(numberOfDays)
        } }
        className='px-4 py-4 border '
        />
        </div>
        <div className='flex gap-6 px-8 mt-4 mb-2'>
          <FcCalendar className='text-5xl'/>
          <div>
          <p className='font-semibold'>Get a 50% refund</p>
          <p>when you cancel up until 7 days before check-in </p>
          </div>
          </div>
          <div className=' flex flex-col items-center justify-center mt-10 mb-4'>
          <button className='uppercase rounded-md bg-blue-800 hover:bg-blue-900 cursor-pointer px-20 py-2 text-white'>Request to book</button>
          <p className='text-gray-500 mt-2 text-sm'>You won't be charged yet</p>
          </div>
          
    </Modal>
  )
}
