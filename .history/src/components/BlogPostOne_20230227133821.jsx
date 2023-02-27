import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"
import Container from '../components/Container'
import {BiTime} from 'react-icons/bi'

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
       <p className='text-lg'>{post.Date}</p>
       <div className='flex items-center text-gray-900'>
        <BiTime  className='mr-[4px] '/>
        {post.Minute}
       </div>

       <div className=' pt-20 text-xl p'>
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
