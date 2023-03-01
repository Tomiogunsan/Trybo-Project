import { getAuth } from 'firebase/auth';
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import {db} from '../firebase'

export default function OwnerListing() {
    const auth = getAuth()
    
    console.log(auth?.currentUser?.uid);
    const [listings, setListings] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchUserListings(){
           
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where("userRef", "==", auth?.currentUser?.uid), orderBy("timestamp", "desc"));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc)=>{
                return listings?.push({
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
    <>
        {!loading && listings?.length > 0 && (
            <div>
            <h2 className='text-3xl font-semibold mb-8'>
                My Listings
                </h2>
                <ul>
                {
                    listings.map((listing) => (
                        <li key={listing.id}>
                            <Link>
                                <img src
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        )}
    </>
  )
}
