import React from 'react'
import "./SingleSlider.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  "swiper/css/autoplay";

import phone from "../../assests/iphone12.png"
import phone1 from "../../assests/13pg.jpg"
import phone2 from "../../assests/12p.jpg"
import phone3 from "../../assests/12.jpg"



const SingleSlider = () => {
  return (
    <div className='b-img-slider'>
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          Autoplay={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
                <SwiperSlide><img src={phone} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={phone1} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={phone2} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={phone3} alt="img"/></SwiperSlide>
                <br/>
                <br/>
        </Swiper>
    </div>
  )
}

export default SingleSlider