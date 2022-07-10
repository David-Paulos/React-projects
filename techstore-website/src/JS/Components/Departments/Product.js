import React from 'react'
import '../../../CSS/Components/Departments/Product.css'

export default function Product(props){
    const {product, onAdd} = props
    return (
        <div className="product">
            <figure className="product__figure">
                <div className="product__figure__imgContainer">
                    <img className="product__figure__img" src={product.image} alt={product.name}/>
                </div>
                <div className="product__figure__description">
                    <h3 className="product__figure__h3">{product.name}</h3>
                    <h4  className="product__figure__h4">£{product.price}.00</h4>
                    <button className="product__figure__button" onClick={() => onAdd(product)}>Add to cart</button>
                </div>  
            </figure>
        </div>
    )
}