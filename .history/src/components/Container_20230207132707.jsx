import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-[13] mx-auto mt-20'>
        {children}
    </div>
  )
}
