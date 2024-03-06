import React, { useRef, useState } from 'react';
import './Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Img1 from '../../assets/chef-service.jpg';
import Img2 from '../../assets/slide-1.jpg';

function SwiperPage() {
  return (
    <div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}

          modules={[Pagination]}
          className="mySwiper swiper-page"
        >
          <SwiperSlide>
            <div className='swiper-container'>
                <img src={Img1} alt='image'/>
                <div className='swiper-content'>
                    <h3>HIMAB RESTAURANT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-container'>
                <img src={Img2} alt='image'/>
                <div className='swiper-content'>
                    <h3>PROMO ACTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SwiperPage;