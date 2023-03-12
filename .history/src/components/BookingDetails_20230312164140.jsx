import React from 'react'
import Modal from './UI/Modal'
import { GrFormClose } from 'react-icons/gr'
import { FcCalendar } from 'react-icons/fc'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import useListing from '../hooks/useListing'
import { PaystackButton } from 'react-paystack';

const { RangePicker } = DatePicker




export default function BookingDetails(props) {
  const { bookingDetails, setBookingDetails } = useListing()
  console.log(bookingDetails);
 
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: bookingDetails.price * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_6c57103bc305633c4972808d11b6ecda397293bb',
  };
console.log(config.publicKey);
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
    ...config,
    text: 'Pay Now',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};
  return (
    <Modal>
      <div className="w-full  flex justify-end">
        <GrFormClose className="text-3xl" onClick={props.onClose} />
      </div>

      <div className=" mt-8 flex flex-col pl-8">
        <h2 className=" font-medium text-lg pb-2">Your booking details</h2>
        <RangePicker
          picker="date"
          onChange={(value) => {
            const date = value.map((item) => {
              return item.format()
            })
            console.log(date)
            const start = moment(date[0])
            const end = moment(date[1])
            const numberOfDays = end.diff(start, 'days') 
            console.log(numberOfDays)
            setBookingDetails({
              ...bookingDetails,
              numberOfNight: numberOfDays,
              price: Number(bookingDetails.price) * numberOfDays,
              dateRange: date
            })
            
          }}
          className="px-4 py-4 border "
        />
      </div>
      <div className="flex gap-6 px-8 mt-4 mb-2">
        <FcCalendar className="text-5xl" />
        <div>
          <p className="font-semibold">Get a 50% refund</p>
          <p>when you cancel up until 7 days before check-in </p>
        </div>
      </div>
     {bookingDetails.numberOfNight > 0 && 
     <div>
     <p>{bookingDetails.roomName}</p>
     <p>{bookingDetails.numberOfNight > 1 ? `${bookingDetails.numberOfNight} Nights` :} Nights for  {bookingDetails.price}</p>

   </div>
     } 
{ bookingDetails.numberOfNight > 0 &&
      <div className=" flex flex-col items-center justify-center mt-10 mb-4">
        <PaystackButton 
        {...componentProps}
        className="uppercase rounded-md bg-blue-800 hover:bg-blue-900 cursor-pointer px-20 py-2 text-white">
          Pay now
        </PaystackButton>
        <p className="text-gray-500 mt-2 text-sm">You won't be charged yet</p>
      </div>
}
    </Modal>
  )
}
