import React from 'react'
import banner from '../Assets/banner.jpg'
import C


const content = 
    {
    image: banner,
    title: "The next step in travel's future",
    link: "continue reading"
}





export default function BlogCard() {
  return (
    <div className=' text-[#404040] mt-24'>
      <Container>
        <h1 className=' text-3xl md:text-5xl font font-semibold pb-8'>Trybo pulse</h1>
        <p className='text-lg md:w-[66%] lg:w-[42%] tracking-wider'>From latest news to team interviews, learn more about the passion that powers a Sonder.</p>
       <div className="grid  grid-cols-3 mt-20">
       {Array(3).fill(content).map((item, index) =>
            
            <div key={index} >
                
                <img src={item.image} alt='/' className='w-[400px] '/>
                    <h2 className='text-lg pb-8'>{item.title}</h2>
                    <p>{item.link}</p>
                
                    
            </div>
        )}
       </div>
       </Container>
    </div>
  )
}
