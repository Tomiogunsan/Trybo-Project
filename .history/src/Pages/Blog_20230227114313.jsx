import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPostOne from '../components/BlogPostOne';
import { useState, useEffect } from "react";

import {db} from '../firebase';
import { collection } from 'firebase/firestore';


export default function Blog() {
    let {id } = useParams();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsCollectionRef = collection(db, 'posts')
        async function getPosts() {
            const data = await getDoc(postsCollectionRef);
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
