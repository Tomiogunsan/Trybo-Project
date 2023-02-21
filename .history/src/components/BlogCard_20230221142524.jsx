import React from 'react'
import banner from '../Assets/banner.jpg'


const content = 
    {
    image: banner,
    title: "The next step in travel's future",
    link: "continue reading"
}





export default function BlogCard() {
  return (
    <div className='  mt-24'>
        <h1 className=' text-3xl md:text-5xl font font-semibold pb-8'>Trybo pulse</h1>
        <p className='text-lg md:w-[66%] lg:w-[42%] tracking-wider'>From latest news to team interviews, learn more about the passion that powers a Sonder.</p>
       <div className="grid  grid-rows-3">
       {Array(3).fill(content).map((item, index) =>
            
            <ul key={index} >
                
                <img src={item.image} alt='/' className='w-[400px] '/>
                    <h2>{item.title}</h2>
                    <p>{item.link}</p>
                </li>
                    
            </ul>
        )}
       </div>
       
    </div>
  )
}
