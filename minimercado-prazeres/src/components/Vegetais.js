import React from 'react'
import ProductsDisplayer from '../components/ProductsDisplayer'
import Footer from '../components/Footer'
import vegetaisData from '../data/vegetais'
import '../css/Products-pages.css'
import banner from '../images/Products-pages/products-pages-image-Vegetables.webp'

export default function Vegetais(){
    const vegetaisItems = vegetaisData.map(data => {
        return (
            <ProductsDisplayer 
                key={data.id}
                itemImage={data.itemImage}
                itemName={data.itemName}
            />
    )})
    return (
        <div className="products">
            <div className="products__banner__container">
                <img className="products__banner__image" src={banner} alt=""/>
            </div>
            <h2 className="products__title">Vegetais</h2>
            <div className="products__displayer">
                {vegetaisItems}
            </div>
            <p className="products__warning">A disponibilidade de cada produto pode variar conforme as estações do ano.</p>
            <p className="products__warning">As imagens são meramente ilustrativas.</p>
            <Footer />
        </div>
    )
}