import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import {FaChair, FaParking, FaShare} from 'react-icons/fa'
import Spinner from '../components/Spinner';
import {MdLocationOn, MdOutlineBed} from 'react-icons/md'
import {FaBath} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import Container from '../components/Container';

export default function Listing() {
    const params = useParams()
    const [listing, setListing] = useState(null)
    const[loading, setLoading] = useState(true)
    const [shareLinkCopied, setShareLinkCopied] = useState(false);
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    useEffect(()=> {
        async function fetchListing(){
            const docRef = doc(db, 'listings', params.listingId);
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setListing(docSnap.data())
                setLoading(false)
                
            }
        }
        fetchListing()
    }, [params.listingId])
    if(loading){
        return <Spinner />
    }
  return (
    <main>
         <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[500px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="fixed top-[4%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setShareLinkCopied(true);
        setTimeout(() => {
          setShareLinkCopied(false);
        }, 2000);
      }}
      >
        <FaShare className="text-lg text-slate-500" />
      </div>
      {shareLinkCopied && (
        <p className="fixed top-[11%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2">
          Link Copied
        </p>
      )}
        {/* <Container> */}
      <div className=' max-w-6xl mx-auto mt-10 px-4 grid md:grid-cols-2 gap-20'>
      
        <div className='  '>
            <div className='flex justify-between mb-2'>
            <p className='font-semibold text-2xl'>{listing.name} </p>
            <p className='bg-blue-800 text-white px-4 py-2 capitalize rounded-lg font-semibold'>${listing.price} / night</p>
            </div>
            <div className='flex items-center gap-4'>
              <MdLocationOn className='text-blue-800' /> 
            <p className=' text-lg text-gray-00'>{listing.address}</p>
            </div>
            <p className='text-base tracking-wider mt-4'>{listing.description}</p>

        
        </div>
        <div className=' mx-12 w-[350px]  rounded-3xl shadow-xl md:mx-0 text-gray-700'>  
        <div className='flex  '>
        <div className='flex items-center px-8'>
            <MdOutlineBed className='text-2xl mr-4 text-gray-400'/>
        <p className='text-lg'>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
        </div>
        <div className='flex items-center p-4'>
        <FaBath className='text-xl mr-4 text-gray-400'/>
        <p className='text-lg'>{listing.bathroom > 1 ? `${listing.bathroom} Bathrooms` : "1 Bathroom"}</p>
        </div>
        </div>
        
        <p className='border-[1px] border-gray-200 mx-4'></p>
        
        
        <div className='flex'>
        <div className='flex items-center px-8'>
        <FaParking className="text-xl mr-1" />
        <p className='text-lg'> {listing.parking ? "Parking spot" : "No parking"}</p> 
        </div>
        <div className='flex items-center p-4'>
        <FaChair className="text-xl mr-1" />
        <p className='text-lg'>{listing.furnished ? "Furnished" : "Not furnished"}</p>
        </div>
        </div>
        <p className='border-[1px] border-gray-200 '></p>
        </div>
      </div>
      {/* </Container> */}
    </main>
  )
}

