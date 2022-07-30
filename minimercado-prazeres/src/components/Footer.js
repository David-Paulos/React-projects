import React from 'react'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import '../css/Footer.css'

export default function Footer(){
    const date = new Date().getFullYear()
    
    return(
        <div className="footer">
            <h2 className="footer__title">Mini Mercado Prazeres</h2>
            <div className="footer__info">
                <a href="tel:+351914881185">
                    <div className="footer__contact">
                        <LocalPhoneRoundedIcon className="footer__icon phone"/>
                        <h3 className="footer__contact__title">Ligue-nos</h3>
                        <p className="footer__contact__mobileNumber">+351 914 881 185</p>
                    </div>
                </a>
                <a href="https://goo.gl/maps/o8G8oMAvj76yUKAZ6" target="_blank">
                    <div className="footer__contact" id="maps_redirection">
                        <LocationOnRoundedIcon className="footer__icon"/>
                        <h3 className="footer__contact__title">Onde Estamos</h3>
                    </div>
                </a>
            </div>
            <div className="footer__rights">
                <h4 className="footer__rights__h4">&copy; {date} Mini Mercado Prazeres | All rights reserved</h4>
                <h4 className="footer__rights__h4">Developed by <a className="footer__myInfo" href="https://www.linkedin.com/in/david-paulos-web-developer" target="_blank">David Paulos</a></h4>
            </div>
        </div>
    )
}