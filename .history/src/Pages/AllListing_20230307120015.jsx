import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function AllListing() {
  const [homeListing, setHomeListing] = useState([])
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingRef = collection(db, 'listings')
        // create the query
        const q = query(listingRef, orderBy('timestamp', 'desc'))
        // execute the query
        const querySnap = await getDocs(q)
        console.log(querySnap)
        setHomeListing(
          querySnap.docs.map((doc) => {
            console.log(doc.id)
            return {
              ...doc.data(),
              id: doc.id,
            }
          }),
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings()
  }, [])
  return (
    <div>Listing</div>
  )
}
