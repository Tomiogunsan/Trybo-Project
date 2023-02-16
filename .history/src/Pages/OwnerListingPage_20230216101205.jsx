import { getAuth } from 'firebase/auth';
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import ListingItem from '../components/ListingItem';
import {db} from '../firebase'

export default function OwnerListingPage() {
    const auth = getAuth()
    log
    console.log(auth?.currentUser?.uid);
    const [listings, setListings] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchUserListings(){
           setLoading(true)
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where("userRef", "==", auth?.currentUser?.uid), orderBy("timestamp", "desc"));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc)=>{
                return listings.push({
                    id: doc?.id,
                    data: doc?.data(),
                })
            })
            setListings(listings);
            setLoading(false);
        }
        fetchUserListings();
    }, [auth?.currentUser?.uid])
  return (
    <div>
        {!loading && listings.length > 0 && (
            <>
            <h2 className='text-2xl text-center font-semibold'>
                My Listings
                </h2>
                <ul>
                    {
                        listings?.map((listing) => (
                            <ListingItem 
                            key={listing?.id}
                            id={listing?.id}
                            listing={listing?.data}
                            />
                        ))
                    }
                </ul>
            </>
        )}
    </div>
  )
}
