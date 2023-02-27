import React from 'react'
import { useState, useEffect } from "react";
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"

export default function BlogPostOne() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsCollectionRef = collection(db, 'post')
    }, [])
  return (
    <div>BlogPostOne</div>
  )
}
