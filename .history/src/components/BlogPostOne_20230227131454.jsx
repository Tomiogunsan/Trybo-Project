import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"

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
       <div>
       <h2> {post.Title}</h2>
       <p>{post.Date}</p>
       <div></div>

       </div>
      
        
       </>
       
       })}
       
    </div>
  )
}
