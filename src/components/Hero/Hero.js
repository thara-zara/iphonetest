import React from 'react'
import "./Hero.css"


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar,Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  "swiper/css/autoplay";
function Hero(props){
    return(
        <div className='slider'>
        <Swiper
          // install Swiper modules
          autoplay={{
            delay:2000
          }}
          modules={[Navigation,A11y,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          Autoplay={true}
          navigation
          loop={true}
          /*pagination={{ clickable: true }}*/
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
                <SwiperSlide><img src={props.img1} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={props.img2} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={props.img3} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={props.img4} alt="img"/></SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Hero
