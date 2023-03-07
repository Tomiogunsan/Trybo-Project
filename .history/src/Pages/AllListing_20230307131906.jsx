import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import SubHeader from '../components/SubHeader'
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
    <>
    <SubHeader />
    <Container>
      {homeListing.map((listing, index) => (
        <div className='grid grid-cols-3 text-[#404040]'>
          <div className='ml-10w-[80%]'>
            <img 
            src={listing.imgUrls[0]} 
            alt='An apartment'
            className=' rounded-lg mb-4'
             />
          </div>
          <div>
            <div className='flex flex-col mt-10  bg-red-600'>
            <p className='text-2xl pb-2'>{listing.name}</p>
            <div className='flex text-gray-600'>
            <p>{(listing.bedrooms === '1' ) ? 'Sleep up to 2' :
             (listing.bedrooms === '2') ? 'Sleep up to 4' : 'Sleep up to 6'
             } .</p>
              <p className='ml-2'>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"} .</p>
              <p className='ml-2'>{listing.bathroom > 1 ? `${listing.bathroom} Bathrooms` : "1 Bathroom"}</p>
              
            </div>
            <p className='text-right mt-20 text-sm text-gray-500'>Free cancellation up to 7 days</p>
            <div className='flex justify-between mt-6'>
              <div>a</div>
              <div>${listing.price} per Night</div>
            </div>
            </div>
            
          </div>

        <div>
             <p>{listing.price}</p>
        </div>
        </div>

      ))}
      </Container>
      </>
  )
}
