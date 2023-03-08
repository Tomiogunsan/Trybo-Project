import React, { createContext, useState } from 'react'


const ListingContext = createContext({

})
export default function ListingProvider() {
    const [bookingDetails, setBookingDetails] = useState({
        roomName: '',
        numberOfNight: '',
        price: '',
      })
  return (
    <ListingContext.Provider value=>ListingContext </ListingContext.Provider>
  )
}
