import { collection, doc, getDocs, orderBy, query, updateDoc, limit, startAfter} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import SubHeader from '../components/SubHeader'
import { db } from '../firebase'
import {AiTwotoneStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function AllListing() {
  
  const [homeListing, setHomeListing] = useState([])
  const[lastFetchedListing, setLastFetchedListing] = useState([]);

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
      const q = query(listingRef, 
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListing),
        limit(3));
      const querySnap =  await getDocs(q)
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);
      const listings = querySnap.docs.map((doc) => {
         
        return {
          ...doc.data(),
          id: doc.id,
        }
      })
      setHomeListing((prevState) => [...prevState, ...listings])
      
     
         
    } catch (error) {
      toast.error('Could not fetch listing')
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
    fetchListings()
  }
  return (
    <>
    <SubHeader />
    <div className='md:max-w-7xl md:mx-auto mt-6'>
      {homeListing.map((listing, index) => (
        <div className={`grid md:grid-cols-2 md:w-[70%] text-[#404040] mb-6 ${homeListing.length - 1 === index ? 'border-b-0' : 'border-b-2 border-gray-300'}`}>
          <div className='md:ml-10 ml-4 w-[80%]'>
            <img 
            src={listing.imgUrls[0]} 
            alt='An apartment'
            className=' rounded-lg mb-4'
             />
          </div>
          <div>
            <div className='flex flex-col px-4 md:px-0 md:mt-6  '>
              
            <Link to={`/listing/${listing.id}`}><p className=' text-lg md:text-2xl pb-2 cursor-pointer '>{listing.name}</p></Link>
            <div className='flex  text-gray-600'>
            <p className='text-sm'>{(listing.bedrooms === '1' ) ? 'Sleep up to 2' :
             (listing.bedrooms === '2') ? 'Sleep up to 4' : 'Sleep up to 6'
             }. </p>
              <p className='ml-[4px] text-sm'>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}.</p>
              <p className='ml-[4px] text-sm'>{listing.bathroom > 1 ? `${listing.bathroom} Baths` : "1 Bath"}</p>
              
            </div>
            <p className='md:text-right md:mt-10 mt-[4px] text-sm text-gray-500'>Free cancellation up to 7 days</p>
            <div className='flex lg:justify-between mt-4'>
              <div className='flex items-center'>
                <AiTwotoneStar className='text-yellow-600 text-xl' onClick={() => upvote(listing?.id)}/>
                <p >{listing?.vote}</p>
              </div>
              <div className='lg:border md:border-blue-800 px-4 py-2 rounded-lg'>${listing.price} per Night</div>
            </div>
            </div>
            
          </div>

        
        </div>

      ))}

{lastFetchedListing && (
            <div className="flex justify-center items-center ">
              <button
                onClick={onFetchMoreListings}
                className="bg-blue-800 px-3 py-1.5 text-white  mb-6 mt-4  hover:border-slate-600 rounded-md transition duration-150 ease-in-out"
              >
                Load more
              </button>
            </div>
          )}
      
      </div>
      </>
  )
}
