import React from 'react'
import ReactDOM  from 'react-dom'

const ModalOverlay = (props) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black/40' onClick={props.onClose}>
            <div className='fixed top-[20vh] left-0 md:left-[20] lg:left-[30%] lg:w-[40%] bg-[#fcfcfc] p-4 rounded-2xl shadow-md z-30 slide-down'>
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
