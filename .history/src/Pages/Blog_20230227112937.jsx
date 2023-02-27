import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPostOne from '../components/BlogPostOne';
import { useState, useEffect } from "react";

import {db} from '../firebase';
import { collection, getDocs } from "firebase/firestore"

export default function Blog() {
    let {id } = useParams();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsCollectionRef = collection(db, 'posts')
        async function get() => {
            const data = await getDocs(postsCollectionRef);
            console.log(data);
            console.log('hi')
            
        }
        getPosts()
    }, [])
  return (
    <div>
       
        <p>hi</p>
    </div>
  )
}

