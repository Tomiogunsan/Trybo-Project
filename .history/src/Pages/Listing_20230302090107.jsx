import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase';

export default function Listing() {
    const params = useParams()
    const [listing, setListing] = use
    useEffect(()=> {
        async function fetchListing(){
            const docRef = doc(db, 'listings', params.listingId);
            const docSnap = await getDoc(docRef)
            if(docSnap.exists())
        }
        fetchListing()
    }, [])
  return (
    <div>Listing</div>
  )
}

