import React from 'react'
import { ReactDOM } from 'react'

const ModalOverlay = (props) => {
    return (
        <div className='fixed t'>
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
