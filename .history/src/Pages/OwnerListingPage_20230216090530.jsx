import { collection, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import {db} from '../firebase'

export default function OwnerListingPage() {
    const auth = get
    useEffect(() => {
        async function fetchUserListings(){
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where("userRef", "==", auth.currentUser.uid))
        }
        fetchUserListings();
    }, [])
  return (
    <div>

    </div>
  )
}
