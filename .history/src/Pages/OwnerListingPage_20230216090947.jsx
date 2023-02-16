import { getAuth } from 'firebase/auth';
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {db} from '../firebase'

export default function OwnerListingPage() {
    const auth = getAuth()
    const [listings, setListings] = useState()
    useEffect(() => {
        async function fetchUserListings(){
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where("userRef", "==", auth.currentUser.uid), orderBy("timestamp", "desc"));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc)=>{
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
        }
        fetchUserListings();
    }, [])
  return (
    <div>

    </div>
  )
}
