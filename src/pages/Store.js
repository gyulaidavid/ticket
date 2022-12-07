import { Row, Col, Fade } from "react-bootstrap";
import { productsArray } from "../productStore";
import ProductCard from "../components/ProductCard";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import styles from "./Imageswiper.scss";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function Store() {
  return (
    <>
      <h1>Welcome to the store!</h1>
      <div>
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
        >
          {productsArray.map((product, idx) => (
            <SwiperSlide>
              <Col align='center' key={idx}>
                <ProductCard product={product} />
              </Col>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Store;
