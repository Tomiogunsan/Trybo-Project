import React from 'react'

export default function ListingItem({listing, id}) {
    console.log(listing?.name);
  return (
    <li>
        {listing?.name}
        <p>{id}</p>
        </li>
  )
}
