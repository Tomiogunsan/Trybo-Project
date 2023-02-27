import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPostOne from '../components/BlogPostOne';
import { useState, useEffect } from "react";




export default function Blog() {
    return (
        <div>
            <BlogPostOne />
        </div>
    )
}

