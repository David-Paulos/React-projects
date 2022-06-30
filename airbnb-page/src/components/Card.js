import React from 'react'
import star from '../images/star.png'

export default function Card(props) {
    let badgeText;
    if(props.allData.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if(props.allData.location === 'Online') {
        badgeText = 'Online';
    }
    return (
        <div className="card">
            {badgeText && <div className='card--badge'>
                {badgeText}
            </div>}
            <img src={require(`../images/experiences/${props.allData.coverImg}`)} className="card--image" alt=''/>
            <div className="card--stats">
                <img src={star} alt='' className='card--star'/>
                <span>{props.allData.stats.rating}</span>
                <span className='gray'>({props.allData.stats.reviewCount}) • </span>
                <span className='gray'>{props.allData.location}</span>
            </div>
            <p>{props.allData.title}</p>
            <p><span className='bold'>From ${props.allData.price}</span> / person</p>
        </div>
    )
}