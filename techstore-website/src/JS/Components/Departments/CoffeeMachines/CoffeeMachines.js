import React from 'react'
import '../../../../CSS/Components/Departments/Department.css'
import Product from '../Product'
import Footer from '../../Footer'


export default function CoffeeMachines(props){
    const {coffeeProducts, onAdd} = props
    return(
        <div className="department">
            <h2 className="department__h2">Coffee Machines</h2>
            <div className="department__products">
                {coffeeProducts.map(product => <Product key={product.id} product={product} onAdd={onAdd} />)}
            </div>
            <Footer />
        </div>
    )
}