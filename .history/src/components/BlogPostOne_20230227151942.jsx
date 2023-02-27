import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"
import Container from '../components/Container'
import {BiTime} from 'react-icons/bi'
import SubHeader from '../components/SubHeader'

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
    <>
    <Container>
        
    <div>
       {posts.filter(post => post.id === id)?.map((post) => {
    
       return <div className='text-gray-700'>
       
       <div className='flex flex-col items-center'>
       <h2 className=' text-4xl pb-4 font-semibold'> {post.Title}</h2>
       <p className='text-lg'>{post.Date}</p>
       <div className='flex items-center text-[#556987] mb-4'>
        <BiTime  className='mr-[4px] '/>
        {post.Minute}
       </div>

       <div>
        {post.image && <img src={post.image} alt='an apartment' className='w-[50%] h-[20%] mx-auto'/>}
       </div>

       <div className=' pt-20 text-xl pb-12'>
        {post.DescriptionA}
       </div>

        <div className='flex gap-2 '>
            <img src={post.imageB} alt='an apartment' className='w-[30%] h-[20%] mx-aut'/>
            <img src={post.imageC} alt='an apartment' className='w-[30%] h-[20%]' />
        </div>
       <div className='text-xl'>
        {post.DescriptionB}
       </div>

    

       </div>
      
       
      
       
       </div>
       
       })}
       
    </div>
    
    </Container>
    </>
    
  )
}
