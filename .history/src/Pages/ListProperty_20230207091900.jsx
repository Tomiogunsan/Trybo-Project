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
            <p>I simply adore the team at Plum Guide. Top-notch professionals who are a joy to work with. The writing and photography for our home is amazing. I know for sure that the guests and properties are well vetted.</p>
        </div>
        <div>B</div>
        </div>
        
      </Container>
    </>
  )
}
