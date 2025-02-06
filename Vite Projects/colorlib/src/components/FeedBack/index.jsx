import React from 'react'
import './style.scss'
import feedBack1 from '../../assets/images/teacher-1.jpg'
import feedBack2 from '../../assets/images/teacher-2.jpg'
import feedBack3 from '../../assets/images/teacher-3.jpg'
import feedBack4 from '../../assets/images/teacher-4.jpg'
import { FaQuoteLeft } from "react-icons/fa";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/scss/autoplay";


const FeedBack = () => {
  return (
    <div className="feedback-component">
      <div className="title">
        <h2>Student Says About Us</h2>
        <p>
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>

      <div className="feedback-container container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}

        >
          <SwiperSlide>
            <img src={feedBack1} alt="" />
            <div className="text">
                <FaQuoteLeft className='icon-quote'/>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className='name'>Mark Huff</p>
              <span>Mother</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={feedBack2} alt="" />
            <div className="text">
                <FaQuoteLeft className='icon-quote'/>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className='name'>Mark Huff</p>
              <span>Mother</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={feedBack3} alt="" />
            <div className="text">
                <FaQuoteLeft className='icon-quote'/>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className='name'>Mark Huff</p>
              <span>Mother</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={feedBack4} alt="" />
            <div className="text">
                <FaQuoteLeft className='icon-quote'/>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className='name'>Mark Huff</p>
              <span>Mother</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FeedBack
