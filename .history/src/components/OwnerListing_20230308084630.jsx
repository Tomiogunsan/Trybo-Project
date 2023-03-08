import { getAuth } from 'firebase/auth';
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ListingItem from '../components/ListingItem';
import {db} from '../firebase'

export default function OwnerListing() {
    const auth = getAuth()
    const navigate = useNavigate()
   
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

    async function onDelete(listingID){
        if(window.confirm("Are you sure you want to delete?")){
            await deleteDoc(doc(db, 'listings', listingID))
            const updatedListing = listings.filter((listing) => listing.id !== listingID);
            setListings(updatedListing)
            toast.success("Successfully deleted the listing")
        }
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
                <ul className='grid md:grid-cols-3 lg:grid-cols-4'>
                {
                    listings?.map((listing) => (
                        <ListingItem
                  key={listing?.id}
                  id={listing?.id}
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
