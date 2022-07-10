import React from 'react'
import '../../../../CSS/Components/Departments/Department.css'
import Product from '../Product'
import Footer from '../../Footer'

export default function Headphones(props){
    const {headphonesProducts, onAdd} = props
    return(
        <div className="department">
            <h2 className="department__h2">Headphones</h2>
            <div className="department__products">
                {headphonesProducts.map(product => <Product key={product.id} product={product} onAdd={onAdd} />)}
            </div>
            <Footer />
        </div>
    )
}