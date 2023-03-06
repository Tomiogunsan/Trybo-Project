import React from 'react'
import { ReactDOM } from 'react'

const ModalOverlay = (props) => {
    return (
        <div className='fixed top-0 left-0 '>
            <div>
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
