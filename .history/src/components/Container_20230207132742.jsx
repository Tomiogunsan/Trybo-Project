import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-[1580px] mx-auto mt-20'>
        {children}
    </div>
  )
}
