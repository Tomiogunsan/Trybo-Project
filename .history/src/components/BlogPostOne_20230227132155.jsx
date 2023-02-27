import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"
import Container from 

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
       <div>
       <h2> {post.Title}</h2>
       <p>{post.Date}</p>
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
