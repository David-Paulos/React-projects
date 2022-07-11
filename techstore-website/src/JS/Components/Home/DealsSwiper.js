import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Deal from './Deal'
import '../../../CSS/Components/Home/DealsSwiper.css'
import dealsData from './dealsData'

export default function DealsSwiper(){

    const Deals = dealsData.map(deal => {
        return(
            <SwiperSlide 
                key={deal.id}
                className="dealsSwiper__slide"
            >
                <Deal 
                linkTo={deal.linkTo}
                dealImg={deal.imgSrc}
                dealTitle={deal.imgTitle}    
                />
            </SwiperSlide>)})
    return(
        <section className="dealsSwiper">
            <h2 className="dealsSwiper__h2">Shop Deals</h2>
            <Swiper
        className="dealsSwiper__Swiper"
        modules={[ Navigation, Pagination, A11y]}
        spaceBetween={0}
        breakpoints={{
            320:{
                slidesPerView:2
            },
            480:{
                slidesPerView:3
            },
            760:{
                slidesPerView:4
            },
            1180:{
                slidesPerView:5
            }}}
        navigation
        pagination={{ clickable: true, type:'custom' }}
        >
        {Deals}
        </Swiper>  
        </section>
        
    )
}