import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"
import Container from '../components/Container'

export default function BlogPostOne() {
    
    let {id } = useParams();
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
    <div>
       {posts.filter(post => post.id === id)?.map((post) => {
    
       return <>
       <Container>
       <div className='flex flex-col items-center'>
       <h2 className=' text-3xl pb-4'> {post.Title}</h2>
       <p className='text'>{post.Date}</p>
       <div>
        {post.Minute}
       </div>

       <div>
        {post.DescriptionA}
       </div>

       <div>
        {post.DescriptionB}
       </div>

       </div>
       </Container>
       
      
        
       </>
       
       })}
       
    </div>
  )
}
