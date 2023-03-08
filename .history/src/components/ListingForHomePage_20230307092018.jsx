import React, { useEffect, useState } from 'react'
import Container from './Container'
import {collection, getDocs, limit, orderBy, query, where} from 'firebase/firestore'
import {db} from '../firebase'

export default function ListingForHomePage() {
    const[homeListing, setHomeListing] = useState(null)
    useEffect(()=> {
        async function fetchListings(){
            try {
                // get reference
                const listingRef = collection(db, 'listings')
                // create the query
                const q = query(listingRef, orderBy("timestamp", "desc"), limit(4))
                // execute the query
                const querySnap = await getDocs(q)
                const listings = [];
                querySnap.forEach((doc) => {
                    return listings.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                });
                setHomeListing(homeListing)
                console.log(listings)
            } catch (error) {
                console.log(error);
            }
        }
        fetchListings()
    }, [homeListing])
  return (
    <Container>
    <div className='mt-20 text-[#404040]'>
    
      
            {homeListing && homeListing.length > 0 && (
                <div>
                        
                        {homeListing.map((listing, index) => (
                            <div key={index}>
                                <img src={listing.imgUrl[0]} alt='a house' />
                            </div>
                        ))}
                </div>
            )}
        
    </div>
    </Container>
  )
}