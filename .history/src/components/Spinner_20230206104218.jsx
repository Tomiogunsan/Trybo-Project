import { Circles} from  'react-loader-spinner'
import React from 'react'

export default function Spinner() {
  return (
    <div className='bg-black bg-opacity-50 flex items-center justify-center fixed left-0'>
        <div>
        <Circles
  height="80"
  width="80"
  color="#2029A2"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
    </div>
    
  )
}

