import React from 'react'
import { Link } from "react-router-dom"
import '../../../CSS/Components/Home/Deal.css'

export default function Deal(props){
    return (
        <Link to={props.linkTo}>
            <figure className="deal__figure">
            <div className="deal__background">
                <div className="deal__imgContainer">
                    <img className="deal__img" src={props.dealImg} alt="" />
                </div>
            </div>
            <figcaption className="deal__figcaption">
                <h3 className="deal__h3">{props.dealTitle}</h3>
            </figcaption>
        </figure>
        </Link>
        
    )
}