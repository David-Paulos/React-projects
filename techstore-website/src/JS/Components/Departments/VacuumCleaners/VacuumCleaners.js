import React from 'react'
import '../../../../CSS/Components/Departments/Department.css'
import Product from '../Product'
import Footer from '../../Footer'

export default function VacuumCleaners(props){
    const {vacuumProducts, onAdd} = props
    return(
        <div className="department">
            <h2 className="department__h2">Vacuum Cleaners</h2>
            <div className="department__products">
                {vacuumProducts.map(product => <Product key={product.id} product={product} onAdd={onAdd} />)}
            </div>
            <Footer />
        </div>
    )
}