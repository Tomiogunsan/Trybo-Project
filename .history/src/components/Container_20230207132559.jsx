import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-xl mx-auto mt-20'>
        {children}
    </div>
  )
}
