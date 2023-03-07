import React, { useEffect, useState } from 'react'
import Container from './Container'
import {collection, orderBy, query, where} from 'firebase/firestore'
import {db} from '../firebase'

export default function ListingForHomePage() {
    const[homeListing, setHomeListing] = useState(null)
    useEffect(()=> {
        async function fetchListings(){
            try {
                // get reference
                const listingRef = collection(db, 'listings')
                // create the query
                const q = query(listingRef, orderBy("timestamp", "desc"), limit)
            } catch (error) {
                
            }
        }
        fetchListings()
    }, [])
  return (
    <Container>
    <div className='mt-20 text-[#404040]'>
        <h1 className='text-2xl font-semibold'>Find spaces that suit your style</h1>
    </div>
    </Container>
  )
}
