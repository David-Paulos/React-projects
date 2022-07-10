import React from 'react'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import '../../../CSS/Components/Home/HomeSwiper.css'
import image1 from '../../../Images/HomeSwiper-images/HomeSwiper-image-1.jpg'
import image2 from '../../../Images/HomeSwiper-images/HomeSwiper-image-2.jpg'
import image3 from '../../../Images/HomeSwiper-images/HomeSwiper-image-3.jpg'
import image4 from '../../../Images/HomeSwiper-images/HomeSwiper-image-4.jpg'

export default function HomeSwiper(){
    return (
        <Swiper
        className="homeSwiper"
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{delay:5000, disableOnInteraction:false,}}
        navigation
        pagination={{ clickable: true, type:'bullets' }}
        >
            <SwiperSlide><img src={image1} alt="" className="homeSwiper__img"/></SwiperSlide>
            <SwiperSlide><img src={image2} alt="" className="homeSwiper__img"/></SwiperSlide>
            <SwiperSlide><img src={image3} alt="" className="homeSwiper__img"/></SwiperSlide>
            <SwiperSlide><img src={image4} alt="" className="homeSwiper__img"/></SwiperSlide>
        </Swiper>
    )
}