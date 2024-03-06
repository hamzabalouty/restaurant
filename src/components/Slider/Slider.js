import React, { useRef, useState } from 'react';
import "./Slider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Img1 from '../../assets/cat-2.jpg';
import Img2 from '../../assets/cat-1.jpg';
import Img3 from '../../assets/cat-4.jpg';
import Img4 from '../../assets/cat-3.jpg';
import Img5 from '../../assets/cat-5.jpg';

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider-title'>
                <p><span>- </span>From 11:00am to 10:00pm<span> -</span></p>
                <h3>ORDER ONLINE</h3>
            </div>
            <Swiper
                modules={[Pagination]}
                className="mySwiper"
            >
            <SwiperSlide>
                <div className='swiper-container'>
                    <img src={Img1} alt='image'/>
                    <img src={Img2} alt='image'/>
                    <img src={Img3} alt='image'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='swiper-container'>
                    <img src={Img2} alt='image'/>
                    <img src={Img4} alt='image'/>
                    <img src={Img5} alt='image'/>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
};

export default Slider;