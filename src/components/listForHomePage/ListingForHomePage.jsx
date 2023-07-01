import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../../firebase'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import styles from './ListingForHomePage.module.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill }from "react-icons/bs";

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

   const [, setArrowDisable] = useState(true);

  const elementRef = useRef(null)
  const cardRef = useRef(null)
  const handleHorizantalScroll = (
    element,
    speed,
    distance,
    step
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
    console.log('clikc')
  };
  return (
    <Container>
      <div className="  mt-36 px-4 text-[#404040]">
        <h1 className=" text-2xl md:text-3xl font-semibold mb-9">
          Find spaces that suit your style
        </h1>
        {/* <div className='grid grid-cols-4 '> */}

        <div className="flex justify-end mb-6 gap-2">
          <div
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 5, 100, -10);
            }}
          >
            <BsFillArrowLeftCircleFill className="text-[60px]" />
          </div>
          <div
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 5, 100, 10);
            }}
          >
            <BsFillArrowRightCircleFill className="text-[60px]" />
          </div>
        </div>
        <div
          // install Swiper modules
           className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4"
          // className='flex flex-col lg:flex-row'
          ref={elementRef}
          style={{
            scrollbarWidth: "none",
          }}
        >
          {homeListing.map((listing) => {
            return (
              <div key={listing.id} ref={cardRef}>
                <div className={styles.swiperSlide}>
                  <Link to="/listing" className="cursor-pointer">
                    <img
                      src={listing?.imgUrls[0]}
                      alt="an apartment"
                      className=" w-full rounded-xl transition-transform ease-out hover:scale-105"
                    />
                    <p className=" font-medium text-lg pt-2 mb-2 w-[95%]  truncate">
                      {listing.name}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </Container>
  );
}
