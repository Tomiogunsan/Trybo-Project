import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-[127] mx-auto'>
        {children}
    </div>
  )
}
