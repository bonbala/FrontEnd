import React from "react";
import "./styles.scss";
import slide1 from "../../assets/images/bg_1.jpg";
import slide2 from "../../assets/images/bg_2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/autoplay";
import 'swiper/scss/effect-fade';
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';


const Slide = () => {
  return (
    <div className="slide-component">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect={'fade'}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}

        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <div className="container-content">
            <div className="content container">
            <h1>Education Needs Complete Solution</h1>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <button>Contact us</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <div className="container-content">
          <div className="content container">
            <h1>Education Needs Complete Solution</h1>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <button>Contact us</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
