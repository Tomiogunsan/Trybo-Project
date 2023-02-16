import { collection, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import {db} from '../firebase'

export default function OwnerListingPage() {
    useEffect(() => {
        async function fetchUserListings(){
            const listingRef = collection(db, "listings");
            const q = query
        }
        fetchUserListings();
    }, [])
  return (
    <div>

    </div>
  )
}
