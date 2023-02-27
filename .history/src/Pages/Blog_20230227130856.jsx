import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPostOne from '../components/BlogPostOne';
import { useState, useEffect } from "react";

import {db} from '../firebase


export default function Blog() {
    return (
        <div>
            <BlogPostOne />
        </div>
    )
}

