import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"

export default function BlogPostOne() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsCollectionRef = collection(db, 'posts')
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            console.log(data);
        }
    }, [])
  return (
    <div>BlogPostOne</div>
  )
}
