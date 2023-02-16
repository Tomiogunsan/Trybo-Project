import { collection, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import {db} from '../firebase'

export default function OwnerListingPage() {
    useEffect(() => {
        async function fetchUserListings(){
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where())
        }
        fetchUserListings();
    }, [])
  return (
    <div>

    </div>
  )
}
