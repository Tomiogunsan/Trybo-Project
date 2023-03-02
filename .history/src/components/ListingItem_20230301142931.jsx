import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md'

export default function ListingItem({listing, id}) {
    console.log(listing?.name);
  return (
    <li>
        <img src={listing?.imgUrls[0] } alt='a house'/>
       <Moment fromNow>
        {listing.timestamp?.toDate()}
       </Moment>
       <div>
        <div>
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
            <p>{listing.bathrooms > 1 ? ``}</p>
          </div>
        </div>
       </div>
        </li>
  )
}