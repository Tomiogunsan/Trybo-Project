import React, { useEffect, useState } from "react";
import Container from "../Container";

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import styles from "./ListingForHomePage.module.css";

export default function ListingForHomePage() {
  const [homeListing, setHomeListing] = useState([]);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingRef = collection(db, "listings");
        // create the query
        const q = query(listingRef, orderBy("timestamp", "desc"));
        // execute the query
        const querySnap = await getDocs(q);

        setHomeListing(
          querySnap.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

 
  const img = homeListing && homeListing.map((item) => item?.imgUrls[0]);
  // console.log(img);
  const [currImg, setCurrImg] = useState(0);
  const handleNextSlide = () => {
    setCurrImg((prevIndex) => (prevIndex + 1) % img.length);
    console.log('click')

  };
  console.log(currImg)

  return (
    <Container>
      <div className="  mt-36 px-4 text-[#404040]">
        <h1 className=" text-2xl md:text-3xl font-semibold mb-9">
          Find spaces that suit your style
        </h1>
        {/* <div className="relative">
          <div className="flex  overflow-hidden ">
            {img.map((item, i) => (
              <div key={i}  className="absolute w-full">
                <img
                  src={item}
                  alt="a house"
                  className={` h-[300px] w-full transform ease duration-150 ${i === currImg ? 'translateX-[-100%]' : ''}`}
                />
                <div
                  style={{ backgroundImage: `url(${item})` }}
                  className={` w-full h-[300px] transform ease duration-150 bg-cover bg-no-repeat ${
                    i === currImg ? "translateX-[-100%]" : ""
                  }`} */}
                {/* />
              </div>
            ))}
          </div>
          <button className="z-10 absolute top-[50%]" onClick={handleNextSlide}>Next</button>
        </div> */}

        <div className=" w-full hidden lg:block">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => {}}
              onSlideChange={() => {}}
            >
              {homeListing.map((listing) => {
                return (
                  <div key={listing.id}>
                    <SwiperSlide>
                      <div className={styles.swiperSlide}>
                        <Link
                          to={"/listing"}
                          className="cursor-pointer"
                        >
                          <img
                            src={listing?.imgUrls[0]}
                            alt="an apartment"
                            // className=" min-w-[350px] w-[350px] h-[300px] rounded-xl transition-transform ease-out hover:scale-105"
                          />
                          <p className=" font-medium text-lg pt-2 mb-8 w-[95%]  truncate">
                            {listing.name}
                          </p>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex flex-col px-4 md:hidden">
        {homeListing?.map((listing) => {
          return (
            <div key={listing.id}>
              <Link to="/listing" className="cursor-pointer">
                <img
                  src={listing?.imgUrls[0]}
                  alt="an apartment"
                  className=" rounded-md"
                />
                <p className=" font-medium text-lg pt-2 mb-8 w-[95%]  truncate">
                  {listing.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
