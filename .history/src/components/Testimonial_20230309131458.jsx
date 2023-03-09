import React from 'react'
import Container from './Container'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'


export default function Testimonial() {
  return (
    <Container>
    <div className=' mt-11 text-[#404040] pb-11 px-4'>
        <h1 className=' text-3xl md:text-5xl font font-semibold pb-8'>Every stay has a story</h1>
        <p className='text-lg md:w-[66%] lg:w-[42%] tracking-wider'>It's hard to explain what makes Trybo so special. Unless, of course, you're one of our guests.</p>
    </div>

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={10}
      slidesPerView={3}
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
        slidesPerView:3,
    },
}}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <div className='bg-blue-900 text-white rounded-bl-[90px] w-full h-full '>
                <p className='text-2xl py-9 px-10'>
                "Love the app! It works like magic and all the information 
                is super helpful to make the experience seamlesss "
                </p>
                <p className='px-10  pt-6 md:pt-12 text-lg'>Mark</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-violet-900 text-white rounded-tr-[90px] w-full h-full'>
                <p className='text-2xl py-9 px-10'>
                "Love everything about Trybo. The staff made me feel at home. Would definitely 
                recommend this to everyone looking for a home away from home "
                </p>
                <p className='px-10 pt-6 text-lg'>Jane</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-gray-900 text-white rounded-tr-[90px]  w-full h-full'>
                <p className='text-2xl py-9 px-10'>
                "I had a wonderful stay and was blown away by the thoughtful design and functionality 
                of the apartment. Can't wait to check out other Trybos in the future "
                </p>
                <p className='px-10 text-lg'>Mandy</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-yellow-900 text-white rounded-bl-[90px]  w-full h-full'>
                <p className='text-2xl py-9 px-10'>
                "This Unit was perfect! I needed a furnished apartment for a few 
                months and Trybo thought of everything! "
                </p>
                <p className='px-10 pt-16 text-lg'>Leah</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' bg-slate-800 text-white rounded-bl-[90px]  w-fu '>
                <p className='text-2xl py-9 px-10'>
                "Our stay at the Wellborne was absolutely fabulous! The  check-in
                process was a breeze. The room and entire hotel were adorably decorated and everything 
                was super clean!"
                </p>
                <p className='px-10 text-lg'>Mercy</p>

            </div>
        </SwiperSlide>
        </Swiper>
    </Container>
  )
}
