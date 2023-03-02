import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function ListingItem({listing, id}) {
    console.log(listing?.name);
  return (
    <li>
        <img src={listing?.imgUrls[0] } alt='a house'/>
       <Moment from>
        {listing.timestamp?.toDate()}
       </Moment>
        </li>
  )
}