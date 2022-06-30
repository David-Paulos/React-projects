import React from 'react'
import globe from '../images/globe.png'

export default function Header() {
    return (
        <header>
            <div>
                <img src={globe} alt=''></img>
                <h4>My travel journey</h4>
            </div>
        </header>
    )
}