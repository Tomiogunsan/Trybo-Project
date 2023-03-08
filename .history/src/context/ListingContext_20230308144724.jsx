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
        
      })
      
  return (
    <ListingContext.Provider value={{bookingDetails, setBookingDetails}}>{children} </ListingContext.Provider>
  )
}
export default ListingContext;