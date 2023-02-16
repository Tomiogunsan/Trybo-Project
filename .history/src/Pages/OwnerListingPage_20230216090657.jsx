import { getAuth } from 'firebase/auth';
import { collection, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import {db} from '../firebase'

export default function OwnerListingPage() {
    const auth = getAuth()
    useEffect(() => {
        async function fetchUserListings(){
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where("userRef", "==", auth.currentUser.uid), orderBy("timestamp", "desc"));
            
        }
        fetchUserListings();
    }, [])
  return (
    <div>

    </div>
  )
}
