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
          <div className='ml-10 bg-black w-[60%]'>
            <img 
            src={listing.imgUrls[0]} 
            alt='An apartment'
            className=' rounded-lg mb-4'
             />
          </div>
          <div>
            <div className='flex flex-col mt-10 w-[60%] bg-red-600'>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63041.17342008881!2d7.4711039999999995!3d9.0570752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba6acded305%3A0x835bd8ee7fa14ae7!2sFraser%20Suites%20Abuja!5e0!3m2!1sen!2sng!4v1678191083286!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>

      ))}
      </Container>
      </>
  )
}
