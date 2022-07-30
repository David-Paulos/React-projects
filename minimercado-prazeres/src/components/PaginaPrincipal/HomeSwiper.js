import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import '../../css/PaginaPrincipal/HomeSwiper.css'
import image1 from '../../images/HomeSwiper-images/HomeSwiper-image-1.webp'
import image2 from '../../images/HomeSwiper-images/HomeSwiper-image-2.webp'
import image3 from '../../images/HomeSwiper-images/HomeSwiper-image-3.webp'
import image4 from '../../images/HomeSwiper-images/HomeSwiper-image-4.webp'
import image5 from '../../images/HomeSwiper-images/HomeSwiper-image-5.webp'
import image6 from '../../images/HomeSwiper-images/HomeSwiper-image-6.webp'
import image7 from '../../images/HomeSwiper-images/HomeSwiper-image-7.webp'
import image8 from '../../images/HomeSwiper-images/HomeSwiper-image-8.webp'
import image9 from '../../images/HomeSwiper-images/HomeSwiper-image-9.webp'

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
            <SwiperSlide><img src={image5} alt="" className="homeSwiper__img"/></SwiperSlide>
            <SwiperSlide><img src={image6} alt="" className="homeSwiper__img"/></SwiperSlide>
            <SwiperSlide><img src={image7} alt="" className="homeSwiper__img"/></SwiperSlide>
            <SwiperSlide><img src={image8} alt="" className="homeSwiper__img"/></SwiperSlide>
            <SwiperSlide><img src={image9} alt="" className="homeSwiper__img"/></SwiperSlide>
        </Swiper>
        
    )
}