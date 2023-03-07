import React, { useEffect, useState } from 'react'
import Container from './Container'
import {collection, getDocs, limit, orderBy, query, where} from 'firebase/firestore'
import {db} from '../firebase'

export default function ListingForHomePage() {
    const[homeListing, setHomeListing] = useState([])
    useEffect(()=> {
        async function fetchListings(){
            try {
                // get reference
                const listingRef = collection(db, 'listings')
                // create the query
                const q = query(listingRef, orderBy("timestamp", "desc"), limit(4))
                // execute the query
                const querySnap = await getDocs(q)
                console.log(querySnap);
              setHomeListing(querySnap.docs.map((doc) => {
                console.log(doc.id)
                return({
                    ...doc.data(),
                    id:doc.id
                })
               
              }))
            } catch (error) {
                console.log(error);
            }
        }
        fetchListings()
    }, [])
  return (
    <Container>
    <div className='mt-20 text-[#404040]'>
    <h1 className='text-2xl font-semibold mb-9'>Find spaces that suit your style</h1>
    <div className='grid grid-cols-4 gap-4'>
    {homeListing.map((listing, index) => {

return  <div key={index}>
      <img 
      src={listing?.imgUrls[0]} 
      alt='an apartment'
      className=' transition-transform ease-in hover:scale-105'
      />
      <p className=' font-medium text-lg'>{listing.name}</p>
  </div>
})}
    </div>
 
            
                        
                        
               
        
    </div>
    </Container>
  )
}
