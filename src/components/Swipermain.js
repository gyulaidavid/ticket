import React from "react";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
//import styles from "./Imageswiper.scss";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Swipermain() {
  const photos = ["gotmoney.jpg", "elon.jpg", "budget.jpg"];

  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
        >
          {photos.map((photo, i) => (
            <SwiperSlide>
              <img src={`pictures/${photo.toString()}`} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
