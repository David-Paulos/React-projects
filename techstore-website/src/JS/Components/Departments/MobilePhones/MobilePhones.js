import React from 'react'
import '../../../../CSS/Components/Departments/Department.css'
import Product from '../Product'
import Footer from '../../Footer'

export default function MobilePhones(props){
    const {mobilesProducts, onAdd} = props
    return(
        <div className="department">
            <h2 className="department__h2">Mobile Phones</h2>
            <div className="department__products">
                {mobilesProducts.map(product => <Product key={product.id} product={product} onAdd={onAdd} />)}
            </div>
            <Footer />
        </div>
    )
}