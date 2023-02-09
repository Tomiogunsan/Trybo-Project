import React from 'react'


export default function Container({children}) {
  return (
    <div className='md:max-w-7xl mdmx-auto mt-20'>
       {children}
    </div>
  )
}
