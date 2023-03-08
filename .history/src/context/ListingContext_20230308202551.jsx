import React, { createContext, useMemo, useState } from 'react'


const ListingContext = createContext({

})
export function ListingProvider({children}) {
    const [bookingDetails, setBookingDetails] = useState({
        roomName: '',
        numberOfNight: '',
        price: '',
        dateRange:[],
      })


      const isValue = useMemo(()=> {
        function handleBookingDetailsChange(name, value){
            setBookingDetails({
              ...bookingDetails,
              [name]:value
            })
          }
          return {handleBookingDetailsChange,bookingDetails, setBookingDetails}
      }, [bookingDetails])

      
  return (
    <ListingContext.Provider value={isValue}>{children} </ListingContext.Provider>
  )
}
export default ListingContext;