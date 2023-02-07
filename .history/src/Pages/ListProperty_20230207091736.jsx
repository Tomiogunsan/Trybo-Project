import React from 'react'
import Container from '../components/Container'
import SubHeader from '../components/SubHeader'

export default function ListProperty() {
  return (
    <>
      <SubHeader />
      <Container>
        <div className='grid grid-cols-2 gap-4 mt-20'>
        <div>
          <h2 className='text-4xl font-semibold text-[#1a1e24] leading-[150%] capitalize '>
            Apply to list your exceptional home on Trybo
            </h2>
        </div>
        <div>B</div>
        </div>
        
      </Container>
    </>
  )
}
