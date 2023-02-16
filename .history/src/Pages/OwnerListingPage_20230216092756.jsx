import { getAuth } from 'firebase/auth';
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {db} from '../firebase'

export default function OwnerListingPage() {
    const auth = getAuth()
    const [listings, setListings] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchUserListings(){
           
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where("userRef", "==", auth.currentUser.), orderBy("timestamp", "desc"));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc)=>{
                return listings.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            setListings(listings);
            setLoading(false);
        }
        fetchUserListings();
    }, [auth.currentUser.uid])
  return (
    <div>
        {!loading && listings.length > 0 && (
            <>
            <h2>My Listings</h2>
            </>
        )}
    </div>
  )
}
