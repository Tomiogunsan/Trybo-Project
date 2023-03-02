import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase';

export default function Listing() {
    const params = useParams()
    useEffect(()=> {
        async function fetchListing(){
            const docRef = doc(db, 'listings', params.listingId);
        }
        fetchListing()
    }, [])
  return (
    <div>Listing</div>
  )
}

