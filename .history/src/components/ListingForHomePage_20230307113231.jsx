import React, { useEffect, useState } from 'react'
import Container from './Container'
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../firebase'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

export default function ListingForHomePage() {
  const [homeListing, setHomeListing] = useState([])
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingRef = collection(db, 'listings')
        // create the query
        const q = query(listingRef, orderBy('timestamp', 'desc'))
        // execute the query
        const querySnap = await getDocs(q)
        console.log(querySnap)
        setHomeListing(
          querySnap.docs.map((doc) => {
            console.log(doc.id)
            return {
              ...doc.data(),
              id: doc.id,
            }
          }),
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings()
  }, [])
  return (
    <Container>
      <div className="mt-20 text-[#404040]">
        <h1 className="text-2xl font-semibold mb-9">
          Find spaces that suit your style
        </h1>
        {/* <div className='grid grid-cols-4 '> */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1040: {
              width: 1040,
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {homeListing.map((listing, index) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <Link to="/listing123" className="cursor-pointer">
                    <img
                      src={listing?.imgUrls[0]}
                      alt="an apartment"
                      className=" w-full transition-transform ease-out hover:scale-105"
                    />
                    <p className=" font-medium text-lg pt-4 w-[95%]  truncate">
                      {listing.name}
                    </p>
                  </Link>
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
        {/* </div> */}
      </div>
    </Container>
  )
}
