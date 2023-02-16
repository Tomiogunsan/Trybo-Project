import { collection } from 'firebase/firestore';
import React, { useEffect } from 'react'
import {db} from '../firebase'

export default function OwnerListingPage() {
    useEffect(() => {
        async function fetchUserListings(){
            const listingRef = collection(db, )
        }
        fetchUserListings();
    }, [])
  return (
    <div>

    </div>
  )
}
