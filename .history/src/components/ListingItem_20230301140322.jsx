import React from 'react'
import { Link } from 'react-router-dom';

export default function ListingItem({listing, id}) {
    console.log(listing?.name);
  return (
    <li>
        {listing?.name}
        </li>
  )
}
