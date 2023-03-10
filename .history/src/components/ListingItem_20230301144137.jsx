import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md'

export default function ListingItem({listing, id}) {
    console.log(listing?.name);
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow  duration-150 m-[10px] ">
        <img src={listing?.imgUrls[0] } alt='a house'   className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"/>
       <Moment fromNow 
          className="h-[
        {listing.timestamp?.toDate()}
       </Moment>
       <div  className="w-full p-[10px]">
        <div className='flex items-center space-x-1'>
          <MdLocationOn className="h-4 w-4 text-green-600"/>
          <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">{listing?.address}</p>
        </div>
        <p className="font-semibold m-0 text-xl truncate">{listing.name}</p>
        <p className="text-[#457b9d] mt-2 font-semibold">$ {listing.price}</p>
        <div className="flex items-center mt-[10px] space-x-3">
          <div className="flex items-center space-x-1">
            <p className="font-bold text-xs">{listing.bedrooms >1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
          </div>
          <div className="flex items-center space-x-1">
            <p className="font-bold text-xs">{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</p>
          </div>
        </div>
       </div>
        </li>
  )
}
