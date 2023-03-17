import React from 'react'
import Footer from '../components/Footer'
import Hero from "../components/Hero"
import Testimonial from "../components/Testimonial"
import BlogCard from "../components/BlogCard"
import Navbar from '../components/Navbar'
import ListingForHomePage from '../components/ListingForHomePage'

export default function Home() {
  return (
    <>
    <Navbar />
     <Hero/>
     <ListingForHomePage />
     {/* <Testimonial /> */}
     <BlogCard />
    <Footer></Footer>
    </>
   
  )
}
