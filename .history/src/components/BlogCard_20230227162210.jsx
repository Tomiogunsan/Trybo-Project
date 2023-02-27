import React from 'react'
import banner from '../Assets/banner.jpg'
import Container from '../components/Container'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"


const content = 
    {
    image: banner,
    title: "The next step in travel's future",
    link: "continue reading"
}





export default function BlogCard() {

  const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsCollectionRef = collection(db, 'posts')
        async function getPosts() {
            const data = await getDocs(postsCollectionRef);
            console.log(data);
            setPosts(data.docs.map((doc) => {
                console.log(doc.id);
                return ({...doc.data(), id: doc.id}

            )}))
            
        }
        getPosts()
    }, [])
  return (
    <div className=' text-[#404040] mt-24'>
      <Container>
        <h1 className=' text-3xl md:text-5xl font font-semibold pb-8'>Trybo pulse</h1>
        <p className='text-lg md:w-[66%] lg:w-[42%] tracking-wider'>From latest news to team interviews, learn more about the passion that powers a Sonder.</p>
       <div className="grid  grid-cols-4 gap-4 mt-20">
       {posts.map((post) => (
       
            
            <div key={post.id} >
                
                <img src={post.image} alt='/' className='  '/>
                    <h2 className='pt-6 text-base pb-8 line-clamp-none w-'>{post.Title}</h2>
                    <p>Continue reading</p>
                
                    
            </div>
      )
        )}
       </div>
       </Container>
    </div>
  )
}
