import { collection, doc, getDocs, orderBy, query, updateDoc, limit} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import SubHeader from '../components/SubHeader'
import { db } from '../firebase'
import {AiTwotoneStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function AllListing() {
  const[count, setCount] = useState(0)
  const [homeListing, setHomeListing] = useState([])
  const[lastFetchedListing, setLastFetchedListing] = useState(null);

  async function fetchListings() {
    try {
      // get reference
      const listingRef = collection(db, 'listings')
      // create the query
      const q = query(listingRef, orderBy('timestamp', 'desc'), limit(3))
      // execute the query
      const querySnap = await getDocs(q)
     const lastVisible = querySnap.docs[querySnap.docs.length - 1];
     setLastFetchedListing(lastVisible)
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
  useEffect(() => {
   
    fetchListings()
  }, [])

  async function onFetchMoreListings(){
    try {
      const listingRef = collection(db, 'listings')
      // create the query
      const q = query(listingRef, orderBy('timestamp', 'desc'), limit(3));
      const querySnap =  await getDocs(q)
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);
      const listings = [];
      querySnap.fo
    } catch (error) {
      
    }
  }

  async function upvote(listingId){
    const docRef = doc(db, 'listings', listingId)
  
    const listingToBeUpdated = homeListing.find((item) => item.id === listingId)
    console.log(listingToBeUpdated);
    const payload = {
      ...listingToBeUpdated,
      vote: listingToBeUpdated.vote++,
    }
   
    await updateDoc(docRef ,payload)
  }
  return (
    <>
    <SubHeader />
    <div className='max-w-7xl mx-auto mt-6'>
      {homeListing.map((listing, index) => (
        <div className="grid md:grid-cols-2 w-[70%] text-[#404040] mb-6 ">
          <div className='ml-10 w-[80%]'>
            <img 
            src={listing.imgUrls[0]} 
            alt='An apartment'
            className=' rounded-lg mb-4'
             />
          </div>
          <div>
            <div className='flex flex-col mt-6  '>
              
            <Link to={`/listing/${listing.id}`}><p className=' text-xl md:text-2xl pb-2 cursor-pointer '>{listing.name}</p></Link>
            <div className='flex text-gray-600'>
            <p>{(listing.bedrooms === '1' ) ? 'Sleep up to 2' :
             (listing.bedrooms === '2') ? 'Sleep up to 4' : 'Sleep up to 6'
             } .</p>
              <p className='ml-2'>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"} .</p>
              <p className='ml-2'>{listing.bathroom > 1 ? `${listing.bathroom} Bathrooms` : "1 Bathroom"}</p>
              
            </div>
            <p className='text-right mt-10 text-sm text-gray-500'>Free cancellation up to 7 days</p>
            <div className='flex justify-between mt-4'>
              <div className='flex items-center'>
                <AiTwotoneStar className='text-yellow-600 text-xl' onClick={() => upvote(listing?.id)}/>
                <p >{listing?.vote}</p>
              </div>
              <div className='border border-blue-800 px-4 py-2 rounded-lg'>${listing.price} per Night</div>
            </div>
            </div>
            
          </div>

        
        </div>

      ))}
      </div>
      </>
  )
}
