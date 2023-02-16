import React from 'react'

export default function ListingItem({listing, id}) {
    console.log(listing.name);
  return (
    <div>{listing?.name}</div>
  )
}
