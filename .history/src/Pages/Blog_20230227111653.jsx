import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPostOne from '../components/BlogPostOne';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"

export default function Blog() {
    let {id } = useParams();
    
  return (
    <div>
        Now showing post {id}
        <BlogPostOne />
    </div>
  )
}

