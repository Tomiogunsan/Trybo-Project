import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Listing() {
    const params = useParams()
    useEffect(()=> {
        async function fetchListing(){
            const docRef = doc(db, )
        }
        fetchListing()
    }, [])
  return (
    <div>Listing</div>
  )
}

