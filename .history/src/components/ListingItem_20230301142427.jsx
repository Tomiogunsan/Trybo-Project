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
        <p>{listing}</p>
       </div>
        </li>
  )
}
