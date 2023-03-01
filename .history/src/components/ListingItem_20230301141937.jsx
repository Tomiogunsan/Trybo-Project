import React from 'react'
import { Link } from 'react-router-dom';

export default function ListingItem({listing, id}) {
    console.log(listing?.name);
  return (
    <li>
        <img src={listing?.imgUrls[0] } alt='a house'/>
       <Moment>
        {list}
       </Moment>
        </li>
  )
}
