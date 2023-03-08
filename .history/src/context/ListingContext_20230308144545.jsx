import React, { createContext, useState } from 'react'


const ListingContext = createContext({

})
export function ListingProvider({children}) {
    const [bookingDetails, setBookingDetails] = useState({
        roomName: '',
        numberOfNight: '',
        price: '',
      })

      
      function handleBookingDetailsChange(name, value){
        setBookingDetails({
          ...bookingDetails,
          [name]:value
        })
      }
  return (
    <ListingContext.Provider value={{bookingDetails, setBookingDetails}}>{children} </ListingContext.Provider>
  )
}
export default ListingContext;