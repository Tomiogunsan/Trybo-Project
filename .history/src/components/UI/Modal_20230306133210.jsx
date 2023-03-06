import React from 'react'
import { ReactDOM  from 'react-dom'

const ModalOverlay = (props) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black/20'>
            <div className='fixed top-[20vh] left-[50%] w-[90%] bg-[#fcfcfc] p-4 rounded-2xl shadow-md z-30 animate-bounce'>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default function Modal(props) {
    const portalElement = document.getElementById('overlays')
  return (
    <>
    {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, portalElement
    )}
    
    </>
  )
}
