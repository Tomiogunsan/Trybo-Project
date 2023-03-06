import React from 'react'
import { ReactDOM } from 'react'

const ModalOverlay = (props) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black/20'>
            <div className='fixed'>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default function Modal() {
    const portalElement = document.getElementById('overlays')
  return (
    <>
    {ReactDOM.createPortal}
    
    </>
  )
}
