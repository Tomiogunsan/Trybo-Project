import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md'

export default function ListingItem({listing, id}) {
    console.log(listing?.name);
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow  duration-150 m-[10px] ">
        <img src={listing?.imgUrls[0] } alt='a house'/>
       <Moment fromNow 
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in">
        {listing.timestamp?.toDate()}
       </Moment>
       <div  className="w-full p-[10px]">
        <div className='flex items'>
          <MdLocationOn />
          <p>{listing?.address}</p>
        </div>
        <p>{listing.name}</p>
        <p>{listing.price}</p>
        <div>
          <div>
            <p>{listing.bedrooms >1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
          </div>
          <div>
            <p>{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</p>
          </div>
        </div>
       </div>
        </li>
  )
}
