import React from 'react'
import Container from '../components/Container'
import SubHeader from '../components/SubHeader'

export default function ListProperty() {
  return (
    <>
      <SubHeader />
      <Container>
        <div className='grid grid-cols'>
        <div>A</div>
        <div>B</div>
        </div>
        
      </Container>
    </>
  )
}
