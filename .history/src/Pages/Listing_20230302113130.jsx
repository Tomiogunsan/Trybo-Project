import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase';
import {FaShare} from 'react-icons/fa'
import Spinner from '../components/Spinner';
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
      <div className='md:flex sm:flex-col items-center justify-center'>
        <div className='bg-red-600 md:w-[calc(100vw-256px)] '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error quos porro doloribus aspernatur. Veritatis consequuntur aliquid quia dolorem blanditiis pariatur natus, eum eius unde quibusdam reprehenderit et eveniet esse?</div>
        <div className='fixed w-64 bg-blue'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime temporibus praesentium esse iure, voluptas est. Maxime maiores facilis culpa provident! Nihil unde modi cum, vel minima eum? Aut, natus veniam?</div>
      </div>
      {/* </Container> */}
    </main>
  )
}

