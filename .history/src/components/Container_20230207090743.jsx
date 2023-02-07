import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-[12] mx-auto'>
        {children}
    </div>
  )
}
