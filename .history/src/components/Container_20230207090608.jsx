import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-[1270px] mx'>
        {children}
    </div>
  )
}
