import React from 'react'
import HomeSwiper from './HomeSwiper'
import DealsSwiper from './DealsSwiper'
import Services from './Services'
import Footer from '../Footer'

export default function Home(){
    return(
      <section className="home">
        <HomeSwiper />
        <DealsSwiper />
        <Services />
        <Footer />
      </section>
      
    )
}