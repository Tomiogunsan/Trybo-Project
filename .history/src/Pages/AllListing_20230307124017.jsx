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
       
        setHomeListing(
          querySnap.docs.map((doc) => {
           
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
    <div>
      {homeListing.map((listing, index) => (
        <div className='flex'>
          <div>
            <img src={listing.imgUrls[0]} alt=
          </div>
          <div>
            <div className='flex flex-col'>
            <p>{listing.name}</p>
            <div>
            <p>{(listing.bedrooms === '1' ) ? 'Sleep up to 2' :
             (listing.bedrooms === '2') ? 'Sleep up to 4' : 'Sleep up to 6'
             }</p>
              <p>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
              <p>{listing.bathroom > 1 ? `${listing.bathroom} Bathrooms` : "1 Bathroom"}</p>
              
            </div>
            </div>
            
          </div>

        </div>

      ))}
      </div>
  )
}
