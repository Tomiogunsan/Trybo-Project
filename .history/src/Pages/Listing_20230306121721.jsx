import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import {FaChair, FaParking, FaShare} from 'react-icons/fa'
import {FcCalendar} from 'react-icons/fc'
import {RxPerson} from 'react-icons/rx'
import {IoTrainOutline} from 'react-icons/io5'
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
        <Container>
      <div className=' max-w-6xl mx-auto mt-10 px-4 grid md:grid-cols-2 gap-20'>
      
        <div className=' w-[350px]  '>
            <div className='flex flex-col  justify-between mb-2'>
            <p className='font-semibold text-2xl'>{listing.name} </p>
            <div className='w-[150px]  mt-4 mb-2 '>
            <p className='bg-green-800 text-white px-4 py-2 capitalize rounded-lg font-semibold'>${listing.price} per night</p>
            </div>
            
            </div>
            <div className='flex items-center gap-4'>
              <MdLocationOn className='text-red-600' /> 
            <p className=' text-lg text-gray-800'>{listing.address}</p>
            </div>
            <p className='text-base tracking-wider mt-4 mr-2'>{listing.description}</p>

        <div className=' mt-24 flex bg-blue-100  items-center gap-4 text-gray-800 mr-[4px] py-2'>
          <div className='bg-blue-800 rounded-full text-center py-6 text-[#fcfcfc] '>
            <p className='px-8 text-sm'>The</p>
            <p className=' uppercase text-base px-4'>Trybo</p>
            <p className='uppercase text-base px-6'>Promise</p>
          </div>
          <div>
            <p className='font-semibold'>Peace of mind guaranteed with every booking.</p>
            <p className='text-sm'>We promise expert-vetted homes, total transparency and exceptional service.</p>
          </div>
        </div>
        </div>
        <div className=' md:mx-12 w-[300px] md:w-[370px]  rounded-3xl shadow-xl md:mx-0 text-gray-700'>  
        <div className='flex  px-8 gap-3 mt-6 mb-2'>
          <div className='flex'>
            <RxPerson  className='text-2xl'/>
            <RxPerson className='text-2xl' />
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold'>{(listing.bedrooms === '1' ) ? 'Sleep up to 2' :
             (listing.bedrooms === '2') ? 'Sleep up to 4' : 'Sleep up to 6'
             }</p>
          <div className='flex'>
            <p>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"},</p>
            <p className='ml-[4px]'>{listing.bathroom > 1 ? `${listing.bathroom} Bathrooms` : "1 Bathroom"}</p>
            
          </div>
          <div className='flex'>
            <p>{listing.parking ? "Parking spot" : "No parking"}, </p>
            <p className='ml-[4px]'>{listing.furnished ? "Furnished" : "Not furnished"}</p>
          </div>
          </div>
          
          
        
       
        </div>
        
        
        <p className='border-[1px] border-gray-200 mx-4'></p>
        
        <div className='flex gap-[30px] px-8 mt-4 mb-2'>
          <IoTrainOutline className='text-3xl'/>
          <div>
          <p className='font-semibold'>4 mins walk to</p>
          <p>to city center</p>
          </div>
          
        </div>
        
        <p className='border-[1px] border-gray-200 mx-4'></p>
        <div className='flex gap-6 px-8 mt-4 mb-2'>
          <FcCalendar className='text-5xl'/>
          <div>
          <p className='font-semibold'>Get a 50% refund</p>
          <p>when you cancel up until 7 days before check-in </p>
          </div>
          
        </div>
        <p className='border-[1px] border-gray-200 '></p>
        <p className='text-center pt-4 pb-4'>Add dates for price</p>
        <div className='flex items-center justify-center mb-4'>
        <button className='bg-blue-800 text-white uppercase items-center px-16 py-2 rounded-full hover:bg-blue-900 cursor-pointer'>Check Availability</button>
        </div>
        
        </div>
      </div>
      </Container>
    </main>
  )
}

