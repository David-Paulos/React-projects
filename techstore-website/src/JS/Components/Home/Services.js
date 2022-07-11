import React from 'react'
import '../../../CSS/Components/Home/Services.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Services(){
    return(
        <div className="services">
            <div className="services__serviceContainer">
                <LocalShippingIcon className="services__serviceIcon"/>
                <h4 className="services__serviceDescription">Free delivery available</h4>
            </div>
            <div className="services__serviceContainer">
                <VideoCameraFrontIcon className="services__serviceIcon"/>
                <h4 className="services__serviceDescription">Shop live 24/7 and video call Us</h4>
            </div>
            <div className="services__serviceContainer">
                <CalendarMonthIcon className="services__serviceIcon"/>
                <h4 className="services__serviceDescription">Spread the cost from £100</h4>
            </div>
            <div className="services__serviceContainer">
                <StorefrontIcon className="services__serviceIcon"/>
                <h4 className="services__serviceDescription">Free order & collect in an hour</h4>
            </div>
        </div>
    )
}