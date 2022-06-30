import React from 'react'
import site_logo from '../images/airbnb.png'

export default function Navbar() {
    return (
        <nav>
            <img className='nav--logo' src={site_logo} alt='' />
        </nav>
    )
}