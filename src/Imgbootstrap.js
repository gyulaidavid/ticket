import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { freeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import "bootstrap/dist/css/bootstrap.min.css";

import Card from './components/Card'

function Imgbootstrap() {
  return (
    <div className='container px-4 px-4 justify-content-center'>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[freeMode]}
        className='mySwiper'
        slidesPerView={5}
        spaceBetween={30}
      >
        <SwiperSlide>
         <Card/>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}

export default Imgbootstrap;
