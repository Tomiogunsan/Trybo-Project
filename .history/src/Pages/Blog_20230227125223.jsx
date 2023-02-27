import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPostOne from '../components/BlogPostOne';
import { useState, useEffect } from "react";

import {db} from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


export default function Blog() {
    let {id } = useParams();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsCollectionRef = collection(db, 'posts')
        async function getPosts() {
            const data = await getDocs(postsCollectionRef);
            console.log(data);
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id}
            )))
            
        }
        getPosts()
    }, [])
  return (
    <div>
       {posts.filter(post => post.id === id)?.ma}
       
    </div>
  )
}

