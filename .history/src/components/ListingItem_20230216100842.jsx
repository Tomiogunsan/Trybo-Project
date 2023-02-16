import React from 'react'

export default function ListingItem({listing, id}) {
    console.log(listing);
  return (
    <div>{listing.name}</div>
  )
}
