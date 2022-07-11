import React from 'react'
import '../../../../CSS/Components/Departments/Department.css'
import Product from '../Product'
import Footer from '../../Footer'

export default function TVs(props){
    const {tvsProducts, onAdd} = props
    return(
        <div className="department">
            <h2 className="department__h2">Televisions</h2>
            <div className="department__products">
                {tvsProducts.map(product => <Product key={product.id} product={product} onAdd={onAdd} />)}
            </div>
            <Footer />
        </div>
    )
}