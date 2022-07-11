import React from 'react'
import '../../../../CSS/Components/Departments/Department.css'
import Product from '../Product'
import Footer from '../../Footer'

export default function WashingMachines(props){
    const {washingProducts, onAdd} = props
    return(
        <div className="department">
            <h2 className="department__h2">Washing Machines</h2>
            <div className="department__products">
                {washingProducts.map(product => <Product key={product.id} product={product} onAdd={onAdd} />)}
            </div>
            <Footer />
        </div>
    )
}