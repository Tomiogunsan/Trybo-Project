import React from 'react'


export default function Container({children}) {
  return (
    <div className='max-w-7xl mx-auto mt-20'>
       {children}
    </div>
  )
}
