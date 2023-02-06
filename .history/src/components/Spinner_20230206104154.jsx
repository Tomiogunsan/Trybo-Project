import { Circles} from  'react-loader-spinner'
import React from 'react'

export default function Spinner() {
  return (
    <div className='bg-black bg-opacity-50'>
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

