import React from 'react'
import drop from '../images/drop.png'



export default function Cards(props) {
    return (
        <div className='card'>
            <div className='card--image'>
                <img alt='' src={`${props.imageUrl}`} />
            </div>
            <div className='card--description'>
                <div className='country'>
                    <div className='country--name'>
                        <img alt='' src={drop}></img>
                        <h5>{props.location}</h5>
                    </div>
                    <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}