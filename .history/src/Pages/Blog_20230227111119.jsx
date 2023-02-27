import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPostOne from '../components/BlogPostOne';

export default function Blog() {
    let {id } = useParams();
  return (
    <div>
        Now showing post {id}
        <BlogPostOne />
    </div>
  )
}

