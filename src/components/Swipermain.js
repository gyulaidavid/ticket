import React from "react";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
//import styles from "./Imageswiper.scss";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Swipermain() {
  const photos = ["alien.jpg", "mars_choco.jpg", "mars_hotel.jpg", "mars_massage.jpg", "mars_toilet.jpg", "mars_view.jpg" ];

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
