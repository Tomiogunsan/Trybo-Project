import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase';

export default function Listing() {
    const params = useParams()
    const [listing, setListing] = useState(null)
    useEffect(()=> {
        async function fetchListing(){
            const docRef = doc(db, 'listings', params.listingId);
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setListing(docSnap.data)
            }
        }
        fetchListing()
    }, [])
  return (
    <div>Listing</div>
  )
}

