import React from 'react'
import '../css/ProductsDisplayer.css'

export default function ProductsDisplayer(props){
    return (
        <figure className="product__container">
            <div className="product__image__container">
                <img className="product__image" src={props.itemImage} alt=""/>
            </div>
            <figcaption className="product__nameContainer">
                <p className="product__name">{props.itemName}</p>
            </figcaption>
        </figure>
    )
}