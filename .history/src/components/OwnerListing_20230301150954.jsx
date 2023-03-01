import { getAuth } from 'firebase/auth';
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import {db} from '../firebase'

export default function OwnerListing() {
    const auth = getAuth()
    const navigate = useNavigate()
    console.log(auth?.currentUser?.uid);
    const [listings, setListings] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchUserListings(){
           
            const listingRef = collection(db, "listings");
            const q = query(listingRef, where("userRef", "==", auth?.currentUser?.uid), orderBy("timestamp", "desc"));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc)=>{
                return listings?.push({
                    id: doc?.id,
                    data: doc?.data(),
                })
            })
            setListings(listings);
            setLoading(false);
        }
        fetchUserListings();
    }, [auth?.currentUser?.uid])

    function onDelete(listingID){
        if(window)
    }
    function onEdit(listingID){
        navigate(`/edit-listing/${listingID}`)
    }
  return (
    <>
        {!loading && listings?.length > 0 && (
            <div>
            <h2 className='text-3xl font-semibold mb-8'>
                My Listings
                </h2>
                <ul className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    listings?.map((listing) => (
                        <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                  />
                    ))
                }
                </ul>
            </div>
        )}
    </>
  )
}
