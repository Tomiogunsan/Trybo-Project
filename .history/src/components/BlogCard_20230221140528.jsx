import React from 'react'
import banner from '../Assets/banner.jpg'


const content = [
    {
    image: banner,
    title: "The next step in travel's future",
    link: "continue reading"
},
{
    image: banner,
    title: "The next step in travel's future",
    link: "continue reading"
},
{
    image: banner,
    title: "The next step in travel's future",
    link: "continue reading"
},
]


export default function BlogCard() {
  return (
    <div className='  mt-24'>
        <h1 className=' text-3xl md:text-5xl font font-semibold pb-8'>Trybo pulse</h1>
        <p className='text-lg md:w-[66%] lg:w-[42%] tracking-wider'>From latest news to team interviews, learn more about the passion that powers a Sonder.</p>
        {content.map((item, index) => 
            
            <div key={index} className="grid grid-cols-3 gap-4">
                <div></div>
                    <img src={item.image} alt='/' />
                    <h2>{item.title}</h2>
                    <p>{item.link}</p>
            </div>
        )}
    </div>
  )
}
