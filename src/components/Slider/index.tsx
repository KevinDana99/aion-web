"use client";
import React, { ReactNode, useRef, useState } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import useMediaQuery from '@/hooks/useMediaquery';



const Slider = ({children}: {children: ReactNode[]}) => {
  const isMobile = useMediaQuery('mobile');
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    speed={5000}
    slidesPerView={isMobile ? 1 : children.length / 3}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      
    }}
    loop={true}
    pagination={true}
    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
    className="mySwiper"
  >
    {children.map((children,index) => {
  return <SwiperSlide key={index + 'key'
  }>
{children}
</SwiperSlide>
    })}
  </Swiper>
  )
}

export default Slider

