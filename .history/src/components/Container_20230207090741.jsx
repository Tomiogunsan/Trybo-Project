import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w- mx-auto'>
        {children}
    </div>
  )
}
