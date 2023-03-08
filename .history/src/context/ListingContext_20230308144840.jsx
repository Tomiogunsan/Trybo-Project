import React, { createContext, useMemo, useState } from 'react'


const ListingContext = createContext({

})
export function ListingProvider({children}) {
    const [bookingDetails, setBookingDetails] = useState({
        roomName: '',
        numberOfNight: '',
        price: '',
      })


      const isValue = useMemo(()=> {
        function handleBookingDetailsChange(name, value){
            setBookingDetails({
              ...bookingDetails,
              [name]:value
            })
          }
          return {}
      }, [bookingDetails])

      
  return (
    <ListingContext.Provider value={{bookingDetails, setBookingDetails}}>{children} </ListingContext.Provider>
  )
}
export default ListingContext;